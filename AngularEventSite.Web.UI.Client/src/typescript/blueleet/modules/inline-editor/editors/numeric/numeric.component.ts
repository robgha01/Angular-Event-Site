import { NgZone, Component, forwardRef, Input, ElementRef, Renderer } from "@angular/core";
import { InlineEditorComponent } from "../../inline-editor.component";
import { MakeProvider } from "../../../../abstraction/AbstractValueAccessor";
import { CapitalizePipe } from "../../../../pipes/capitalize.pipe";
import { InlineEditorContextService, InlineEditorGroupContextService } from "../../services/InlineEditorContext.service";
import { FocusService } from "../../../commonDirectives/focus.service";
const numericTypes: string[] = ["range", "number"];

@Component({
    selector: "inline-numeric-editor",
    template: require("../editor-base.html") + require("./numeric.html"),
    styles: [require("../../inline-editor.scss").toString()],
    providers: [MakeProvider(InlineNumericComponent), { provide: InlineEditorComponent, useExisting: forwardRef(() => InlineNumericComponent), multi: true }, CapitalizePipe, InlineEditorContextService, FocusService]
})
export class InlineNumericComponent extends InlineEditorComponent {
    @Input()
    min: number = 1;
    @Input()
    max = Infinity;
    type: string = "number";

    constructor(protected element: ElementRef, protected renderer: Renderer, protected zone: NgZone, protected contextService: InlineEditorContextService, protected contextGroupService: InlineEditorGroupContextService) {
        super(element, renderer, zone, contextService, contextGroupService);
    }

    // Method to display the editable value as text and emit save event to host
    onSubmit(value = this.value) {
        // This is for the range editor.
        const length = (numericTypes.indexOf(this.type) !== -1) ? Number(value) : value.length;
        if (length < this.min || length > this.max) {
        }

        super.onSubmit(value);
    }
}
