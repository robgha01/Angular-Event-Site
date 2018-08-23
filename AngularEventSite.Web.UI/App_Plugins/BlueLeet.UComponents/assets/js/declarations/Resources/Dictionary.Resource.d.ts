/// <reference path="../../src/typescript/_references.d.ts" />
export declare class DictionaryResource implements IDictionaryResource {
    $q: any;
    $http: any;
    $inject: string[];
    constructor($q: any, $http: any);
    getText(path: any): any;
}
