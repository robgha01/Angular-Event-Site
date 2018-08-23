import { NgZone, Component, forwardRef, Input, ElementRef, Renderer } from "@angular/core";
import { InlineEditorComponent } from "../../inline-editor.component";
import { MakeProvider } from "../../../../abstraction/AbstractValueAccessor";
import { CapitalizePipe } from "../../../../pipes/capitalize.pipe";
import { InlineEditorContextService, InlineEditorGroupContextService } from "../../services/InlineEditorContext.service";
import { FocusService } from "../../../commonDirectives/focus.service";

@Component({
    selector: "inline-select-editor",
    template: require("../editor-base.html") + require("./select.html"),
    styles: [require("../../inline-editor.scss").toString()],
    providers: [MakeProvider(InlineSelectComponent), { provide: InlineEditorComponent, useExisting: forwardRef(() => InlineSelectComponent), multi: true }, CapitalizePipe, InlineEditorContextService, FocusService]
})
export class InlineSelectComponent extends InlineEditorComponent {
    protected $options$;

    constructor(
        protected element: ElementRef,
        protected renderer: Renderer,
        protected zone: NgZone,
        protected contextService: InlineEditorContextService,
        protected contextGroupService: InlineEditorGroupContextService) {
        super(element, renderer, zone, contextService, contextGroupService);
    }

    get options() { return this.$options$; }

    @Input()
    set options(options) {
        this.$options$ = options;
    }

    // Method to display the editable value as text and emit save event to host
    onSubmit(value = this.value) {
        super.onSubmit(value);
    }
}
