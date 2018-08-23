/// <reference path="../../../src/typescript/_references.d.ts" />
/// <reference path="../Abstraction/ControllerBase.d.ts" />
/// <reference types="angular" />
import * as angular from "angular";
import * as umbraco from "umbraco";
import { ControllerBase } from "../Abstraction/ControllerBase";
/**
* @ngdoc controller
* @name BlueLeet.DashboardController
* @function
*
* @description
* Handles the BlueLeet dashbord.
*/
export declare class DashboardController extends ControllerBase {
    protected $scope: any;
    protected $routeParams: any;
    protected $q: angular.IQService;
    protected dialogService: umbraco.services.IDialogService;
    protected localizationService: any;
    protected dictionary: any;
    static $inject: string[];
    constructor($scope: any, $routeParams: any, $q: angular.IQService, angularHelper: umbraco.services.IAngularHelper, dialogService: umbraco.services.IDialogService, localizationService: any);
    load(): angular.IPromise<any>;
}
