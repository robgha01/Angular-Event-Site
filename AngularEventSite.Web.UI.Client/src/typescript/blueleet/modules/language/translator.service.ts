import { Injectable, Inject } from "@angular/core";
import { UmbracoAjaxService } from "../../umbraco-ajax-Service";
import { CacheService } from "../cache/cache.service";
const _ = require("lodash");

@Injectable()
export class TranslatorService {
    constructor( @Inject(UmbracoAjaxService) protected umbracoAjaxService: UmbracoAjaxService, @Inject(CacheService) protected cacheService: CacheService) { }

    translate(key: string, altText: string = "", cache: boolean = true): Promise<string> {
        const valueFactory = () => this.umbracoAjaxService.post("TranslatorService", "TranslationPost", { key, altText });

        return this.cacheService.getCacheItem(`TranslatorService:TranslationPost:${key}`, valueFactory);
    }

    smartTranslate(key: string, value: any, altText: string = "", cache: boolean = true): Promise<string> {
        const valueFactory = () => this.umbracoAjaxService.post("TranslatorService", "TranslationPost", { key, altText });

        return this.cacheService.getCacheItem(`TranslatorService:TranslationPost:${key}`, valueFactory).then(v => {
            _.templateSettings.interpolate = /{([\s\S]+?)}/g;
            const compiled = _.template(v);
            const compiledValue = compiled(value);

            return compiledValue;
        });
    }
}
