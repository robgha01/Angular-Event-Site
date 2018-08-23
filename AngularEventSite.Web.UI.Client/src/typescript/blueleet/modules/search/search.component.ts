import { Component, Input, NgZone, Inject, ElementRef, TemplateRef, ContentChild, OnChanges, SimpleChanges, Output, EventEmitter } from "@angular/core";
import { SearchService, ISearchResult } from "./search.service";

@Component({
    selector: "bl-search",
    template: `<ng-template [ngTemplateOutlet]="this?.searchTemplate" [ngOutletContext]="{ $implicit: this }"></ng-template>`,
    styles: [require("./search.scss").toString()]
})
export class SearchComponent implements OnChanges {
    @ContentChild(TemplateRef) searchTemplate: TemplateRef<any> = null;

    @Input("searchTerm") searchTerm: string;

    @Output("onSearchUpdate") onSearchUpdate: EventEmitter<any> = new EventEmitter<ISearchResult>();
    @Output("onMatchingWordsUpdate") onMatchingWordsUpdate: EventEmitter<any> = new EventEmitter<string[]>();

    constructor(
        @Inject(SearchService) private searchService: SearchService,
        @Inject(NgZone) private zone: NgZone,
        @Inject(ElementRef) private elementRef: ElementRef) { }

    ngOnChanges(changes: SimpleChanges): void {
        let searchTerm = changes["searchTerm"];

        // We only wants to trigger a search if the previous value was different.
        if (searchTerm != null && searchTerm.currentValue !== searchTerm.previousValue) {
            // Only call lookFor if we have any observers
            if (this.onSearchUpdate.observers.length > 0) {
                this.searchService.lookFor(searchTerm.currentValue).then(value => {
                    this.onSearchUpdate.emit(value);
                });
            }

            // Only call lookFor if we have any observers
            if (this.onMatchingWordsUpdate.observers.length > 0) {
                this.searchService.lookForMatchingWords(searchTerm.currentValue).then(value => {
                    this.onMatchingWordsUpdate.emit(value);
                });
            }
        }
    }
}
