(function () {
    'use strict';

    var controller = function ($scope) {
        $scope.options = [
            { value: 'Fluid', title: 'Fluid', description: 'Sets the layout to fluid.' },
            { value: 'FluidFullWidth', title: 'Fluid full width', description: 'Sets the layout to fluid and removes left and right edges.' }
        ];
    };

    angular.module("umbraco").controller("Site.GridEditors.GridSettings.GridLayoutController", controller);
})();