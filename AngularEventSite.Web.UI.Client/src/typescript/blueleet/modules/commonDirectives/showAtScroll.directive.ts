import { Directive, TemplateRef, ViewContainerRef, Inject, Input, OnInit } from "@angular/core";
import * as Rx from "rxjs";

@Directive({ selector: "[showAtScroll]" })
export class ShowAtScrollDirective implements OnInit {
    onStateChange = new Rx.BehaviorSubject<boolean>(false);
    isVisible: boolean = false;

    private hasView: boolean = false;
    @Input() private showAtScroll: number;

    constructor( @Inject(TemplateRef) private templateRef: TemplateRef<any>, @Inject(ViewContainerRef) private viewContainer: ViewContainerRef) { }

    onWindowScroll() {
        let scrollTop = $(window).scrollTop();

        if (scrollTop < 0) {
            scrollTop = 0;
        }

        if (scrollTop > $("body").height() - $(window).height()) {
            scrollTop = $("body").height() - $(window).height();
        }

        // console.log($(window).scrollTop(), scrollTop);
        this.isVisible = scrollTop > this.showAtScroll;
        this.onStateChange.next(this.isVisible);
    }

    ngOnInit(): void {
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

        // Check if we should show this view or not after the view has initialized.
        this.onWindowScroll();

        Rx.Observable.fromEvent(window, "scroll").throttle(() => { return this.onStateChange; }).subscribe(() => {
            this.onWindowScroll();
        });
    }
}
