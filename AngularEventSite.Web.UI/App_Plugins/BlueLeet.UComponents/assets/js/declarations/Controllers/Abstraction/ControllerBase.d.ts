/// <reference path="../../../src/typescript/_references.d.ts" />
/// <reference types="angular" />
import * as angular from "angular";
import { IViewModel } from "./IViewModel";
import { IViewUpdate } from "./IViewUpdate";
export declare abstract class ControllerBase implements IViewModel {
    loading: boolean;
    isValid: boolean;
    isDirty: boolean;
    protected $scope: any;
    protected $q: angular.IQService;
    protected angularHelper: any;
    protected updateBehavior: IViewUpdate<IViewModel>;
    private updateBehaviorFactory;
    constructor($scope: any, $q: angular.IQService, angularHelper: any, updateBehaviorFactory?: () => IViewUpdate<IViewModel>, beforeInitialize?: () => void, formSubmitting?: () => void, onDestroy?: () => void, onContentLoaded?: () => void);
    initialize(): void;
    listenForDirty(): void;
    setDirty(): void;
    update(newValue?: any, updateExisting?: boolean): void;
    loadPromise(): Promise<any>;
    load(): angular.IPromise<any>;
}
