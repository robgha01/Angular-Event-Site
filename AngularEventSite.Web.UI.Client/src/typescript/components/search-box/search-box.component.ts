import { ChangeDetectorRef, Component, Inject, ViewContainerRef, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { TemplateBaseComponent } from "../abstraction/TemplateBaseComponent";
import { Protected } from "../../decorators/Protected";
import * as enums from "../../enums";

@Protected
@Component({
    selector: "search-box",
    template: `<ng-template [ngTemplateOutlet]="this?.currentTemplate" [ngOutletContext]="{ $implicit: this }"></ng-template>`,
    styles: [require("./search-box.scss").toString()]
})
export class SearchBoxComponent extends TemplateBaseComponent implements OnInit {
    searchForm: FormGroup;

    constructor(
        // @Inject(bl.ConfigService) private configService: bl.ConfigService,
        // @Inject(bl.UmbracoAjaxService) private umbracoAjaxService: bl.UmbracoAjaxService
        @Inject(ChangeDetectorRef) changeDetectorRef: ChangeDetectorRef,
        @Inject(ViewContainerRef) viewContainer: ViewContainerRef,
        @Inject(FormBuilder) private formBuilder: FormBuilder
    ) {
        super(changeDetectorRef, viewContainer);
    }

    doSearch($event: Event) {
        $event.preventDefault();
        console.log("[SearchBoxComponent]:OnSubmit -> search()", this.searchForm);
    }

    ngOnInit(): void {
        this.viewState = enums.DefaultViewState.DefaultTemplate;

        this.searchForm = this.formBuilder.group({
            searchWord: ["", Validators.required]
        });

        this.searchForm.valueChanges.subscribe(value => {
            // do something with value here
            console.log("[SearchBoxComponent] new value:'" + value.searchWord + "'", value);
        });

        // this.configService.ensureConfigs()
        //    .then(configs => {});
    }
}
