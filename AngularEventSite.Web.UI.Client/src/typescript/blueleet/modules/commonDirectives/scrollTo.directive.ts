import { Directive, HostListener, ElementRef, Inject, Input, Renderer, OnInit } from "@angular/core";
import * as $ from "jquery";
const _ = require("lodash");

@Directive({ selector: "[scroll-to]" })
export class ScrollToDirective implements OnInit {
    @Input("scroll-to") scrollTo: string;
    @Input("scroll-duration") scrollDuration: number = 1000;

    element: JQuery;

    constructor( @Inject(ElementRef) public elementRef: ElementRef, @Inject(Renderer) public renderer: Renderer) { }

    @HostListener("click", ["$event"])
    onClick(event) {
        event.preventDefault();
        let scrollOptions: any = null;

        if (Object.isNotNullOrUndefined(this.scrollTo) && this.scrollTo !== "") {
            if (_.isNumber(this.scrollTo)) {
                scrollOptions = {
                    scrollTop: this.scrollTo
                };
            } else {
                const target = $(this.scrollTo);
                if (target.length) {
                    scrollOptions = {
                        scrollTop: target.offset().top
                    };
                }
            }
        }

        if (!scrollOptions) {
            // If we get here just scroll until this element is no longer in the viewport
            let offset = this.element.offset();
            let bottom = offset.top + this.element.outerHeight();

            scrollOptions = {
                scrollTop: bottom
            };
        }

        $("html, body").stop().animate(scrollOptions, this.scrollDuration);
    }

    ngOnInit(): void {
        this.element = $(this.elementRef.nativeElement);
        if (!this.scrollTo) {
            const href = this.element.attr("href");
            if (href.startsWith("#")) {
                this.scrollTo = href;
            }
        }
    }
}
