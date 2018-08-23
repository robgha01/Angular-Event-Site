/// <reference path="../../../src/typescript/_references.d.ts" />
/// <reference types="angular" />
import * as angular from "angular";
import { ControllerBase } from "../Abstraction/ControllerBase";
import { IViewUpdate } from "../Abstraction/IViewUpdate";
import { TreeSourceModel } from "../Components/TreeSourceModel";
/**
* @ngdoc BlueLeet.IViewUpdate<TextBoxKeywordController>
* @name DefaultUpdateBehavior
* @function
*
* @description
* Handles the 'Default' update mode.
*/
export declare class DefaultUpdateBehavior implements IViewUpdate<MultiTreeSourceController> {
    $scope: any;
    entityResource: umbraco.resources.IEntityResource;
    notificationsService: any;
    iconHelper: any;
    static $inject: string[];
    constructor($scope: any, entityResource: any, notificationsService: any, iconHelper: any);
    update(vm: MultiTreeSourceController, newValue: TreeSourceModel, updateExisting: boolean): void;
    updateTreeSource(existing: TreeSourceModel, value: TreeSourceModel): void;
}
/**
* @ngdoc controller
* @name MultiTreeSourceController
* @function
*
* @description
* Handles the multi tree source pre value editor.
*/
export declare class MultiTreeSourceController extends ControllerBase {
    treeSources: TreeSourceModel[];
    sourceName: string;
    sortableOptions: any;
    overlay: any;
    $injector: any;
    $q: any;
    notificationsService: umbraco.services.INotificationsService;
    promises: Array<Promise<any>>;
    static $inject: string[];
    constructor($injector: any, $scope: any, $q: angular.IQService, angularHelper: any, notificationsService: umbraco.services.INotificationsService);
    loadPromise(): Promise<any>;
    openTreeSourcePicker(treeSourceModel: TreeSourceModel, isEdit?: boolean): void;
    addTreeSource(): void;
    remove(index: number): void;
    edit(index: number): void;
    showHandle(): boolean;
}
