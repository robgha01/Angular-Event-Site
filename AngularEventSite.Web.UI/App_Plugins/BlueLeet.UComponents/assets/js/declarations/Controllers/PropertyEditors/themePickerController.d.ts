/// <reference path="../../../src/typescript/_references.d.ts" />
/// <reference types="angular" />
import * as ng from "angular";
import { ControllerBase } from "../Abstraction/ControllerBase";
/**
* @ngdoc controller
* @name BlueLeet.ThemePickerController
* @function
*
* @description
* Handles the theme picker property editor.
*/
export declare class ThemePickerController extends ControllerBase {
    themePickerResource: any;
    options: {
        key: string;
        value: any;
    }[];
    renderModel: {
        key: string;
        value: any;
    };
    static $inject: string[];
    constructor($injector: any, $scope: any, angularHelper: any, $q: ng.IQService, themePickerResource: any);
    selectDropdown(): void;
    loadPromise(): Promise<any>;
}
