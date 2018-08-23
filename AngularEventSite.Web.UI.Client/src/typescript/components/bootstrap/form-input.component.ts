import { Component, SecurityContext, Sanitizer, ViewChild, Host, HostBinding, Input, ElementRef, Renderer, OnInit, AfterViewInit } from "@angular/core";
import { AbstractControl, FormGroupDirective } from "@angular/forms";
import { AbstractValueAccessor, MakeProvider } from "../../blueleet/abstraction/AbstractValueAccessor";
import * as $ from "jquery";
import * as Rx from "rxjs/Rx";
import { ValidationService } from "../../validation.service";
import { CapitalizePipe } from "../../blueleet/pipes/capitalize.pipe";
import { PasswordVerdict } from "../../enums/password-verdict";

@Component({
    selector: "bs-form-input",
    template: require("./templates/form-input.html"),
    styles: [require("./form-input.scss").toString()],
    providers: [MakeProvider(BootstrapFormInputComponent), CapitalizePipe]
})
export class BootstrapFormInputComponent extends AbstractValueAccessor implements OnInit, AfterViewInit {
    @HostBinding("class.has-error") hasError: boolean = false;

    @Input("FormControl") control: AbstractControl;
    @Input("renderedInForm") renderedInForm: boolean = true;
    @Input("lowercase") lowercase: boolean = false;
    @Input("label") label: string = null;
    @Input("name") name: string = null;
    @Input("type") type: string = "text";
    @Input("placeholder") placeholder: string = "";
    @Input("showPasswordStrength") showPasswordStrength: boolean = false;
    @Input("validateOnBlur") validateOnBlur: boolean = true;
    @Input("css") cssClass: string = "form-control";

    @ViewChild("input") inputElement: ElementRef;
    @ViewChild("progressBar") progressBar: ElementRef;

    progressBarModel: { message: string, passwordVerdict: PasswordVerdict };
    element: JQuery;
    inputSubject = new Rx.Subject<string>();
    inputValue: string = ""; // We use this instead of mapping against value to not trigger automatic updates so we can control when validators fire.
    errorMessage: string = "";

    constructor(
        public elementRef: ElementRef,
        private renderer: Renderer,
        private capitalizePipe: CapitalizePipe,
        private validationService: ValidationService,
        private sanitizer: Sanitizer,
        @Host() private form: FormGroupDirective
    ) {
        super();
    }

    updateErrorMessage() {
        let errorMessage: string = "";
        for (let propertyName in this.control.errors) {
            if (this.control.errors.hasOwnProperty(propertyName) && this.control.touched) {
                // First check if we have a attribute with the error message if not use the ValidationService.getValidatorErrorMessage.
                const errorAttr = this.element.attr(`error${this.capitalizePipe.transform(propertyName)}`);
                if (errorAttr) {
                    errorMessage = errorAttr;
                } else {
                    errorMessage = this.sanitizer.sanitize(SecurityContext.HTML, ValidationService.getValidatorErrorMessage(propertyName, this.control.errors[propertyName]));
                }
                break;
            }
        }

        if (this.errorMessage !== errorMessage) {
            this.errorMessage = this.sanitizer.sanitize(SecurityContext.HTML, errorMessage);
        }
    }

    triggerUpdate(value: string, event: Event) {
        if (this.lowercase) {
            value = value.toLowerCase();
        }

        if (!event.bubbles) {
            this.inputSubject.next(value);
        }
    }

    onBlur(value): void {
        const self = this;
        if (self.validateOnBlur && self.control.untouched) {
            self.control.markAsTouched();
            self.inputSubject.next(value);
        }
    }

    onFocusout(value) {
        const self = this;
        if (self.control.untouched) {
            self.control.markAsTouched();
        }
        self.inputSubject.next(value);
    }

    onFocus(value): void {
        const self = this;
        if (self.validateOnBlur === false && self.control.untouched) {
            self.control.markAsTouched();
            self.inputSubject.next(value);
        }
    }

    updateValue(value: string) {
        const self = this;
        if (self.control.value === value) {
            // Same value, already validated.
            return;
        }

        if (value === "" || Object.isNullOrUndefined(value)) {
            self.control.markAsUntouched();
        } else {
            // Set the control value but trigger value events only if the control is touched.
            self.control.patchValue(value, { emitEvent: self.control.touched });
        }
    }

    ngAfterViewInit(): void {
        const self = this;

        if (self.lowercase) {
            self.renderer.setElementStyle(this.inputElement.nativeElement, "text-transform", "lowercase");
        }

        // subscribe on keyup event and debounce it to prevent spam updatings.
        let inputKeyUpObservable = Rx.Observable
            .fromEvent(this.inputElement.nativeElement, "keyup")
            .map((i: any) => i.currentTarget.value);

        Rx.Observable
            .merge(inputKeyUpObservable, this.inputSubject)
            .debounceTime(500)
            .subscribe((value: string) => this.updateValue(value));

        this.control.statusChanges.subscribe(() => {
            console.log(this.control.errors);

            let hasError = this.control.touched && this.control.invalid;
            if (hasError) {
                this.updateErrorMessage();
            } else {
                this.errorMessage = "";
            }
            this.hasError = hasError;
        });

        if (self.showPasswordStrength) {
            self.validationService.onPasswordStrengthChange().subscribe((value) => {
                if (self.progressBar) {
                    self.progressBarModel = self.validationService.getPasswordVerdict(value.score);

                    if (self.value === "") {
                        self.progressBarModel.message = "";
                        self.renderer.setElementStyle(self.progressBar.nativeElement, "width", "0%");
                        return;
                    }

                    switch (self.progressBarModel.passwordVerdict) {
                        case PasswordVerdict.Weak:
                            self.renderer.setElementClass(self.progressBar.nativeElement, "progress-bar-danger", true);
                            self.renderer.setElementClass(self.progressBar.nativeElement, "progress-bar-warning", false);
                            self.renderer.setElementClass(self.progressBar.nativeElement, "progress-bar-success", false);
                            self.renderer.setElementStyle(self.progressBar.nativeElement, "width", "15%");
                            break;
                        case PasswordVerdict.Normal:
                            self.renderer.setElementClass(self.progressBar.nativeElement, "progress-bar-danger", false);
                            self.renderer.setElementClass(self.progressBar.nativeElement, "progress-bar-warning", true);
                            self.renderer.setElementClass(self.progressBar.nativeElement, "progress-bar-success", false);
                            self.renderer.setElementStyle(self.progressBar.nativeElement, "width", "25%");
                            break;
                        case PasswordVerdict.Medium:
                            self.renderer.setElementClass(self.progressBar.nativeElement, "progress-bar-danger", false);
                            self.renderer.setElementClass(self.progressBar.nativeElement, "progress-bar-warning", false);
                            self.renderer.setElementClass(self.progressBar.nativeElement, "progress-bar-success", true);
                            self.renderer.setElementStyle(self.progressBar.nativeElement, "width", "50%");
                            break;
                        case PasswordVerdict.Strong:
                            self.renderer.setElementClass(self.progressBar.nativeElement, "progress-bar-danger", false);
                            self.renderer.setElementClass(self.progressBar.nativeElement, "progress-bar-warning", false);
                            self.renderer.setElementClass(self.progressBar.nativeElement, "progress-bar-success", true);
                            self.renderer.setElementStyle(self.progressBar.nativeElement, "width", "75%");
                            break;
                        case PasswordVerdict.VeryStrong:
                            self.renderer.setElementClass(self.progressBar.nativeElement, "progress-bar-danger", false);
                            self.renderer.setElementClass(self.progressBar.nativeElement, "progress-bar-warning", false);
                            self.renderer.setElementClass(self.progressBar.nativeElement, "progress-bar-success", true);
                            self.renderer.setElementStyle(self.progressBar.nativeElement, "width", "100%");
                            break;
                    }
                }
            });
        }
    }

    ngOnInit(): void {
        this.element = $(this.elementRef.nativeElement);

        if (Object.isNullOrUndefined(this.control)) {
            const controlName = this.element.attr("formControlName");

            if (Object.isNullOrUndefined(controlName)) {
                throw "No formControlName set and 'FormControl' input is not set, either of those must be set!";
            }

            // Find the control in the Host (Parent) form
            let allControls = this.form.form.controls;
            this.control = allControls.hasOwnProperty(controlName) ? allControls[controlName] : null;
            if (Object.isNullOrUndefined(this.control)) {
                throw `Could not find control by ${controlName}!`;
            }
        }

        this.renderer.setElementClass(this.elementRef.nativeElement, "form-group", true);
        this.renderer.setElementClass(this.elementRef.nativeElement, "has-feedback", true);

        if (Object.isNullOrUndefined(this.label) || this.label === "") {
            this.label = this.placeholder;
        }

        // We may have a value already if the form is created with one.
        this.inputValue = this.control.value;
    }
}
