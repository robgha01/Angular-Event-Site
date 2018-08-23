import { Component, NgZone, Inject, ElementRef, ViewChild, AfterContentInit } from "@angular/core";
import * as $ from "jquery";
import * as Rx from "rxjs/Rx";
import * as UmbracoajaxService from "../../../umbraco-ajax-Service";
require("./clock.png");

@Component({
    selector: "widget-clock",
    template: require("./templates/clock.html"),
    styles: [require("./widget-clock.scss").toString()]
})
export class WidgetClockComponent implements AfterContentInit {
    @ViewChild("Clock") clock: ElementRef;
    @ViewChild("Sec") clockSec: ElementRef;
    @ViewChild("Hour") clockHour: ElementRef;
    @ViewChild("Min") clockMin: ElementRef;

    timeObservable: Rx.Observable<Date> = Rx.Observable.interval(1000).map(() => new Date());

    constructor(
        @Inject(UmbracoajaxService.UmbracoAjaxService) private umbracoAjaxService: UmbracoajaxService.UmbracoAjaxService,
        @Inject(NgZone) private zone: NgZone,
        @Inject(ElementRef) private elementRef: ElementRef) { }

    ngAfterContentInit(): void {
        this.timeObservable.subscribe((value: Date) => {
            let hours = value.getHours();
            let mins = value.getMinutes();
            let seconds = value.getSeconds();

            let sdegree = seconds * 6;
            let srotate = "rotate(" + sdegree + "deg)";
            $(this.clockSec.nativeElement).css({
                "-moz-transform": srotate,
                "-webkit-transform": srotate,
                "-ms-transform": srotate,
                "transform": srotate
            });

            let hdegree = hours * 30 + (mins / 2);
            let hrotate = "rotate(" + hdegree + "deg)";
            $(this.clockHour.nativeElement).css({
                "-moz-transform": hrotate,
                "-webkit-transform": hrotate,
                "-ms-transform": hrotate,
                "transform": hrotate
            });

            let mdegree = mins * 6;
            let mrotate = "rotate(" + mdegree + "deg)";
            $(this.clockMin.nativeElement).css({
                "-moz-transform": mrotate,
                "-webkit-transform": mrotate,
                "-ms-transform": mrotate,
                "transform": mrotate
            });
        });

        setTimeout(() => {
            $(this.clock.nativeElement).removeClass("hidden-xs-up");
        }, 1000);
    }
}
