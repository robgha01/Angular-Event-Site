/// <reference path="../../src/typescript/_references.d.ts" />
/**
* @ngdoc helper
* @name BlueLeet.ThemePickerResource
* @function
*
* @description
* Defines a theme resource for handeling themes.
*/
export declare class ThemePickerResource {
    $http: any;
    angularHelper: any;
    $inject: string[];
    constructor($http: any, angularHelper: any);
    getThemes($scope: any): Promise<any>;
}
