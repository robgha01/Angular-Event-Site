import { Directive, Input, TemplateRef, ViewContainerRef, Inject, AfterViewInit } from "@angular/core";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { UserService } from "./user.service";

@Directive({ selector: "[IfAdminAnd]" })
export class IfAdminAndDirective implements AfterViewInit {
    onStateChange = new BehaviorSubject<boolean>(false);
    private hasView: boolean = false;
    private condition: boolean = undefined;

    @Input("IfAdminAnd") set ifAdminAnd(condition: boolean) {
        this.condition = condition;
        if (this.userService.onIsAdminChange.value) {
            if (!condition && this.hasView) {
                this.onStateChange.next(false);
            } else if (condition && !this.hasView) {
                this.onStateChange.next(true);
            }
        }
    }

    constructor(
        @Inject(TemplateRef) private templateRef: TemplateRef<any>,
        @Inject(ViewContainerRef) private viewContainer: ViewContainerRef,
        @Inject(UserService) private userService: UserService) { }

    ngAfterViewInit(): void {
        this.viewContainer.clear();
        this.hasView = false;
        this.onStateChange.subscribe((showView) => {
            if (showView && !this.hasView) {
                this.hasView = true;
                this.viewContainer.createEmbeddedView(this.templateRef);
            } else if (!showView && this.hasView) {
                this.hasView = false;
                this.viewContainer.clear();
            }
        });

        this.userService.isAdmin().then(() => {
            this.userService.onIsAdminChange.subscribe((isAdmin) => {
                if (this.condition !== undefined && this.condition === false) {
                    isAdmin = false;
                }

                this.onStateChange.next(isAdmin);
            });
        });
    }
}

@Directive({ selector: "[IfAdmin]" })
export class IfAdminDirective implements AfterViewInit {
    onStateChange = new BehaviorSubject<boolean>(false);
    private hasView = false;

    constructor(
        @Inject(TemplateRef) private templateRef: TemplateRef<any>,
        @Inject(ViewContainerRef) private viewContainer: ViewContainerRef,
        @Inject(UserService) private userService: UserService) { }

    ngAfterViewInit(): void {
        this.viewContainer.clear();
        this.hasView = false;
        this.onStateChange.subscribe((showView) => {
            if (showView && !this.hasView) {
                this.hasView = true;
                this.viewContainer.createEmbeddedView(this.templateRef);
            } else if (!showView && this.hasView) {
                this.hasView = false;
                this.viewContainer.clear();
            }
        });

        this.userService.isAdmin().then(() => {
            this.userService.onIsAdminChange.subscribe((isAdmin) => {
                this.onStateChange.next(isAdmin);
            });
        });
    }
}
