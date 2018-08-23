/// <reference path="../../../src/typescript/_references.d.ts" />
/// <reference types="angular" />
import * as angular from "angular";
import * as umbraco from "umbraco";
import { ControllerBase } from "../Abstraction/ControllerBase";
import { TreeSourceModel } from "../Components/TreeSourceModel";
import { Link } from "../Components/Link";
import { TreeSourceType } from "../Components/TreeSourceType";
export declare class MultiLinkPickerPreValues {
    maxNumberOfItems: number;
    minNumberOfItems: number;
    mergeRoots: boolean;
    multiPicker: boolean;
    externalPicker: boolean;
    treeSources: TreeSourceModel[];
    static parse(value: any, defaults?: MultiLinkPickerPreValues): MultiLinkPickerPreValues;
}
/**
* @ngdoc controller
* @name BlueLeet.MultiLinkPickerController
* @function
*
* @description
* Handles the multi url picker property editor.
*/
export declare class MultiLinkPickerController extends ControllerBase {
    $routeParams: any;
    multiLinkPickerForm: any;
    contentIds: number[];
    mediaIds: number[];
    memberIds: number[];
    renderModel: Link[];
    contentTreeSources: number[];
    mediaTreeSources: number[];
    memberTreeSources: string[];
    cfg: MultiLinkPickerPreValues;
    sortableOptions: any;
    iconHelper: any;
    entityResource: any;
    isDialog: boolean;
    promises: Array<Promise<any>>;
    static $inject: string[];
    constructor($injector: any, $scope: any, $q: angular.IQService, $routeParams: any, angularHelper: any, notificationsService: umbraco.services.INotificationsService, iconHelper: any, entityResource: any);
    listenForDirty(): void;
    loadPromise(): Promise<any>;
    load(): angular.IPromise<any>;
    setIcon(nodes: any): void;
    openLinkPicker(sourceType: TreeSourceType, callbackItem?: (node: any) => void): void;
    openExternalLinkPicker(link?: Link, callbackItem?: (node: any) => void): void;
    openContentLinkPicker(): void;
    openMediaLinkPicker(): void;
    openMemberLinkPicker(): void;
    addLink(sourceType: TreeSourceType, e: any): void;
    edit(node: Link): void;
    remove(node: Link): void;
    replaceLink(oldLink: Link, e: any, sourceType: TreeSourceType): void;
    private getDialogType(type);
}
