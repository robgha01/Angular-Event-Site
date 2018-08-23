/// <reference path="../../src/typescript/_references.d.ts" />
import * as Abstraction from "../Abstraction/IShareSeoDataService";
/**
* @ngdoc service
* @name BlueLeet.ShareSeoDataService
* @function
*
* @description
* This Service performs handles a variety of tasks related to SEO informations.
*/
export declare class ShareSeoDataService implements Abstraction.IShareSeoDataService {
    $rootScope: any;
    title: string;
    titleMaxCount: number;
    description: string;
    descriptionMaxCount: number;
    keywords: any[];
    specialChars: string[];
    titleSplit: any[];
    descriptionSplit: any[];
    constructor($rootScope: any);
    checkHasFoundKeyword(keyword: string): {
        title: boolean;
        desc: boolean;
    };
    removeKeywords(index: number): void;
    filterSpecialChars(word: string): string;
    getTitle: () => string;
    getTitleMaxCount: () => number;
    getDescription: () => string;
    getDescriptionMaxCount: () => number;
    getKeywords: () => any[];
    setTitle(value: string, maxCount: number): void;
    setDescription(value: string, maxCount: number): void;
    setKeywords(keyword: string): void;
    onTitleUpdate($scope: any, callback: any): void;
    onDescriptionUpdate($scope: any, callback: any): void;
    onKeywordAdded($scope: any, callback: any): void;
    onKeywordRemoved($scope: any, callback: any): void;
    onPreviewUpdate($scope: any, callback: any): void;
    private searchWord(items, keyword);
    private getReducedArray(text);
    private broadcastTitle(newValue);
    private broadcastDescription(newValue);
    private broadcastKeywordAdd(newValue);
    private broadcastKeywordRemove(newValue);
    private broadcastPreview();
}
