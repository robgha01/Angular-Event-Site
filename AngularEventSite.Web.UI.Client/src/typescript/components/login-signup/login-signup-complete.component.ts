import { Component, Inject, NgZone, ViewContainerRef, ChangeDetectorRef, Renderer, OnInit } from "@angular/core";
import { LoginEventService, LoginEventType } from "../../loginEvent.service";
import { IMemberPayload } from "../../abstraction/IMemberPayload";
import * as enums from "../../enums/";
import { TemplateBaseComponent } from "../abstraction/TemplateBaseComponent";

@Component({
    selector: "login-signup-complete",
    template: `<ng-template [ngTemplateOutlet]="this.currentTemplate" [ngOutletContext]="{ $implicit: this }"></ng-template>`,
    styles: [require("./login-signup.scss").toString()]
})
export class LoginSignupCompleteComponent extends TemplateBaseComponent implements OnInit {
    viewState$: enums.DefaultViewState = enums.DefaultViewState.None;
    model: IMemberPayload;

    constructor(
        @Inject(ChangeDetectorRef) changeDetectorRef: ChangeDetectorRef,
        @Inject(ViewContainerRef) viewContainer: ViewContainerRef,
        @Inject(NgZone) protected ngZone: NgZone,
        @Inject(Renderer) protected renderer: Renderer,
        @Inject(LoginEventService) protected loginEventService: LoginEventService) {
        super(changeDetectorRef, viewContainer);
    }

    isNeedApproval(): boolean {
        if (Object.isNullOrUndefined(this.model)) {
            return false;
        }

        return this.model.status === enums.MemberStatus.NeedApproval;
    }

    isEmailAuthorisationNeeded(): boolean {
        if (Object.isNullOrUndefined(this.model)) {
            return false;
        }

        return this.model.status === enums.MemberStatus.EmailAuthorisationNeeded;
    }

    ngOnInit(): void {
        this.loginEventService.on(LoginEventType.Success).subscribe(value => {
            this.ngZone.run(() => {
                this.model = value;
                this.viewState = enums.DefaultViewState.DefaultTemplate;
            });
        });
    }
}
