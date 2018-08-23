/// <reference path="../../../src/typescript/_references.d.ts" />
/// <reference types="angular" />
import * as ng from "angular";
import { ControllerBase } from "../Abstraction/ControllerBase";
import { IViewUpdate } from "../Abstraction/IViewUpdate";
/**
* @ngdoc BlueLeet.IViewUpdate<TextBoxKeywordController>
* @name DefaultUpdateBehavior
* @function
*
* @description
* Handles the 'Default' update mode.
*/
export declare class DefaultUpdateBehavior implements IViewUpdate<TextBoxKeywordController> {
    $scope: any;
    shareSeoDataService: any;
    notificationsService: any;
    static $inject: string[];
    constructor($scope: any, shareSeoDataService: any, notificationsService: any);
    update(vm: TextBoxKeywordController): void;
}
/**
* @ngdoc controller
* @name TextBoxKeywordController
* @function
*
* @description
* Handles the textbox Keyword property editor.
*/
export declare class TextBoxKeywordController extends ControllerBase {
    localizationService: any;
    notificationsService: any;
    shareSeoDataService: any;
    keywordList: Array<string>;
    keyword: string;
    dictionary: any;
    maxCount: any;
    alignVertical: boolean;
    isSeoKeyword: boolean;
    constructor($injector: any, $scope: any, angularHelper: any, $q: ng.IQService, localizationService: any, shareSeoDataService: any, notificationsService: any);
    initialize(): void;
    listenForDirty(): void;
    load(): ng.IPromise<any>;
    remove(index: any): void;
    process(event: KeyboardEvent): void;
    handleKeypress(event: KeyboardEvent): void;
}
