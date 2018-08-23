/// <reference path="../../../src/typescript/_references.d.ts" />
/// <reference types="angular" />
import * as angular from "angular";
import * as umbraco from "umbraco";
import { Observable } from "rxjs/Observable";
import { ControllerBase } from "../Abstraction/ControllerBase";
import { TreeSourceType } from "../PreValueEditors/multiTreeSourceController";
export declare class Link {
    name: string;
    url: string;
    target: string;
    icon: string;
    sourceType: TreeSourceType;
    entityResource: any;
    $routeParams: any;
    private onSubjectUpdate;
    onUpdate: Observable<number>;
    static $inject: string[];
    constructor(id: number, name: string, url: string, target: string, icon: string, sourceType: TreeSourceType, $routeParams: any, entityResource: any);
    private _id;
    id: any;
    toJSON(): {
        id: any;
        name: string;
        url: string;
        target: string;
        icon: string;
        sourceType: TreeSourceType;
    };
    static parse(o: any, sourceType?: TreeSourceType): Link;
    private updateLazyInfo();
}
/**
* @ngdoc controller
* @name BlueLeet.MultiUrlPickerController
* @function
*
* @description
* Handles the multi url picker property editor.
*/
export declare class MultiUrlPickerController extends ControllerBase {
    $routeParams: any;
    multiUrlPickerForm: any;
    contentIds: number[];
    mediaIds: number[];
    memberIds: number[];
    renderModel: Link[];
    contentTreeSources: number[];
    mediaTreeSources: number[];
    memberTreeSources: string[];
    cfg: any;
    sortableOptions: any;
    iconHelper: any;
    entityResource: any;
    static $inject: string[];
    constructor($injector: any, $scope: any, $q: angular.IQService, $routeParams: any, angularHelper: any, notificationsService: umbraco.services.INotificationsService, iconHelper: any, entityResource: any);
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
