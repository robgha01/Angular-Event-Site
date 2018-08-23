import { Component, NgZone, Inject, ElementRef, OnInit } from "@angular/core";
import { IQuickNavigatorMenu } from "./abstraction/IQuickNavigatorMenu";
import * as $ from "jquery";
import { UmbracoAjaxService } from "../../blueleet/";
require("./quicknav-arrow.png");
require("./umbraco.svg");

@Component({
    selector: "widget-quick-navigator",
    template: require("./templates/quicknavigator.html"),
    styles: [require("./widget-quickNavigator.scss").toString()]
})
export class WidgetQuickNavigatorComponent implements OnInit {
    isMenuOpen: boolean = false;
    menu: IQuickNavigatorMenu = undefined;

    constructor(
        @Inject(UmbracoAjaxService) private umbracoAjaxService: UmbracoAjaxService,
        @Inject(NgZone) private zone: NgZone,
        @Inject(ElementRef) private elementRef: ElementRef) { }

    toggle(event) {
        event.preventDefault();
        this.isMenuOpen = !this.isMenuOpen;
    }

    ngOnInit(): void {
        const promise = this.umbracoAjaxService.post("QuickNavigatorWidget", "GetLinkItemsPost", null, { silentTry: true });
        promise.then(value => {
            if (value) {
                this.zone.run(() => {
                    this.menu = value;
                    $(document).on("click", ($event: Event) => {
                        if (!$($event.target).closest(this.elementRef.nativeElement).length) {
                            // Hide the component.
                            this.isMenuOpen = false;
                        }
                    });
                });
            }
        });
    }
}
