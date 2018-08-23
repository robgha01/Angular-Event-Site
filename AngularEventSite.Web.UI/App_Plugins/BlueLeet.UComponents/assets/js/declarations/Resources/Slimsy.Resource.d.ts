/// <reference path="../../src/typescript/_references.d.ts" />
/**
* @ngdoc helper
* @name BlueLeet.SlimsyResource
* @function
*
* @description
* Defines a slimsy resource for resposnive img's.
*/
export declare class SlimsyResource {
    $http: any;
    $inject: string[];
    constructor($http: any);
    getImageUrl(id: number, width: number, height: number): any;
}
