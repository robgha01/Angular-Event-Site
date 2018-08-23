import { Component, Inject, NgZone, QueryList, ContentChildren, ContentChild, TemplateRef, ViewContainerRef, Renderer, OnInit, AfterContentInit } from "@angular/core";
import { LoginEventService, LoginEventType } from "../../loginEvent.service";
import { BootstrapFormInputComponent } from "../bootstrap/form-input.component";
import { UserService } from "../../user.service";
import { IMemberPayload as MemberPayload } from "../../abstraction/IMemberPayload";
import { GenericMessages } from "../../enums/generic-messages-enum";
import { MemberStatus } from "../../enums/member-status-enum";
import * as bl from "../../blueleet";
import { NavigationService } from "../../navigation.service";
const pace = require("pace-progress");

export enum LoginSignupViewState {
    None,
    LoginTemplate,
    SignupTemplate,
    ForgotPasswordTemplate,
    EventCodeTemplate
}

@Component({
    selector: "login-signup",
    template: `<ng-template [ngTemplateOutlet]="this.currentTemplate" [ngOutletContext]="{ $implicit: this }"></ng-template>`,
    styles: [require("./login-signup.scss").toString()],
    providers: [NavigationService]
})
export class LoginSignupComponent implements OnInit, AfterContentInit {
    @ContentChild("Login") loginTemplate: TemplateRef<any>;
    @ContentChild("Signup") signupTemplate: TemplateRef<any>;
    @ContentChild("ForgotPassword") forgotPasswordTemplate: TemplateRef<any>;
    @ContentChild("EventCode") eventCodeTemplate: TemplateRef<any>;
    @ContentChildren(BootstrapFormInputComponent, { descendants: true }) vc: QueryList<BootstrapFormInputComponent>;
    viewState$: LoginSignupViewState = LoginSignupViewState.LoginTemplate;

    get viewState() {
        return this.viewState$;
    }

    set viewState(value: LoginSignupViewState) {
        this.viewState$ = value;
        this.currentTemplate = this.getTemplate();
    }

    currentTemplate: TemplateRef<any>;

    constructor(
        @Inject(NgZone) protected ngZone: NgZone,
        @Inject(ViewContainerRef) protected viewContainerRef: ViewContainerRef,
        @Inject(Renderer) protected renderer: Renderer,
        @Inject(LoginEventService) protected loginEventService: LoginEventService,
        @Inject(UserService) protected userService: UserService,
        @Inject(bl.UmbracoAjaxService) private umbracoAjaxService: bl.UmbracoAjaxService,
        @Inject(NavigationService) private navigationService: NavigationService) {
    }

    getTemplate(): TemplateRef<any> {
        switch (this.viewState) {
            case LoginSignupViewState.LoginTemplate:
                return this.loginTemplate;
            case LoginSignupViewState.SignupTemplate:
                return this.signupTemplate;
            case LoginSignupViewState.ForgotPasswordTemplate:
                return this.forgotPasswordTemplate;
            case LoginSignupViewState.EventCodeTemplate:
                return this.eventCodeTemplate;
            default:
                return null;
        }
    }

    showLogin($event: Event): void {
        $event.preventDefault();
        this.ngZone.run(() => {
            this.viewState = LoginSignupViewState.LoginTemplate;
            console.log(this.vc);
        });
    }

    showSignup($event: Event): void {
        $event.preventDefault();
        this.ngZone.run(() => {
            this.viewState = LoginSignupViewState.SignupTemplate;
            console.log(this.vc);
        });
    }

    showForgotPassword($event: Event): void {
        $event.preventDefault();
        this.ngZone.run(() => {
            this.viewState = LoginSignupViewState.ForgotPasswordTemplate;
        });
    }

    ngAfterContentInit(): void {
        const self = this;
        pace.stop();
        pace.bar.render();
        self.userService.getMember().catch((reason: MemberPayload) => {
            pace.stop();
            pace.start();
            if (reason.status === MemberStatus.LoginExpired) {
                self.currentTemplate = self.getTemplate();
                self.vc.changes.subscribe((value: BootstrapFormInputComponent) => {
                });
            }
        }).then((value: MemberPayload) => {
            pace.stop();
            pace.start();
            if (value && value.messageType === GenericMessages.Success) {
                // Login successful redirect them to startpage.
                if (window.location.pathname === "/") {
                    self.navigationService.reload(true);
                } else {
                    self.navigationService.navigate("/");   
                }
            }
        });
    }

    ngOnInit(): void {
        const forgotPassToken = Object.getQueryStringValue("token");
        if (!Object.isNullOrUndefined(forgotPassToken)) {
            this.viewState = LoginSignupViewState.ForgotPasswordTemplate;
        }

        const eventCode = Object.getQueryStringValue("code");
        if (!Object.isNullOrUndefined(eventCode) || window.location.pathname === "/kod") {
            this.viewState = LoginSignupViewState.EventCodeTemplate;
        }

        this.loginEventService.on(LoginEventType.None).subscribe((): void => {
            this.viewState = LoginSignupViewState.None;
        });
        this.loginEventService.on(LoginEventType.Success).subscribe((): void => {
            // ToDo: change this!
            if (window.location.pathname === "/kod") {
                this.viewState = LoginSignupViewState.EventCodeTemplate;
            } else {
                this.viewState = LoginSignupViewState.None;
            }
        });
        this.loginEventService.on(LoginEventType.ShowLoginView).subscribe((): void => {
            this.viewState = LoginSignupViewState.LoginTemplate;
        });
        this.loginEventService.on(LoginEventType.ShowSignupView).subscribe((): void => {
            this.viewState = LoginSignupViewState.SignupTemplate;
        });
        this.loginEventService.on(LoginEventType.ShowForgotPasswordView).subscribe((): void => {
            this.viewState = LoginSignupViewState.ForgotPasswordTemplate;
        });
    }
}
