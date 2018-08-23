import { ChangeDetectorRef, Component, Inject, ViewChild, ContentChild, TemplateRef, ViewContainerRef, OnInit } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";
import { TemplateBaseComponent } from "../abstraction/TemplateBaseComponent";
import * as enums from "../../enums";
import * as bl from "../../blueleet/";
import { ISearchResult } from "../../blueleet/modules/search/search.service";
import Uri = require("urijs");

@Component({
    selector: "search-result-empty",
    template: ``
})
export class SearchEmptyComponent extends TemplateBaseComponent implements OnInit {
    constructor(
        @Inject(ChangeDetectorRef) changeDetectorRef: ChangeDetectorRef,
        @Inject(ViewContainerRef) viewContainer: ViewContainerRef
    ) {
        super(changeDetectorRef, viewContainer);
    }

    show(term: string) {
        this.viewState = enums.DefaultViewState.DefaultTemplate;
    }

    hide() {
        this.viewState = enums.DefaultViewState.None;
    }

    ngOnInit(): void {
        this.viewState = enums.DefaultViewState.None;
    }
}

@Component({
    selector: "search-wall",
    template: require("./templates/search-wall.html"),
    styles: [require("./search-wall.scss").toString()]
})
export class SearchWallComponent extends TemplateBaseComponent implements OnInit {
    @ViewChild("DefaultTemplate") defaultTemplate: TemplateRef<any>;
    @ContentChild(SearchEmptyComponent) searchResultEmpty: SearchEmptyComponent;

    searchWord: string;
    searchForm: FormGroup;
    searchResult: ISearchResult = null;

    constructor(
        @Inject(ChangeDetectorRef) changeDetectorRef: ChangeDetectorRef,
        @Inject(ViewContainerRef) viewContainer: ViewContainerRef,
        @Inject(FormBuilder) private formBuilder: FormBuilder,
        @Inject(bl.ConfigService) private configService: bl.ConfigService,
    ) {
        super(changeDetectorRef, viewContainer);
    }

    onSearchUpdate(value: any) {
        console.log("[SearchBoxComponent => onSearchUpdate] triggered with value:", value);
        this.searchResult = value;

        if (this.searchResultEmpty) {
            if (this.searchResult.results.length === 0) {
                this.searchResultEmpty.show(this.searchWord);
            } else {
                this.searchResultEmpty.hide();
            }
        }
    }

    ngOnInit(): void {
        this.viewState = enums.DefaultViewState.None;
        this.configService.ensureConfigs().then(value => {
            const searchQueryKey = value.searchQueryKey;
            let searchTerm = "";

            let url = new Uri(window.location.href);
            if (url.hasQuery(searchQueryKey)) {
                let query = url.search(true);
                searchTerm = query[searchQueryKey];
            }

            this.searchForm = this.formBuilder.group({
                searchWord: [searchTerm]
            });

            this.searchForm.valueChanges.debounceTime(500).subscribe((newValue: any) => {
                // do something with value here
                console.log("[SearchBoxComponent] new value:'" + newValue.searchWord + "'", newValue);

                if (newValue.searchWord.length < 2) {
                    return;
                }

                url.setQuery(searchQueryKey, newValue.searchWord);
                let newUrl = url.href();

                // Update the query parameter
                history.pushState("", "", newUrl);

                // Trigger a search change event by assigning a new value to searchWord.
                this.searchWord = newValue.searchWord;
            });

            this.viewState = enums.DefaultViewState.DefaultTemplate;

            if (searchTerm.length > 1) {
                // Trigger search.
                this.searchForm.get("searchWord").patchValue(searchTerm);
            }
        });
    }

    isContent(type: enums.SearchType): boolean {
        return type === enums.SearchType.Content;
    }

    isMedia(type: enums.SearchType): boolean {
        return type === enums.SearchType.Media;
    }

    isFile(type: enums.SearchType): boolean {
        return type === enums.SearchType.File;
    }
}
