import { Component, TemplateRef, Input, OnInit, AfterContentInit, Output, EventEmitter, ElementRef, ContentChildren, ViewChild, Renderer, QueryList } from "@angular/core";
import { ModalDirective } from "ngx-bootstrap";
import { InlineEditorComponent } from "./inline-editor.component";
import { FocusService } from "../commonDirectives/focus.service";
import { InlineEditorGroupContextService } from "./services/InlineEditorContext.service";
import * as Rx from "rxjs/Rx";

export enum InlineEditorState {
    Save,
    Edit,
    Cancel
}

@Component({
    selector: "button-change",
    template: `<button class="btn btn-default" (click)="this.inlineEditorGroup.edit()"><span class="fa fa-pencil"></span> <ng-content></ng-content></button>`
})
export class ButtonChangeComponent {
    @Input() inlineEditorGroup: InlineEditorGroupComponent;
}

@Component({
    selector: "inline-editor-group",
    template: require("./inline-editor-group.html"),
    providers: [FocusService, InlineEditorGroupContextService]
})
export class InlineEditorGroupComponent implements OnInit, AfterContentInit {
    @ViewChild("editGroupModal")
    editGroupModal: ModalDirective;
    @ContentChildren(InlineEditorComponent, { descendants: true })
    inlineEditors: QueryList<InlineEditorComponent>;

    // Events
    @Output()
    onSave: EventEmitter<any> = new EventEmitter();
    @Output()
    onEdit: EventEmitter<any> = new EventEmitter();
    @Output()
    onCancel: EventEmitter<any> = new EventEmitter();

    // Settings
    @Input()
    disableSave: boolean = false;
    @Input()
    openInModal: boolean = false;
    @Input()
    visible: boolean = true;

    protected subjectStateChange: Rx.ReplaySubject<InlineEditorState> = new Rx.ReplaySubject(1);
    stateChange = this.subjectStateChange.asObservable();

    editTemplates: TemplateRef<any>[] = [];

    isEditing: boolean = false;

    constructor(protected element: ElementRef, protected renderer: Renderer, protected focusService: FocusService, protected contextGroupService: InlineEditorGroupContextService) { }

    ngAfterContentInit(): void {
        if (this.contextGroupService.editorGroupInstance.value === null) {
            this.inlineEditors.forEach((item) => {
                item.openInModal = false;
                item.showButtons = false;
                item.showEditState = this.openInModal === false;
                item.onSave = null;
                item.onEdit = null;
                item.onCancel = null;
                item.onClick = () => { };
                if (item.editing === false && this.isEditing) {
                    item.edit();
                }
            });

            this.contextGroupService.editorGroupInstance.next(this);
        }
    }

    ngOnInit() { }

    onShown() {
        if (this.openInModal) {
            this.focusService.reFocus();
        }
    }

    toggleGroupModal() {
        if (this.editGroupModal.isShown) {
            this.editGroupModal.hide();
        } else {
            this.editGroupModal.show();
        }
        this.inlineEditors.forEach((item) => {
            item.editing = this.editGroupModal.isShown;
        });
    }

    edit() {
        this.isEditing = true;
        if (this.openInModal) {
            this.toggleGroupModal();
        } else {
            this.inlineEditors.forEach((item) => {
                item.edit();
            });
        }

        if (this.onEdit) {
            this.onEdit.emit(this);
        }

        this.subjectStateChange.next(InlineEditorState.Edit);
    }

    // Method to display the editable value as text and emit save event to host
    protected onSubmit() {
        this.isEditing = false;
        this.subjectStateChange.next(InlineEditorState.Save);
        this.onSave.emit(this);

        if (this.openInModal) {
            this.toggleGroupModal();
        }

        this.inlineEditors.forEach((item) => {
            item.onSubmit();
        });
    }

    // Method to reset the editable value
    protected cancel() {
        this.isEditing = false;
        if (this.openInModal) {
            this.toggleGroupModal();
        }

        this.inlineEditors.forEach((item) => {
            item.cancel();
        });

        if (this.onCancel) {
            this.onCancel.emit(this);
        }

        this.subjectStateChange.next(InlineEditorState.Cancel);
    }
}
