import { Component, Inject, NgZone, ChangeDetectorRef, ViewContainerRef, OnInit } from "@angular/core";
import { FormGroup, Validators, FormBuilder } from "@angular/forms";
import { MemberStatus } from "../../enums";
import { IMemberPayload } from "../../abstraction/IMemberPayload";
import { TemplateBaseComponent } from "../abstraction/TemplateBaseComponent";
import * as bl from "../../blueleet";
import { LoginEventService, LoginEventType } from "../../loginEvent.service";
import { GenericMessages } from "../../enums/generic-messages-enum";
import { ValidationService } from "../../validation.service";

@Component({
    selector: "simple-signup",
    template: `<ng-template [ngTemplateOutlet]="this.currentTemplate" [ngOutletContext]="{ $implicit: this }"></ng-template>`
})
export class SimpleSignUpComponent extends TemplateBaseComponent implements OnInit {
    signUpForm: FormGroup;
    payload: IMemberPayload;
    signupSuccess: boolean = false;

    constructor(
        @Inject(ChangeDetectorRef) changeDetectorRef: ChangeDetectorRef,
        @Inject(ViewContainerRef) viewContainer: ViewContainerRef,
        @Inject(FormBuilder) private formBuilder: FormBuilder,
        @Inject(NgZone) private ngZone: NgZone,
        @Inject(bl.UmbracoAjaxService) private umbracoAjaxService: bl.UmbracoAjaxService,
        @Inject(LoginEventService) private loginEventService: LoginEventService,
        @Inject(ValidationService) private validationService: ValidationService
    ) {
        super(changeDetectorRef, viewContainer);
    }

    isValid(): boolean {
        if (!Object.isNullOrUndefined(this.payload) && this.payload.messageType === GenericMessages.Danger) {
            return false;
        }

        return true;
    }

    doSignUp($event: Event) {
        $event.preventDefault();

        this.ngZone.run(() => {
            this.umbracoAjaxService.post("MemberSurface", "SignUpMemberPost", this.signUpForm.value)
                .catch((error: any) => {
                    this.payload = error;
                    if (error.messageType === GenericMessages.Danger && error.status === (MemberStatus.AuthorizationFailure || MemberStatus.FacebookIntegrated)) {
                        this.loginEventService.emit(LoginEventType.SignInError, error);
                    } else {
                        this.loginEventService.emit(LoginEventType.GenericError, error);
                    }
                })
                .then((value: IMemberPayload) => {
                    console.log("SignUpMemberPost", value);
                    if (value) {
                        this.payload = value;
                        this.signupSuccess = true;
                    }
                });
        });
    }

    ngOnInit(): void {
        let password = this.formBuilder.control("", ValidationService.passwordValidator(8));
        let confirmPassword = this.formBuilder.control("", ValidationService.equalTo(password, "Password", "Confirm Password"));
        
        this.signUpForm = this.formBuilder.group({
            phone: ["", Validators.required],
            company: ["", Validators.required],
            email: ["", Validators.compose([Validators.required, ValidationService.email]), this.validationService.emailValidator(this.umbracoAjaxService).bind(this)],
            firstName: ["", Validators.required],
            lastName: ["", Validators.required],
            passwordGroup: this.formBuilder.group({
                password: password,
                confirmPassword: confirmPassword
            })
        });
    }
}
