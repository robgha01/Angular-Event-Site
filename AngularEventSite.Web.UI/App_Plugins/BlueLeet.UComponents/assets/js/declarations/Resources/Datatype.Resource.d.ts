/// <reference path="../../src/typescript/_references.d.ts" />
/**
* @ngdoc helper
* @name BlueLeet.DatatypeResource
* @function
*
* @description
* Defines a common helper for blueleet editors.
*/
export declare class DatatypeResource {
    $http: any;
    $inject: string[];
    constructor($http: any);
    getByName(name: any): any;
}
