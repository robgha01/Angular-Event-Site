/// <reference path="../../src/typescript/_references.d.ts" />
/// <reference types="angular" />
import * as angular from "angular";
/**
* @ngdoc directive
* @name BlueLeet.RangeSliderDirective
* @function
*
* @description
* Handles the rangeslider jquery plugin.
*/
export declare class RelinkHackDirective implements angular.IDirective {
    restrict: string;
    transclude: "element";
    $rootScope: any;
    static $inject: string[];
    constructor($rootScope: any);
    link: (scope: any, element: angular.IAugmentedJQuery, attr: any, ctrl: angular.IController, transclude: angular.ITranscludeFunction) => void;
}
