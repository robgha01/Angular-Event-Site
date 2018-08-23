import { Component, Inject, NgZone, TemplateRef, ContentChild, ChangeDetectorRef, ViewContainerRef, OnInit, AfterContentInit } from "@angular/core";
import { FormGroup, Validators, FormBuilder } from "@angular/forms";
import { IMemberPayload } from "../../abstraction/IMemberPayload";
import { TemplateBaseComponent } from "../abstraction/TemplateBaseComponent";
import * as bl from "../../blueleet";
import { LoginEventService, LoginEventType } from "../../loginEvent.service";
import { ValidationService } from "../../validation.service";
import * as enums from "../../enums/";

export enum ForgotPasswordViewState {
    None,
    DefaultTemplate,
    NewPasswordTemplate,
    MailSent
}

@Component({
    selector: "forgot-password",
    template: `<ng-template [ngTemplateOutlet]="this.currentTemplate" [ngOutletContext]="{ $implicit: this }"></ng-template>`
})
export class ForgotPasswordComponent extends TemplateBaseComponent implements OnInit, AfterContentInit {
    @ContentChild("NewPassword") newPasswordTemplate: TemplateRef<any>;
    @ContentChild("MailSent") mailSentTemplate: TemplateRef<any>;
    forgotPasswordForm: FormGroup;
    payload: IMemberPayload;
    token: string;

    constructor(
        @Inject(ChangeDetectorRef) changeDetectorRef: ChangeDetectorRef,
        @Inject(ViewContainerRef) viewContainer: ViewContainerRef,
        @Inject(FormBuilder) private formBuilder: FormBuilder,
        @Inject(NgZone) private ngZone: NgZone,
        @Inject(bl.UmbracoAjaxService) private umbracoAjaxService: bl.UmbracoAjaxService,
        @Inject(LoginEventService) private loginEventService: LoginEventService
    ) {
        super(changeDetectorRef, viewContainer);
    }

    get viewState(): ForgotPasswordViewState {
        return this.viewState$;
    }

    set viewState(value: ForgotPasswordViewState) {
        this.viewState$ = value;
        this.updateTemplate();
    }

    getTemplate(): TemplateRef<any> {
        let template = null;

        switch (this.viewState) {
            case ForgotPasswordViewState.DefaultTemplate:
                template = this.defaultTemplate;
                break;
            case ForgotPasswordViewState.NewPasswordTemplate:
                template = this.newPasswordTemplate;
                break;
            case ForgotPasswordViewState.MailSent:
                template = this.mailSentTemplate;
                break;
        }

        return template;
    }

    isValid(): boolean {
        if (!Object.isNullOrUndefined(this.payload) && this.payload.messageType === enums.GenericMessages.Danger) {
            return false;
        }

        return true;
    }

    doSubmit($event: Event) {
        $event.preventDefault();

        this.ngZone.run(() => {
            this.umbracoAjaxService.post("MemberSurface", "ForgotPasswordPost", this.forgotPasswordForm.value)
                .catch((error: any) => {
                    this.payload = error;
                    if (error.messageType === enums.GenericMessages.Danger && error.status === (enums.MemberStatus.AuthorizationFailure || enums.MemberStatus.FacebookIntegrated)) {
                        this.loginEventService.emit(LoginEventType.SignInError, error);
                    } else {
                        this.loginEventService.emit(LoginEventType.GenericError, error);
                    }
                })
                .then((value: IMemberPayload) => {
                    if (value) {
                        this.payload = value;
                        if (value.messageType === enums.GenericMessages.Success) {
                            this.viewState = ForgotPasswordViewState.MailSent;
                        }
                    }
                });
        });
    }

    doSubmitNewPassword($event: Event) {
        $event.preventDefault();

        this.ngZone.run(() => {
            this.umbracoAjaxService.post("MemberSurface", "NewPasswordPost", this.forgotPasswordForm.value)
                .catch((error: any) => {
                    this.payload = error;
                    if (error.messageType === enums.GenericMessages.Danger && error.status === (enums.MemberStatus.AuthorizationFailure || enums.MemberStatus.FacebookIntegrated)) {
                        this.loginEventService.emit(LoginEventType.SignInError, error);
                    } else if (error.messageType === enums.GenericMessages.Danger && error.status === enums.MemberStatus.LoginExpired) {
                        this.viewState = ForgotPasswordViewState.DefaultTemplate;
                        this.forgotPasswordForm = this.formBuilder.group({
                            email: ["", Validators.compose([Validators.required, ValidationService.email])]
                        });
                        if (history) {
                            // Remove the query string.
                            history.pushState(null, "", location.href.split("?")[0]);
                        }
                    } else {
                        this.loginEventService.emit(LoginEventType.GenericError, error);
                    }
                })
                .then((value: IMemberPayload) => {
                    if (value) {
                        this.payload = value;
                        if (value.messageType === enums.GenericMessages.Success) {
                            this.loginEventService.emit(LoginEventType.ShowLoginView, value);
                        }
                    }
                });
        });
    }

    ngAfterContentInit(): void {
        this.token = Object.getQueryStringValue("token");
        if (Object.isNullOrUndefined(this.token)) {
            this.viewState = ForgotPasswordViewState.DefaultTemplate;
        } else {
            this.viewState = ForgotPasswordViewState.NewPasswordTemplate;
        }
    }

    ngOnInit(): void {
        this.token = Object.getQueryStringValue("token");
        if (Object.isNullOrUndefined(this.token)) {
            this.forgotPasswordForm = this.formBuilder.group({
                email: ["", Validators.compose([Validators.required, ValidationService.email])]
            });
        } else {
            // Switch the view to forgot password
            this.loginEventService.emit(LoginEventType.ShowForgotPasswordView);
            let password = this.formBuilder.control("", ValidationService.passwordValidator(8));
            let confirmPassword = this.formBuilder.control("", ValidationService.equalTo(password, "Password", "Confirm Password"));
            this.forgotPasswordForm = this.formBuilder.group({
                password: password,
                confirmPassword: confirmPassword
            });
        }
    }
}
