/// <reference path="../../../src/typescript/_references.d.ts" />
/**
* @ngdoc controller
* @name BlueLeet.ImageNTextSettingController
* @function
*
* @description
* Handles the image and text property editor settings.
*/
export declare class ImageNTextSettingController {
    private $scope;
    private $timeout;
    private $rootScope;
    private dialogService;
    private notificationsService;
    private slimsyResource;
    $inject: string[];
    constructor($scope: any, $timeout: any, $rootScope: any, dialogService: any, notificationsService: any, slimsyResource: any);
    editLink(): void;
    selectImage(): void;
    removeImage(): void;
}
