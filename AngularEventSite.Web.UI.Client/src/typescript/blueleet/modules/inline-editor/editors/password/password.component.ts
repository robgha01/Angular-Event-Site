import { NgZone, Component, forwardRef, ElementRef, Renderer } from "@angular/core";
import { InlineEditorComponent } from "../../inline-editor.component";
import { MakeProvider } from "../../../../abstraction/AbstractValueAccessor";
import { CapitalizePipe } from "../../../../pipes/capitalize.pipe";
import { InlineEditorContextService, InlineEditorGroupContextService } from "../../services/InlineEditorContext.service";
import { FocusService } from "../../../commonDirectives/focus.service";

@Component({
    selector: "inline-password-editor",
    template: require("../editor-base.html") + require("./password.html"),
    styles: [require("../../inline-editor.scss").toString()],
    providers: [MakeProvider(InlinePasswordComponent), { provide: InlineEditorComponent, useExisting: forwardRef(() => InlinePasswordComponent), multi: true }, CapitalizePipe, InlineEditorContextService, FocusService]
})
export class InlinePasswordComponent extends InlineEditorComponent {
    constructor(protected element: ElementRef, protected renderer: Renderer, protected zone: NgZone, protected contextService: InlineEditorContextService, protected contextGroupService: InlineEditorGroupContextService) {
        super(element, renderer, zone, contextService, contextGroupService);
    }

    // Method to display the editable value as text and emit save event to host
    onSubmit(value = this.value) {
        super.onSubmit(value);
    }

    presentControl(): string {
        return "*".repeat(this.value.length);
    }
}
