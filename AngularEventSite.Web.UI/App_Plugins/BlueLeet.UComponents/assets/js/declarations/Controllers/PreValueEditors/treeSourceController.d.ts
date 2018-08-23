/// <reference path="../../../src/typescript/_references.d.ts" />
import { ControllerBase } from "../Abstraction/ControllerBase";
import { TreeSourceModel } from "../Components/TreeSourceModel";
/**
* @ngdoc controller
* @name MultiTreeSourceController
* @function
*
* @description
* Handles the multi tree source pre value editor.
*/
export declare class TreeSourceController extends ControllerBase {
    $injector: any;
    dialogService: umbraco.services.IDialogService;
    entityResource: any;
    $log: any;
    iconHelper: any;
    renderModel: any;
    treePickerOverlay: any;
    static $inject: string[];
    constructor($injector: any, $q: any, $scope: any, angularHelper: any, dialogService: umbraco.services.IDialogService, entityResource: any, $log: any, iconHelper: any);
    openContentPicker(): void;
    populate(item: TreeSourceModel): void;
    clear(): void;
}
