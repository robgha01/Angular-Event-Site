/// <reference path="../../../src/typescript/_references.d.ts" />
import { ControllerBase } from "../Abstraction/ControllerBase";
import { Link } from "../Components/Link";
export interface IRteConfiguration {
    toolbar: string[];
    stylesheets: string[];
    dimensions: {
        height: number;
    };
    maxImageSize: number;
}
export declare class CardImageMetaInfo {
    focalPoint: {
        left: number;
        top: number;
    };
}
export declare class CardImage {
    private _id;
    private isResolveld;
    url: string;
    name: string;
    icon: string;
    altText: string;
    title: string;
    constructor(id?: number, altText?: string, title?: string);
    id: number;
    updateLazyInfo(): Promise<CardImage>;
    toJSON(): {
        id: number;
        altText: string;
        title: string;
    };
    static parse(value: any): CardImage;
}
export declare class CardValue {
    image: CardImage;
    link: Link;
    title: string;
    content: string;
    constructor();
    static fromJSON(value: string): CardValue;
}
/**
* @ngdoc controller
* @name BlueLeet.CardController
* @function
*
* @description
* Handles the card property editor.
*/
export declare class CardController extends ControllerBase {
    $timeout: any;
    $element: any;
    dialogService: any;
    dictionaryResource: any;
    rteConfig: IRteConfiguration;
    rteConfigContent: IRteConfiguration;
    renderModel: CardValue;
    oldModel: CardValue;
    overlay: any;
    slimsyResource: any;
    entityResource: any;
    eventsService: any;
    textPixelService: any;
    mediaHelper: any;
    isEmptyModel: boolean;
    isInit: boolean;
    static $inject: string[];
    constructor($scope: any, $q: any, $timeout: any, $element: any, dialogService: any, dictionaryResource: any, angularHelper: any, slimsyResource: any, entityResource: any, eventsService: any, mediaHelper: any, textPixelService: any);
    loadPromise(): Promise<any>;
    onTitleInit(editor: any): void;
    onContentInit(editor: any): void;
    onTitleBlur(): void;
    onContentBlur(): void;
    editLink(): void;
    selectImage(): void;
    private setLimitedRTE();
    private removeRTEControl(buttons);
    private removeStyles();
    private showSelection();
    private rep(str, index, newStr, textLength);
    private setCharAt(str, index, chr, textLength);
}
