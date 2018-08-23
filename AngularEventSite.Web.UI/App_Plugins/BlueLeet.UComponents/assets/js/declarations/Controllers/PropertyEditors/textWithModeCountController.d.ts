/// <reference path="../../../src/typescript/_references.d.ts" />
/// <reference types="angular" />
import * as angular from "angular";
import { ControllerBase } from "../Abstraction/ControllerBase";
import { IViewUpdate } from "../Abstraction/IViewUpdate";
/**
* @ngdoc BlueLeet.IViewUpdate<TextareaWithCharacterCountController>
* @name StrictUpdateBehavior
* @function
*
* @description
* Handles the 'Strict' update mode.
*/
export declare class StrictUpdateBehavior implements IViewUpdate<TextWithModeCountController> {
    $scope: any;
    shareSeoDataService: any;
    textPixelService: any;
    static $inject: string[];
    constructor($scope: any, shareSeoDataService: any, textPixelService: any);
    getRemainingCount(vm: TextWithModeCountController): number;
    update(vm: TextWithModeCountController): void;
}
/**
* @ngdoc BlueLeet.IViewUpdate<TextareaWithCharacterCountController>
* @name DefaultUpdateBehavior
* @function
*
* @description
* Handles the 'Default' update mode.
*/
export declare class DefaultUpdateBehavior implements IViewUpdate<TextWithModeCountController> {
    $scope: any;
    shareSeoDataService: any;
    textPixelService: any;
    static $inject: string[];
    constructor($scope: any, shareSeoDataService: any, textPixelService: any);
    getRemainingCount(vm: TextWithModeCountController): any;
    update(vm: TextWithModeCountController): void;
}
/**
* @ngdoc controller
* @name TextAreaWithCharacterCountCountController
* @function
*
* @description
* Handles the textarea with character count property editor.
*/
export declare class TextWithModeCountController extends ControllerBase {
    $injector: any;
    localizationService: any;
    shareSeoDataService: any;
    notificationsService: any;
    dictionary: any;
    maxCount: number;
    remainingCount: number;
    description: string;
    forceMaxCharacters: boolean;
    warnOnEmptySave: boolean;
    isSeoTitle: boolean;
    isSeoDescription: boolean;
    isPixelCount: boolean;
    displayAsTextbox: boolean;
    static $inject: string[];
    constructor($injector: any, $scope: any, angularHelper: any, $q: angular.IQService, localizationService: any, shareSeoDataService: any, notificationsService: any);
    initialize(): void;
    load(): angular.IPromise<any>;
}
