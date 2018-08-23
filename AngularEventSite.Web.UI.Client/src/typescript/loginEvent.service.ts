import { Injectable, Inject } from "@angular/core";
import * as Rx from "rxjs/Rx";
import * as bl from "./blueleet/";
import * as MemberPayload from "./abstraction/IMemberPayload";
import { IBroadcastEvent } from "./blueleet/broadcaster.service";

export enum LoginEventType {
    None,
    Success,
    GenericError,
    SignInError,
    SignUpError,
    ForgotPasswordError,
    ShowLoginView,
    ShowSignupView,
    ShowForgotPasswordView
}

@Injectable()
export class LoginEventService implements IBroadcastEvent<LoginEventType> {
    constructor( @Inject(bl.BroadcasterService) protected broadcaster: bl.BroadcasterService) { }

    emit(eventType: LoginEventType, data?: MemberPayload.IMemberPayload): void {
        let key = this.getKey(eventType);
        this.broadcaster.broadcast(key, data);
        if (eventType !== (LoginEventType.Success || LoginEventType.None)) {
            this.broadcaster.broadcast("LoginEventType:Error", data);
        }
    }

    on(eventType: LoginEventType): Rx.Observable<MemberPayload.IMemberPayload> {
        let key = this.getKey(eventType);
        return this.broadcaster.on<MemberPayload.IMemberPayload>(key);
    }

    onError(): Rx.Observable<MemberPayload.IMemberPayload> {
        return this.broadcaster.on<MemberPayload.IMemberPayload>("LoginEventType:Error");
    }

    getKey(ofType: LoginEventType) {
        switch (ofType) {
            case LoginEventType.Success:
                return "LoginEventType:Success";
            case LoginEventType.ForgotPasswordError:
                return "LoginEventType:ForgotPasswordError";
            case LoginEventType.GenericError:
                return "LoginEventType:GenericError";
            case LoginEventType.SignInError:
                return "LoginEventType:SignInError";
            case LoginEventType.SignUpError:
                return "LoginEventType:SignUpError";
            case LoginEventType.ShowLoginView:
                return "LoginEventType:ShowLoginView";
            case LoginEventType.ShowSignupView:
                return "LoginEventType:ShowSignupView";
            case LoginEventType.ShowForgotPasswordView:
                return "LoginEventType:ShowForgotPasswordView";
            default:
                return "LoginEventType:None";
        }
    }
}
