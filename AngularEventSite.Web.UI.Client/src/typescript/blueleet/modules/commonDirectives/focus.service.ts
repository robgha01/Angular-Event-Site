import { Injectable, ElementRef } from "@angular/core";
import { FocuserDirective as FocusDirective } from "./focus.directive";

@Injectable()
export class FocusService {
    focusDirectives: { focusDir: FocusDirective, element: ElementRef }[] = [];

    register(focusDir: FocusDirective, element: ElementRef) {
        this.focusDirectives.push({ focusDir, element });
    }

    focus(element: ElementRef) {
        this.focusDirectives.forEach((value) => {
            if (element === value.element) {
                this.doFocus(value);
            }
        });
    }

    reFocus() {
        this.focusDirectives.forEach((value) => {
            if (value.focusDir.hasFocus) {
                value.element.nativeElement.focus(); // Trigger a focus.
            }
        });
    }

    private doFocus(item: { focusDir: FocusDirective, element: ElementRef }) {
        // Reset all hasFocus to false exept item
        this.focusDirectives.forEach((value) => {
            if (item !== value) {
                value.focusDir.hasFocus = false;
                value.focusDir.focuser = false;
            }
        });

        item.element.nativeElement.focus(); // Trigger the focus.
        item.focusDir.focuser = true; // Ensure item focus is true.
        item.focusDir.hasFocus = true; // Ensure item hasFocus is true.
    }
}
