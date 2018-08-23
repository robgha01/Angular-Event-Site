/// <reference path="../../src/typescript/_references.d.ts" />
/**
* @ngdoc helper
* @name BlueLeet.BlueLeetEditorHelper
* @function
*
* @description
* Defines a common helper for blueleet editors.
*/
export declare class EditorHelperResource {
    dictionaryResource: any;
    dialogService: any;
    $inject: string[];
    constructor(dictionaryResource: any, dialogService: any);
    hasSetting(hasEditorSetting: any, sectionGrid: any, editorAlias: any): boolean;
    openEditorSetting(control: any): void;
}
