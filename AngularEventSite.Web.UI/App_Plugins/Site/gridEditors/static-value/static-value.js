angular.module("umbraco").controller("Site.GridEditors.StaticValueController", function ($scope) {
    $scope.control.value = $scope.control.editor.config.value;
});