/// <reference path="../../../src/typescript/_references.d.ts" />
/// <reference types="angular" />
import * as ng from "angular";
export interface IViewModel extends Object {
    loading: boolean;
    isValid: boolean;
    initialize(): void;
    loadPromise(): Promise<any>;
    load(): ng.IPromise<any>;
    update(): void;
    setDirty(): void;
}
