import { NgZone, Component, HostListener, TemplateRef, Input, OnInit, AfterContentInit, Output, EventEmitter, ElementRef, ViewChild, ContentChild, Renderer } from "@angular/core";
import { ModalDirective } from "ngx-bootstrap";
import { AbstractValueAccessor } from "../../abstraction/AbstractValueAccessor";
import * as EditorContextService from "./services/InlineEditorContext.service";
import { InlineEditorGroupComponent } from "./inline-editor-group.component";

@Component({
    selector: "render-editor",
    template: `<ng-template [ngTemplateOutlet]="editor?.defaultEditTemplate" [ngOutletContext]="{ $implicit: this?.editor }"></ng-template>`
})
export class RenderEditorComponent implements OnInit {
    @Input() editor = null;

    constructor(protected contextService: EditorContextService.InlineEditorContextService) { }

    ngOnInit(): void {
        this.contextService.editorInstance.subscribe((value: any) => {
            if (Object.isNotNullOrUndefined(value)) {
                this.editor = value;
            }
        });
    }
}

@Component({
    selector: "presentation-state",
    template: `<ng-template *ngIf="this.editor" [ngTemplateOutlet]="this?.template" [ngOutletContext]="{ $implicit: editor }"></ng-template>`
})
export class PresentationStateComponent implements OnInit {
    @ContentChild(TemplateRef) template: TemplateRef<any>;
    @Input() editor = null;

    constructor(protected contextService: EditorContextService.InlineEditorContextService) { }

    ngOnInit(): void {
        this.contextService.editorInstance.subscribe((value: any) => {
            if (Object.isNotNullOrUndefined(value)) {
                this.editor = value;
            }
        });
    }
}

@Component({
    selector: "edit-state",
    template: `<ng-template *ngIf="this.editor" [ngTemplateOutlet]="this?.template" [ngOutletContext]="{ $implicit: editor }"></ng-template>`
})
export class EditStateComponent implements AfterContentInit {
    @ContentChild(TemplateRef) template: TemplateRef<any>;
    @Input() editor = null;

    constructor(protected contextService: EditorContextService.InlineEditorContextService) { }

    ngAfterContentInit(): void {
        this.contextService.editorInstance.subscribe((value: any) => {
            if (Object.isNotNullOrUndefined(value)) {
                this.editor = value;
            }
        });
    }
}

export abstract class InlineEditorComponent extends AbstractValueAccessor implements OnInit, AfterContentInit {
    @ViewChild("inlineEditControl") inlineEditControl: ElementRef;
    @ViewChild("editModal")
    editModal: ModalDirective;
    @ViewChild("editModalRef")
    editModalRef: ElementRef;
    @ContentChild(RenderEditorComponent) protected renderEditorComponent: RenderEditorComponent;

    // View templates
    @ViewChild("DefaultPresentation") defaultPresentationTemplate: TemplateRef<any>;
    @ViewChild("DefaultEdit") defaultEditTemplate: TemplateRef<any>;

    // User specefic templates
    @ContentChild(PresentationStateComponent) inputPresentationTemplate: PresentationStateComponent;
    @ContentChild(EditStateComponent) inputEditTemplate: EditStateComponent;

    // Events
    @Output()
    onSave: EventEmitter<any> = new EventEmitter();
    @Output()
    onEdit: EventEmitter<any> = new EventEmitter();
    @Output()
    onCancel: EventEmitter<any> = new EventEmitter();

    // Handles presentation and edit state.
    presentationTemplate: TemplateRef<any>;
    editTemplate: TemplateRef<any>;

    // input's attribute
    @Input()
    type: string;
    @Input()
    disabled: boolean;
    @Input()
    placeholder: string;
    @Input()
    name: string;
    @Input()
    size: number;
    @Input()
    openInModal: boolean;
    @Input()
    focusThis: boolean;
    @Input()
    formHorizontal: boolean = true;

    // Configuration attribute
    @Input()
    empty: string;

    showEditState: boolean = null;
    showButtons: boolean;
    editing: boolean;
    isEmpty: boolean;
    invalid: boolean;

    protected editorGroup: InlineEditorGroupComponent;

    constructor(
        protected element: ElementRef,
        protected renderer: Renderer,
        protected zone: NgZone,
        protected contextService: EditorContextService.InlineEditorContextService,
        protected contextGroupService: EditorContextService.InlineEditorGroupContextService
    ) {
        super();
    }

    @HostListener("click", ["$event"])
    onClick($event: MouseEvent): void {
        let targetElement = $event.target;
        if (this.editModalRef.nativeElement.contains(targetElement)) {
            // We are in the edit modal.
            return;
        }
        if (this.showButtons) {
            this.edit();
        }
    }

    showPresentation() {
        if (Object.isNotNullOrUndefined(this.showEditState) && this.showEditState === false) {
            return true;
        }

        if (this.openInModal) {
            return true;
        }

        if (this.editing === false) {
            return true;
        }

        return false;
    }

    showEdit() {
        if (Object.isNotNullOrUndefined(this.showEditState) && this.showEditState === false) {
            return false;
        }

        return this.editing;
    }

    onModalShown() { }

    setDisabledState(isDisabled: boolean): void {
        this.invalid = isDisabled;
    }

    ngAfterContentInit(): void {
        this.contextGroupService.editorGroupInstance.subscribe((editorGroup) => {
            if (editorGroup) {
                this.editorGroup = editorGroup;
                this.showButtons = false;

                if (this.editorGroup.isEditing && this.editing === false) {
                    this.edit();
                }
            }
        });

        if (this.editorGroup) {
            this.showButtons = false;
            if (this.editorGroup.isEditing && this.editing === false) {
                this.edit();
            }
        }
    }

    ngOnInit() {
        this.setDefaults();

        if (Object.isNotNullOrUndefined(this.inputPresentationTemplate)) {
            this.presentationTemplate = this.inputPresentationTemplate.template;
        } else {
            this.presentationTemplate = this.defaultPresentationTemplate;
        }

        if (Object.isNotNullOrUndefined(this.inputEditTemplate)) {
            this.editTemplate = this.inputEditTemplate.template;
        } else {
            this.editTemplate = this.defaultEditTemplate;
        }

        if (this.editModal) {
            this.editModal.config = { backdrop: "static" };
        }

        this.contextService.editorInstance.next(this);
    }

    writeValue(value: any) {
        if (value) {
            super.writeValue(value);
            this.isEmpty = false;
        } else {
            this.isEmpty = true;
        }
    }

    hasValue() {
        return !this.isEmpty;
    }

    // Method to display the editable value as text and emit save event to host
    onSubmit(value = this.value) {
        this.writeValue(value);
        if (this.onSave) {
            this.onSave.emit(value);
        }

        if (this.editModal) {
            this.editModal.hide();
        }

        this.editing = false;
        this.isEmpty = false;
    }

    // Method to display the inline edit form and hide the <a> element
    edit(value = this.value) {
        this.$preValue$ = value;  // Store original value in case the form is cancelled
        this.editing = true;

        if (this.onEdit) {
            this.onEdit.emit(this);
        }

        if (this.openInModal && this.editModal) {
            this.editModal.show();
        }
    }

    // Method to reset the editable value
    cancel() {
        this.value = this.$preValue$;

        if (this.editModal) {
            this.editModal.hide();
        }

        this.editing = false;
        if (this.onCancel) {
            this.onCancel.emit(this);
        }
    }

    protected presentControl(): string {
        return (this.isEmpty) ? this.empty : this.value;
    }

    private setDefaults(): void {
        // Configuratable properties.
        if (Object.isNullOrUndefined(this.type)) {
            this.type = "text";
        }
        if (Object.isNullOrUndefined(this.disabled)) {
            this.disabled = false;
        }
        if (Object.isNullOrUndefined(this.placeholder)) {
            this.placeholder = "";
        }
        if (Object.isNullOrUndefined(this.name)) {
            this.name = "";
        }
        if (Object.isNullOrUndefined(this.size)) {
            this.size = 8;
        }
        if (Object.isNullOrUndefined(this.openInModal)) {
            this.openInModal = false;
        }
        if (Object.isNullOrUndefined(this.focusThis)) {
            this.focusThis = false;
        }
        if (Object.isNullOrUndefined(this.empty)) {
            this.empty = "empty";
        }

        // Public state properties.
        if (Object.isNullOrUndefined(this.showButtons)) {
            this.showButtons = true;
        }
        if (Object.isNullOrUndefined(this.editing)) {
            this.editing = false;
        }
        if (Object.isNullOrUndefined(this.isEmpty)) {
            this.isEmpty = false;
        }
        if (Object.isNullOrUndefined(this.invalid)) {
            this.invalid = false;
        }
    }
}
