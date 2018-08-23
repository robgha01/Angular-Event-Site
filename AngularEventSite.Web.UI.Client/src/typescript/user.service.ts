import { Injectable, Inject, } from "@angular/core";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import * as bl from "./blueleet";
import { LoginEventService, LoginEventType } from "./loginEvent.service";
import { IMemberPayload as MemberPayload, IMemberPayload } from "./abstraction/IMemberPayload";
//import {IUser} from "./abstraction/IUser";

@Injectable()
export class UserService {
    onHasAccess = new BehaviorSubject<boolean>(false);
    onIsAdminChange = new BehaviorSubject<boolean>(false);

    // ReSharper disable once InconsistentNaming
    //private _member: IUser;

    constructor(
        @Inject(bl.UmbracoAjaxService) protected umbracoAjaxService: bl.UmbracoAjaxService,
        @Inject(LoginEventService) loginEventService: LoginEventService
    ) {
        loginEventService.on(LoginEventType.Success).subscribe((value: MemberPayload) => {
            if (value.user) {
                this.onHasAccess.next(true);
            }
        });
        loginEventService.onError().subscribe(() => {
            this.onHasAccess.next(false);
        });
    }

    //get member(): Promise<IUser> {
    //    if (this._member) {
    //        return Promise.resolve(this._member);
    //    }

    //    return this.getMember().then(value => {
    //        this._member = value.user;

    //        return this._member;
    //    });
    //}

    getMember(): Promise<IMemberPayload> {
        return this.umbracoAjaxService.post("MemberSurface", "GetMemberPost").then(value => {
            if (value) {
                this.onHasAccess.next(true);
            } else {
                this.onHasAccess.next(false);
            }

            return value;
        });
    }

    hasAccess(revalidate: boolean = true): Promise<boolean> {
        console.log(`HasAccess called`);
        let value = this.onHasAccess.getValue();
        if (revalidate === false && !Object.isNullOrUndefined(value)) {
            console.log(`HasAccess: Using stored value '${value}'`);
            return Promise.resolve(value);
        }

        const promise = this.umbracoAjaxService.post("MemberSurface", "HasAccessPost").catch((): void => {
            console.log(`HasAccess-Catch: Evaluated to 'false`);
            this.onHasAccess.next(false);
        }).then(v => {
            if (v) {
                console.log(`HasAccess-Then: Evaluated to 'true`);
                this.onHasAccess.next(true);
                return true;
            }

            console.log(`HasAccess-Then: Evaluated to 'false`);
            return false;
        });

        return promise;
    }

    isAdmin(): Promise<boolean> {
        console.log(`IsAdmin called`);
        const promise = this.umbracoAjaxService.post("MemberSurface", "IsAdminPost").then(value => {
            this.onIsAdminChange.next(value);
            return value;
        });
        return promise;
    }
}
