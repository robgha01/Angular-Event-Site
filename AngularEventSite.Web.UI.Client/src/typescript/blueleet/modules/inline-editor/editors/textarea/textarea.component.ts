import { NgZone, Component, forwardRef, Input, ElementRef, Renderer } from "@angular/core";
import { InlineEditorComponent } from "../../inline-editor.component";
import { MakeProvider } from "../../../../abstraction/AbstractValueAccessor";
import { CapitalizePipe } from "../../../../pipes/capitalize.pipe";
import { InlineEditorContextService, InlineEditorGroupContextService } from "../../services/InlineEditorContext.service";
import { FocusService } from "../../../commonDirectives/focus.service";

@Component({
    selector: "inline-textarea-editor",
    template: require("../editor-base.html") + require("./textarea.html"),
    styles: [require("../../inline-editor.scss").toString()],
    providers: [MakeProvider(InlineTextareaComponent), { provide: InlineEditorComponent, useExisting: forwardRef(() => InlineTextareaComponent), multi: true }, CapitalizePipe, InlineEditorContextService, FocusService]
})
export class InlineTextareaComponent extends InlineEditorComponent {
    @Input()
    cols: number = 50;
    @Input()
    rows: number = 4;

    constructor(protected element: ElementRef,
        protected renderer: Renderer,
        protected zone: NgZone,
        protected contextService: InlineEditorContextService,
        protected contextGroupService: InlineEditorGroupContextService) {
        super(element, renderer, zone, contextService, contextGroupService);
    }

    // Method to display the editable value as text and emit save event to host
    onSubmit(value = this.value) {
        super.onSubmit(value);
    }
}
