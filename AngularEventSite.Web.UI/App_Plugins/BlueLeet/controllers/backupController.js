angular.module("umbraco").controller("BlueLeet.UCodeFirst.Backup.Controller", function ($scope, $routeParams, $http) {

    // Get the ID from the route parameters (URL)
    var id = $routeParams.id;

    // Get the backup from the API
    $scope.animal = null;
    $http.get("/umbraco/backoffice/BlueLeetUCodeFirst/Backup/GetById?id=" + id).success(function (response) {
        $scope.animal = response;
    });

});