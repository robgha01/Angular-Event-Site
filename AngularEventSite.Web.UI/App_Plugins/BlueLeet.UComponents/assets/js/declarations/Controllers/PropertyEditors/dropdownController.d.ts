/// <reference path="../../../src/typescript/_references.d.ts" />
/// <reference types="angular" />
/**
* @ngdoc controller
* @name BlueLeet.DropdownController
* @function
*
* @description
* Handles the drop-down property editor.
*/
import { ControllerBase } from "../Abstraction/ControllerBase";
export declare class DropdownController extends ControllerBase {
    dropdown: any | {
        value: any;
    };
    constructor($scope: any, angularHelper: any, $q: ng.IQService);
}
