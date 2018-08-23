import { Directive, ElementRef, Inject, Renderer, HostListener, Input, OnInit, AfterContentInit, OnChanges, SimpleChanges } from "@angular/core";
import * as Rx from "rxjs/Rx";
import * as $ from "jquery";
import { HoverableEventService, HoverableEventType } from "./hoverableEvent.service";

@Directive({
    selector: "[hoverable-group]",
    providers: [HoverableEventService]
})
export class HoverableGroupDirective implements OnInit, AfterContentInit, OnChanges {
    @Input("hoverable-group") group: string;
    @Input("show-on-hover") showOnHover: boolean = true;

    constructor( @Inject(HoverableEventService) private eventService: HoverableEventService) { }

    @HostListener("mouseenter")
    onMouseEnter(): void {
        this.eventService.emit(HoverableEventType.MouseEnter);
    }

    @HostListener("mouseleave")
    onMouseLeave(): void {
        this.eventService.emit(HoverableEventType.MouseLeave);
    }

    ngOnChanges(changes: SimpleChanges): void {
        const group = changes["group"];
        if (group) {
            // Checks if this is an existing item created before.
            if (typeof group.previousValue === "string") {
                this.eventService.setGroup(group.currentValue);
                this.eventService.emit(HoverableEventType.InstanceGroup, this);
            }
        }
    }

    ngAfterContentInit(): void {
        this.eventService.setGroup(this.group);
        this.eventService.emit(HoverableEventType.InstanceGroup, this);
    }

    ngOnInit(): void { }
}

@Directive({
    selector: "[hoverable]",
    providers: [HoverableEventService]
})
export class HoverableDirective implements AfterContentInit, OnChanges {
    @Input("hoverable") group: string = null;
    @Input("show-on-hover") showOnHover: boolean = null;
    @Input("visible-display-value") visibleDisplayValue: string = "inline-block";
    displayHiddenValue: string = "none";
    orginaValue: string;
    mouseEnterSubscription: Rx.Subscription;
    mouseLeaveSubscription: Rx.Subscription;

    constructor(
        @Inject(ElementRef) private elementRef: ElementRef,
        @Inject(Renderer) private renderer: Renderer,
        @Inject(HoverableEventService) private eventService: HoverableEventService) {
    }

    enter(): void {
        if (this.showOnHover) {
            this.renderer.setElementStyle(this.elementRef.nativeElement, "display", this.orginaValue);
        } else {
            this.renderer.setElementStyle(this.elementRef.nativeElement, "display", "none");
        }
    }

    leave(): void {
        if (this.showOnHover) {
            this.renderer.setElementStyle(this.elementRef.nativeElement, "display", "none");
        } else {
            this.renderer.setElementStyle(this.elementRef.nativeElement, "display", this.orginaValue);
        }
    }

    private initialize(instance?: HoverableGroupDirective): void {
        if (instance) {
            if (this.showOnHover === null && instance.showOnHover !== null) {
                this.showOnHover = instance.showOnHover;
            }
        }

        if (this.showOnHover) {
            this.renderer.setElementStyle(this.elementRef.nativeElement, "display", "none");
        } else {
            this.renderer.setElementStyle(this.elementRef.nativeElement, "display", this.orginaValue);
        }

        this.mouseEnterSubscription = this.eventService.on(HoverableEventType.MouseEnter).subscribe(() => {
            this.enter();
        });

        this.mouseLeaveSubscription = this.eventService.on(HoverableEventType.MouseLeave).subscribe(() => {
            this.leave();
        });
    }

    private updateOrginalValue(): void {
        this.orginaValue = $(this.elementRef.nativeElement).css("display");
    }

    ngOnChanges(changes: SimpleChanges): void {
        const group = changes["group"];
        if (group) {
            this.eventService.setGroup(group.currentValue);
            if (typeof group.previousValue !== "string") {
                // This is a new entity
                this.updateOrginalValue();

                // We set this as predefined to prevent it from showing up before we can determine if it should or not.
                this.renderer.setElementStyle(this.elementRef.nativeElement, "display", "none");

                if (this.group) {
                    // Subscribe to initialize event.
                    this.eventService.on(HoverableEventType.InstanceGroup).debounceTime(1000).subscribe((instance: HoverableGroupDirective) => {
                        // Unsubscrbie if already subscribing.
                        if (this.mouseLeaveSubscription) {
                            this.mouseLeaveSubscription.unsubscribe();
                        }
                        if (this.mouseEnterSubscription) {
                            this.mouseEnterSubscription.unsubscribe();
                        }

                        // This ensures initialize is called in the correct moment.
                        setTimeout(() => this.initialize(instance), 1);
                    });
                }
            }
        }
    }

    ngAfterContentInit(): void { }
}
