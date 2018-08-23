/// <reference path="../../src/typescript/_references.d.ts" />
/// <reference types="angular" />
import * as angular from "angular";
import { IRangeSliderDirectiveScope } from "./Abstraction/IRangeSliderDirectiveScope";
/**
* @ngdoc directive
* @name BlueLeet.RangeSliderDirective
* @function
*
* @description
* Handles the rangeslider jquery plugin.
*/
export declare class RangeSliderDirective implements angular.IDirective {
    restrict: string;
    scope: {
        [key: string]: string;
    };
    link: (scope: IRangeSliderDirectiveScope, element: angular.IAugmentedJQuery) => void;
}
