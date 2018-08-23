import { Component, Inject, NgZone, ViewContainerRef, ChangeDetectorRef, Renderer, OnInit, ElementRef } from "@angular/core";
import { IMemberPayload } from "../../abstraction/IMemberPayload";
import * as enums from "../../enums/";
import { TemplateBaseComponent } from "../abstraction/TemplateBaseComponent";
import * as bl from "../../blueleet";

@Component({
    selector: "auth-signout",
    template: `<ng-template [ngTemplateOutlet]="this.currentTemplate" [ngOutletContext]="{ $implicit: this }"></ng-template>`,
    styles: [require("./signout.scss").toString()],
})
export class SignoutComponent extends TemplateBaseComponent implements OnInit {
    viewState$: enums.DefaultViewState = enums.DefaultViewState.DefaultTemplate;
    model: IMemberPayload;

    constructor(
        @Inject(ChangeDetectorRef) changeDetectorRef: ChangeDetectorRef,
        @Inject(ViewContainerRef) viewContainer: ViewContainerRef,
        @Inject(NgZone) protected ngZone: NgZone,
        @Inject(Renderer) protected renderer: Renderer,
        @Inject(ElementRef) private elementRef: ElementRef,
        @Inject(bl.UmbracoAjaxService) protected umbracoAjaxService: bl.UmbracoAjaxService) {
        super(changeDetectorRef, viewContainer);
    }

    signout() {
        this.ngZone.run(() => {
            this.umbracoAjaxService.post("MemberSurface", "SignOutPost").then((value: IMemberPayload) => {
                window.location.href = value.loginUrl;
            });
        });
    }

    ngOnInit(): void {
        const self = this;
        self.ngZone.run(() => {
            self.umbracoAjaxService.post("MemberSurface", "GetMemberPost").then(value => {
                self.model = value;
                const collapseEl = $(self.elementRef.nativeElement).find(".auth-signout-collapse");

                $(document).on("click",
                    ($event: Event) => {
                        if (!$($event.target).closest(this.elementRef.nativeElement).length) {
                            $(collapseEl).hide();
                        }
                    });

                $(self.elementRef.nativeElement).find(".auth-signout-toggler").mouseenter(() =>
                {
                    $(collapseEl).show();
                });

                $(self.elementRef.nativeElement).mouseleave(() => {
                    $(collapseEl).hide();
                });
                
                //$(document).hover(
                //    ($event: Event) => {
                //        if (!$($event.target).closest(".auth-signout-toggler").length && !$($event.target).closest(".auth-signout-collapse").length) {
                //            $(collapseEl).hide();
                //        }
                //    }
                //);
                
            }).catch((reason: IMemberPayload) => {
                if (reason.status === enums.MemberStatus.LoginExpired) {
                    self.viewState = enums.DefaultViewState.None;
                }
            });
        });
    }
}

