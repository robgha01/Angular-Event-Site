import { ContentChild, TemplateRef, EmbeddedViewRef, ViewContainerRef, AfterContentInit, OnChanges, ChangeDetectorRef, SimpleChanges } from "@angular/core";
import * as enums from "../../enums/";
import { ITemplateBase } from "./ITemplateBase";

export abstract class TemplateBaseComponent implements ITemplateBase<enums.DefaultViewState>, AfterContentInit, OnChanges {
    @ContentChild(TemplateRef) defaultTemplate: TemplateRef<any>;
    viewRef: EmbeddedViewRef<any>;
    currentTemplate: TemplateRef<any>;
    context: Object;
    protected viewState$: enums.DefaultViewState | any;

    constructor(
        protected changeDetectorRef: ChangeDetectorRef,
        protected viewContainerRef: ViewContainerRef,
        private readonly handleTemplateOutput: boolean = false
    ) { }

    get viewState(): enums.DefaultViewState | any {
        return this.viewState$;
    }

    set viewState(value: enums.DefaultViewState | any) {
        this.viewState$ = value;
        this.updateTemplate();
    }

    getTemplate(): TemplateRef<any> {
        let template = null;
        switch (this.viewState) {
            case enums.DefaultViewState.DefaultTemplate:
                template = this.defaultTemplate;
                break;
        }

        this.currentTemplate = template;
        return template;
    }

    updateTemplate(): void {
        const template = this.getTemplate();

        if (this.currentTemplate !== template) {
            this.currentTemplate = template;
        }
    }

    init(templateRef): void {
        if (this.handleTemplateOutput) {
            this.context = { $implicit: this };
            if (Object.isNullOrUndefined(this.viewState)) {
                this.viewState = enums.DefaultViewState.DefaultTemplate;
            }
            this.viewRef = this.viewContainerRef.createEmbeddedView(templateRef, this.context);
            this.changeDetectorRef.detectChanges();
        }
    }

    ngOnChanges(changes?: SimpleChanges) {
        this.updateTemplate();
        if (this.handleTemplateOutput) {
            if (this.viewRef) {
                this.viewContainerRef.remove(this.viewContainerRef.indexOf(this.viewRef));
            }

            let templateRef = this.currentTemplate;
            if (templateRef) {
                this.viewRef = this.viewContainerRef.createEmbeddedView(templateRef, this.context);
            }
        }
    }

    ngAfterContentInit(): void {
        if (this.handleTemplateOutput) {
            setTimeout(() => {
                this.context = { $implicit: this };
                if (Object.isNullOrUndefined(this.viewState)) {
                    this.viewState = enums.DefaultViewState.DefaultTemplate;
                }
                this.viewRef = this.viewContainerRef.createEmbeddedView(this.getTemplate(), this.context);
                this.changeDetectorRef.detectChanges();
            },
                1);
        } else {
            if (Object.isNullOrUndefined(this.viewState)) {
                this.viewState = enums.DefaultViewState.DefaultTemplate;
            } else {
                this.updateTemplate();
            }
        }
    }
}
