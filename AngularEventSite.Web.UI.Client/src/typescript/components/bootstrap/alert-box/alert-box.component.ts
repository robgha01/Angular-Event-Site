import { Component, Inject, NgZone, Input, ViewChild, ChangeDetectorRef, TemplateRef, ViewContainerRef, OnInit, AfterContentInit } from "@angular/core";
import { TemplateBaseComponent } from "../../abstraction/TemplateBaseComponent";
import * as enums from "../../../enums/";
import { AlertBoxService, AlertBoxOptions, AlertBoxEventType } from "../../../alert-box.service";

@Component({
    selector: "alert-box",
    template: require("./templates/alert-box.html")
})
export class BootstrapAlertBoxComponent extends TemplateBaseComponent implements OnInit, AfterContentInit {
    @ViewChild("DefaultTemplate") defaultTemplate: TemplateRef<any>;
    @Input("isGlobal") isGlobal: boolean = false;
    alertTemplate: TemplateRef<any> = null;
    options: AlertBoxOptions = null;

    constructor(
        @Inject(ChangeDetectorRef) changeDetectorRef: ChangeDetectorRef,
        @Inject(ViewContainerRef) viewContainer: ViewContainerRef,
        @Inject(NgZone) private ngZone: NgZone,
        @Inject(AlertBoxService) private alertBoxService: AlertBoxService
    ) {
        super(changeDetectorRef, viewContainer);
    }

    ngAfterContentInit(): void {
        this.viewState$ = enums.DefaultViewState.None;
        super.ngAfterContentInit();
    }

    ngOnInit(): void {
        const self = this;
        if (self.isGlobal) {
            self.alertBoxService.on().subscribe((value: AlertBoxOptions) => {
                self.ngZone.run(() => {
                    self.options = value;
                    if (Object.isNullOrUndefined(value)) {
                        self.viewState = enums.DefaultViewState.None;
                    } else {
                        self.viewState = enums.DefaultViewState.DefaultTemplate;
                    }
                });
            });
        }
    }

    show(options: AlertBoxOptions, alertTemplate: TemplateRef<any> = null) {
        this.alertTemplate = alertTemplate;
        this.options = options;
        this.viewState = enums.DefaultViewState.DefaultTemplate;
    }

    isTypeInfo(): boolean {
        return this.options != null && this.options.type === AlertBoxEventType.Info;
    }

    isTypeSuccess(): boolean {
        return this.options != null && this.options.type === AlertBoxEventType.Success;
    }

    isTypeWarning(): boolean {
        return this.options != null && this.options.type === AlertBoxEventType.Warning;
    }

    isTypeError(): boolean {
        return this.options != null && this.options.type === AlertBoxEventType.Error;
    }
}
