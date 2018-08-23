/// <reference path="../../../src/typescript/_references.d.ts" />
/**
* @ngdoc controller
* @name BlueLeet.CardSettingController
* @function
*
* @description
* Handles the card property editor settings.
*/
export declare class CardSettingController {
    private $scope;
    private $timeout;
    private $rootScope;
    private dialogService;
    private notificationsService;
    private slimsyResource;
    private overlay;
    $inject: string[];
    constructor($scope: any, $timeout: any, $rootScope: any, dialogService: any, notificationsService: any, slimsyResource: any);
    selectImage(): void;
    removeImage(): void;
}
