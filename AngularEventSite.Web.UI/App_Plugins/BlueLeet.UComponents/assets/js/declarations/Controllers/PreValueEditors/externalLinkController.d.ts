/// <reference path="../../../src/typescript/_references.d.ts" />
import { ControllerBase } from "../Abstraction/ControllerBase";
/**
* @ngdoc controller
* @name MultiTreeSourceController
* @function
*
* @description
* Handles the multi tree source pre value editor.
*/
export declare class ExternalLinkController extends ControllerBase {
    $injector: any;
    dialogService: umbraco.services.IDialogService;
    entityResource: any;
    $log: any;
    target: {
        url: string;
        name: string;
        target: string;
    };
    static $inject: string[];
    constructor($injector: any, $q: any, $scope: any, angularHelper: any, dialogService: umbraco.services.IDialogService, entityResource: any, $log: any);
}
