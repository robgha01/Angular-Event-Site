/// <reference path="../../../src/typescript/_references.d.ts" />
/**
* @ngdoc controller
* @name BlueLeet.ImageNTextController
* @function
*
* @description
* Handles the image and text property editor.
*/
export interface IRteConfig {
    toolbar: string[];
    stylesheets: string[];
    dimensions: {
        height: number;
    };
    maxImageSize: number;
}
export interface IImage {
    url: string;
    name: string;
    alt: string;
    title: string;
}
export interface ILink {
    name: string;
    id: number;
    url: string;
    target: string;
}
export declare class ImageNTextValue {
    image: IImage;
    align: string;
    link: ILink;
    title: string;
    content: string;
}
export declare function ImageNTextController($scope: any, $timeout: any, dialogService: any, dictionaryResource: any, $element: any, angularHelper: any): void;
