import { Component, Input, NgZone, Inject, ElementRef, OnInit } from "@angular/core";
import * as $ from "jquery";
const Pace = require("pace-progress");

@Component({
    selector: "pace-progress",
    template: `<div class="pace-overlay"></div>`
})
export class PaceProgressComponent implements OnInit {
    defaultOptions: any = {

        /**
         * How long should it take for the bar to animate to a new
         * point after receiving it
         */
        catchupTime: 100,

        /**
         * How quickly should the bar be moving before it has any progress
         * info from a new source in %/ms
         */
        initialRate: .03,

        /**
         * What is the minimum amount of time the bar should be on the
         * screen.  Irrespective of this number, the bar will always be on screen for
         * 33 * (100 / maxProgressPerFrame) + ghostTime ms.
         */
        minTime: 250,

        /**
         * What is the minimum amount of time the bar should sit after the last update before disappearing
         */
        ghostTime: 100,

        /**
         * Its easy for a bunch of the bar to be eaten in the first few frames
         * before we know how much there is to load.  This limits how much of
         * the bar can be used per frame
         */
        maxProgressPerFrame: 20,

        /**
         * This tweaks the animation easing
         */
        easeFactor: 1.25,

        /**
         * Should pace automatically start when the page is loaded, or should it wait for `start` to
         * be called?  Always false if pace is loaded with AMD or CommonJS.
         */
        startOnPageLoad: true,

        /**
         * Should we restart the browser when pushState or replaceState is called? (Generally
         * means Ajax navigation has occurred)
         */
        restartOnPushState: true,

        /**
         * Should we show the progress bar for every Ajax request (not just regular or Ajax-y page
         * navigation)? Set to false to disable.
         *
         * If so, how many ms does the request have to be running for before we show the progress?
         */
        restartOnRequestAfter: 5000,

        /**
         * What element should the pace element be appended to on the page?
         */
        target: "body",

        elements: {
            /**
             * How frequently in ms should we check for the elements being tested for
             * using the element monitor?
             */
            checkInterval: 100,

            /**
             * What elements should we wait for before deciding the page is fully loaded (not required)
             */
            selectors: ["body"]
        },

        eventLag: {
            /**
             * When we first start measuring event lag, not much is going on in the browser yet, so it's
             * not uncommon for the numbers to be abnormally low for the first few samples.  This configures
             * how many samples we need before we consider a low number to mean completion.
             */
            minSamples: 10,

            /**
             * How many samples should we average to decide what the current lag is?
             */
            sampleCount: 3,

            /**
             * Above how many ms of lag is the CPU considered busy?
             */
            lagThreshold: 3
        },

        ajax: {
            /**
             * Which HTTP methods should we track?
             */
            trackMethods: ["GET","POST"],

            /**
             * Should we track web socket connections?
             */
            trackWebSockets: false,

            /**
             * A list of regular expressions or substrings of URLS we should ignore (for both tracking and restarting)
             */
            ignoreURLs: [/\/umbraco/, /\/dev-server\.js/, /\/browserLink/]
        }
    };

    @Input("options") options: any;

    constructor(
        @Inject(NgZone) private zone: NgZone,
        @Inject(ElementRef) private elementRef: ElementRef) { }

    ngOnInit(): void {
        let opt: any = {};
        $.extend(opt, this.defaultOptions, this.options);
        Pace.start(opt);
    }
}
