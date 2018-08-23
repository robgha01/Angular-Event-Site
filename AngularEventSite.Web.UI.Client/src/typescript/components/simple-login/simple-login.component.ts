import { Component, Inject, NgZone, Input, ContentChild, ChangeDetectorRef, ViewChild, ViewContainerRef, TemplateRef, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { MemberStatus } from "../../enums";
import { IMemberPayload } from "../../abstraction/IMemberPayload";
import { TemplateBaseComponent } from "../abstraction/TemplateBaseComponent";
import * as bl from "../../blueleet";
import { LoginEventService, LoginEventType } from "../../loginEvent.service";
import { GenericMessages } from "../../enums/generic-messages-enum";
import { BootstrapAlertBoxComponent } from "../bootstrap/alert-box/alert-box.component";
import { AlertBoxOptions, AlertBoxEventType } from "../../alert-box.service";
import { NavigationService } from "../../navigation.service";

@Component({
    selector: "simple-login",
    template: require("./templates/simple-login.html"),
    providers: [NavigationService]
})
export class SimpleLoginComponent extends TemplateBaseComponent implements OnInit {
    @ContentChild(BootstrapAlertBoxComponent) alertBoxComponent: BootstrapAlertBoxComponent;
    @ViewChild("AlertEmailConfirmationNeeded") alertEmailConfirmationNeededTemplate: TemplateRef<any>;
    @Input("emailConfirmationText") emailConfirmationText: string;
    @Input("emailConfirmationButtonText") emailConfirmationButtonText: string;
    loginForm: FormGroup;
    payload: IMemberPayload;
    showForm: boolean = true;

    constructor(
        @Inject(ChangeDetectorRef) changeDetectorRef: ChangeDetectorRef,
        @Inject(ViewContainerRef) viewContainer: ViewContainerRef,
        @Inject(FormBuilder) private formBuilder: FormBuilder,
        @Inject(NgZone) private ngZone: NgZone,
        @Inject(Router) private router: Router,
        @Inject(bl.UmbracoAjaxService) private umbracoAjaxService: bl.UmbracoAjaxService,
        @Inject(LoginEventService) private loginEventService: LoginEventService,
        @Inject(NavigationService) private navigationService: NavigationService
    ) {
        super(changeDetectorRef, viewContainer);
    }

    isValid(): boolean {
        if (!Object.isNullOrUndefined(this.payload) && this.payload.messageType === GenericMessages.Danger) {
            return false;
        }

        return true;
    }

    sendConfirmationMail($event: Event) {
        $event.preventDefault();
        this.ngZone.run(() => {
            this.umbracoAjaxService.post("MemberSurface", "SendConfirmationMailPost", { email: this.payload.user.email })
                .catch((error: any) => {
                    this.payload = error;

                    // Show error alert box with message.
                    let alertBoxOption = new AlertBoxOptions(AlertBoxEventType.Error, error.message);
                    this.alertBoxComponent.show(alertBoxOption);

                    if (error.messageType === GenericMessages.Danger && error.status === (MemberStatus.AuthorizationFailure || MemberStatus.FacebookIntegrated)) {
                        this.loginEventService.emit(LoginEventType.SignInError, error);
                    } else {
                        this.loginEventService.emit(LoginEventType.GenericError, error);
                    }
                })
                .then((value: IMemberPayload) => {
                    if (value) {
                        this.payload = value;
                        if (value.messageType === GenericMessages.Success) {
                            let alertBoxOption = new AlertBoxOptions(AlertBoxEventType.Success, value.message);
                            this.alertBoxComponent.show(alertBoxOption);
                        }
                    }
                });
        });
    }

    doLogin($event: Event) {
        $event.preventDefault();
        console.log("[SimpleLoginFormComponent]:OnSubmit -> doLogin()", this.loginForm);
        this.ngZone.run(() => {
            this.umbracoAjaxService.post("MemberSurface", "SignInMemberPost", this.loginForm.value)
                .catch((error: any) => {
                    this.payload = error;

                    // Show error alert box with message.
                    let alertBoxOption = new AlertBoxOptions(AlertBoxEventType.Error, error.message);
                    this.alertBoxComponent.show(alertBoxOption);

                    if (error.messageType === GenericMessages.Danger && error.status === (MemberStatus.AuthorizationFailure || MemberStatus.FacebookIntegrated)) {
                        this.loginEventService.emit(LoginEventType.SignInError, error);
                    } else {
                        this.loginEventService.emit(LoginEventType.GenericError, error);
                    }
                })
                .then((value: IMemberPayload) => {
                    if (value) {
                        this.payload = value;
                        if (value.messageType === GenericMessages.Success) {
                            if (value.status === MemberStatus.EmailAuthorisationNeeded) {
                                this.showForm = false;
                                let alertBoxOption = new AlertBoxOptions(AlertBoxEventType.Success, value.message);
                                this.alertBoxComponent.show(alertBoxOption, this.alertEmailConfirmationNeededTemplate);
                                return;
                            }

                            if (value.status === MemberStatus.AlreadyLoggedIn) {
                                this.loginEventService.emit(LoginEventType.Success, value);
                            } else if (value.status === MemberStatus.LoggedIn || value.status === MemberStatus.AdminLoggedIn) {
                                this.loginEventService.emit(LoginEventType.Success, value);

                                // ToDo: change this!
                                if (window.location.pathname === "/kod") {
                                    return;
                                }
                                
                                if (value.redirectTo) {
                                    this.navigationService.navigate(value.redirectTo);
                                } else if (value.loginUrl.asUrl().pathname.indexOf(window.location.pathname) !== -1) {
                                    this.navigationService.navigate("/");
                                } else {
                                   this.navigationService.reload(); 
                                }
                            }
                        }
                    }
                });
        });
    }

    ngOnInit(): void {
        const confirmEmailToken = Object.getQueryStringValue("confirmEmailToken");
        if (!Object.isNullOrUndefined(confirmEmailToken)) {
        }

        this.loginForm = this.formBuilder.group({
            username: ["", Validators.required],
            password: ["", Validators.required],
            remember: ["1"]
        });
    }
}
