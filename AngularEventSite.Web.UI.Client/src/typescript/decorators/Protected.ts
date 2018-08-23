import { NgZone } from "@angular/core";
import { TemplateBaseComponent } from "../components/abstraction/TemplateBaseComponent";
import { UserService } from "../user.service";
const _ = require("lodash");

export function Protected<TFunction extends Function>(target: TFunction): TFunction {
    if (target.prototype instanceof TemplateBaseComponent) {
        let ngAfterContentInit = target.prototype.ngAfterContentInit;
        let updateTemplate = target.prototype.updateTemplate;

        Object.defineProperty(target.prototype,
            "updateTemplate",
            {
                value: function () {
                    const currentTemplateState = this.currentTemplate;
                    const viewContainerRef = this.viewContainerRef;
                    const zone: NgZone = viewContainerRef.injector.get(NgZone);
                    const userService: UserService = viewContainerRef.injector.get(UserService);
                    const args = arguments;

                    userService.onHasAccess.subscribe(hasAccess => {
                        zone.run(() => {
                            this.currentTemplate = null;
                            if (_.isBoolean(hasAccess) && hasAccess) {
                                this.currentTemplate = currentTemplateState;
                                return updateTemplate.apply(this, args);
                            } else {
                                this.currentTemplate = null;
                                return () => { };
                            }
                        });
                    });
                }
            });

        Object.defineProperty(target.prototype, "ngAfterContentInit", {
            value: function () {
                const viewContainerRef = this.viewContainerRef;
                const zone: NgZone = viewContainerRef.injector.get(NgZone);
                const userService: UserService = viewContainerRef.injector.get(UserService);
                const args = arguments;

                zone.run(() => {
                    userService.onHasAccess.subscribe((hasAccess: boolean) => {
                        if (_.isBoolean(hasAccess) && hasAccess) {
                            return ngAfterContentInit.apply(this, args);
                        } else {
                            this.currentTemplate = null;
                            return () => { };
                        }
                    });
                });

                return () => { };
            }
        });

        return target;
    }

    console.warn(`The object '${target.constructor.name}' is not supported for @Protected.`);
    return target;
}
