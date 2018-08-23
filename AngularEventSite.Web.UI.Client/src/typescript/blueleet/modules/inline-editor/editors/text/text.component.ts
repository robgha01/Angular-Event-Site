import { NgZone, Component, forwardRef, ElementRef, Renderer } from "@angular/core";
import { InlineEditorComponent } from "../../inline-editor.component";
import { MakeProvider } from "../../../../abstraction/AbstractValueAccessor";
import { CapitalizePipe } from "../../../../pipes/capitalize.pipe";
import { InlineEditorContextService, InlineEditorGroupContextService } from "../../services/InlineEditorContext.service";
import { FocusService } from "../../../commonDirectives/focus.service";

@Component({
    selector: "inline-text-editor",
    template: require("../editor-base.html") + require("./text.html"),
    styles: [require("../../inline-editor.scss").toString()],
    providers: [MakeProvider(InlineTextComponent), { provide: InlineEditorComponent, useExisting: forwardRef(() => InlineTextComponent), multi: true }, CapitalizePipe, InlineEditorContextService, FocusService]
})
export class InlineTextComponent extends InlineEditorComponent {
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
