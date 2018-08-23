import { Directive, ElementRef, Inject, Renderer, HostListener, Input, OnInit } from "@angular/core";
import * as $ from "jquery";

@Directive({ selector: "[icon-color]" })
export class IconColorDirective implements OnInit {
    @Input("icon-color") iconColor: string;
    $iconElement: any;

    constructor( @Inject(ElementRef) public elementRef: ElementRef, @Inject(Renderer) public renderer: Renderer) { }

    @HostListener("mouseenter")
    onMouseEnter(): void {
        this.highlight(this.iconColor);
    }

    @HostListener("mouseleave")
    onMouseLeave(): void {
        this.highlight(null);
    }

    private highlight(color: string): void {
        this.renderer.setElementStyle(this.$iconElement, "color", color);
    }

    ngOnInit(): void {
        this.$iconElement = $(this.elementRef.nativeElement).find("i")[0];
    }
}
