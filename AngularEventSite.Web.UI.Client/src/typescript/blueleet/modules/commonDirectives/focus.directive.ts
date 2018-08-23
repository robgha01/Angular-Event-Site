import { Directive, ElementRef, Inject, Input, OnChanges, SimpleChanges, AfterContentInit, AfterContentChecked } from "@angular/core";
import { FocusService } from "./focus.service";

@Directive({ selector: "[focuser]" })
export class FocuserDirective implements OnChanges, AfterContentInit, AfterContentChecked {
    @Input() focuser: boolean = false; // focus this element when "OnChange" or "AfterContentChecked" is triggered if this is set to true.
    hasFocus: boolean;

    private contentChecked: boolean = null;

    constructor( @Inject(ElementRef) private element: ElementRef, @Inject(FocusService) private focusService: FocusService) { }

    ngOnChanges(changes: SimpleChanges): void {
        let focus = changes["focuser"];

        // We only wants to focus if the previous value was false.
        if (focus.currentValue && focus.previousValue === false) {
            this.focusService.focus(this.element);
        }
    }

    ngAfterContentInit(): void {
        this.focusService.register(this, this.element);
    }

    ngAfterContentChecked(): void {
        if (this.focuser) {
            // We need to track if this is the first call to content checked.
            if (this.contentChecked === null) {
                this.contentChecked = false;
                return;
            }

            // If content checked is set to false we run the focus else do nothing.
            if (this.contentChecked === false) {
                this.contentChecked = true;
                this.focusService.focus(this.element);
            }
        }
    }
}
