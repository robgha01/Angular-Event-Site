/// <reference path="../../../src/typescript/_references.d.ts" />
export declare function ExtendedGridRteController(tinyMceService: any, stylesheetResource: any, angularHelper: any, assetsService: any, $q: any, $timeout: any): {
    scope: {
        uniqueId: string;
        value: string;
        onClick: string;
        onFocus: string;
        onBlur: string;
        onInit: string;
        configuration: string;
        onMediaPickerClick: string;
        onEmbedClick: string;
        onMacroPickerClick: string;
        onLinkPickerClick: string;
    };
    template: string;
    replace: boolean;
    link: (scope: any, element: any, attrs: any) => void;
};
