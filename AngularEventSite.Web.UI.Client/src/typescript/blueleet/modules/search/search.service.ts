import { Injectable, Inject } from "@angular/core";
import { UmbracoAjaxService } from "../../umbraco-ajax-Service";

export interface ISearchResult {
    searchTime: number;
    resultMessage: string;
    results: any[];
}

@Injectable()
export class SearchService {
    constructor( @Inject(UmbracoAjaxService) protected umbracoAjaxService: UmbracoAjaxService) { }

    lookFor(term: string): Promise<ISearchResult> {
        return this.umbracoAjaxService.post("Search", "PostLookFor", { searchTerm: term });
    }

    lookForMatchingWords(term: string): Promise<string[]> {
        return this.umbracoAjaxService.post("Search", "PostLookForMatchingWords", { searchTerm: term });
    }
}
