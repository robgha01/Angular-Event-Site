import { NgZone, Component, forwardRef, ElementRef, Renderer } from "@angular/core";
import { InlineEditorComponent } from "../../inline-editor.component";
import { MakeProvider } from "../../../../abstraction/AbstractValueAccessor";
import { CapitalizePipe } from "../../../../pipes/capitalize.pipe";
import { InlineEditorContextService, InlineEditorGroupContextService } from "../../services/InlineEditorContext.service";
import { FocusService } from "../../../commonDirectives/focus.service";

@Component({
    selector: "inline-datetime-editor",
    template: require("../editor-base.html") + require("./datetime.html"),
    styles: [require("../../inline-editor.scss").toString()],
    providers: [MakeProvider(InlineDatetimeComponent), { provide: InlineEditorComponent, useExisting: forwardRef(() => InlineDatetimeComponent), multi: true }, CapitalizePipe, InlineEditorContextService, FocusService]
})
export class InlineDatetimeComponent extends InlineEditorComponent {
    constructor(
        protected element: ElementRef,
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
