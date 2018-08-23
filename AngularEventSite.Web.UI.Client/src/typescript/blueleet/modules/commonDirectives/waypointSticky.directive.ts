import { Directive, ElementRef, Inject, Input, Renderer, OnInit } from "@angular/core";
import * as $ from "jquery";
import * as Rx from "rxjs";
const _ = require("lodash");
require("waypoints/lib/jquery.waypoints.js");
require("waypoints/lib/shortcuts/sticky.js");
declare const Waypoint: any;

@Directive({ selector: "[waypoint-sticky]" })
export class WaypointStickyDirective implements OnInit {
    @Input("waypoint-sticky") options: { top: string, bottom: string, scrolledClass: string, stuckClass: string };

    scrolled: boolean = false;
    scrollTopBoundry: number = 10;

    private scrollEventLock = new Rx.BehaviorSubject(null);
    private prevScrollTop = $(window).scrollTop();

    constructor( @Inject(ElementRef) protected elementRef: ElementRef, @Inject(Renderer) protected renderer: Renderer) { }

    ngOnInit(): void {
        const self = this;
        this.options = _.extend({}, { bottom: "", top: "", scrolledClass: "scrolled", stuckClass: "stuck" }, this.options);

        let el = $(this.elementRef.nativeElement);
        let offset = el.position().top;

        // ReSharper disable once UnusedLocals
        const sticky = new Waypoint.Sticky({
            element: $(this.elementRef.nativeElement)[0],
            stuckClass: this.options.stuckClass
        });

        (<any>$("body")).waypoint({
            offset: -(this.scrollTopBoundry + offset),
            handler() {
                // add / remove scrolled class
                el.toggleClass(self.options.scrolledClass);

                // remove swatch class
                let prefix = "swatch-";
                let classes = el[0].className.split(" ").filter(c => c.lastIndexOf(prefix, 0) !== 0);
                el[0].className = classes.join(" ");
                // add back swatch class depending on direction above / below scroll point
                // menuContainer.addClass(oxyThemeData.navbarScrolledSwatches[direction]);

                el.one("MSTransitionEnd webkitTransitionEnd oTransitionEnd transitionend", () => {
                    // refresh waypoints only once transition ends in order to get correct offsets for sections.
                    if (!el.hasClass("refreshing")) {
                        Waypoint.refreshAll();
                    }
                    el.toggleClass("refreshing");
                });
            }
        });
    }
}
