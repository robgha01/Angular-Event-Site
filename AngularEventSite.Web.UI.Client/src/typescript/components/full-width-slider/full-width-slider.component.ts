import {
    Component, Input, Inject, NgZone, ViewChild, ChangeDetectorRef,
    TemplateRef, ViewContainerRef, OnInit, AfterContentInit
    } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { DomSanitizer } from "@angular/platform-browser";
import { TemplateBaseComponent } from "../abstraction/TemplateBaseComponent";
import * as bl from "../../blueleet";
import * as enums from "../../enums/";
const _ = require("lodash");

@Component({
    selector: "full-width-slider",
    template: require("./templates/full-width-slider.html"),
    styles: [require("./full-width-slider.scss").toString()]
})
export class FullWidthSliderComponent extends TemplateBaseComponent implements OnInit, AfterContentInit {
    @ViewChild("DefaultTemplate") defaultTemplate: TemplateRef<any>;
    
    @Input() continueText: string = "Continue";
    
    constructor(
        @Inject(ChangeDetectorRef) changeDetectorRef: ChangeDetectorRef,
        @Inject(ViewContainerRef) viewContainer: ViewContainerRef,
        @Inject(NgZone) private ngZone: NgZone,
        @Inject(FormBuilder) private formBuilder: FormBuilder,
        @Inject(FormBuilder) private sanitizer: DomSanitizer,
        @Inject(bl.UmbracoAjaxService) private umbracoAjaxService: bl.UmbracoAjaxService
    ) {
        super(changeDetectorRef, viewContainer);
    }
    
    scrollContinue() {
        
    }

    ngAfterContentInit(): void {
        
    }

    ngOnInit(): void {
        this.viewState = enums.DefaultViewState.DefaultTemplate;
    }
}
