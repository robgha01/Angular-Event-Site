angular.module("umbraco").controller("BlueLeet.Pokemon.EditPokemonController", function ($scope, $routeParams, $http) {
    // Get the ID from the route parameters (URL)
    var pokemonId = $routeParams.id;

    // Return since the ID matches a group
    if (pokemonId.length < 36) return;

    // Get the Pokémon from the API
    $scope.pokemon = null;
    $http.get('/umbraco/backoffice/BlueLeetPokemon/SkriftPokemon/GetPokemon?pokemonId=' + pokemonId).success(function (response) {
        $scope.pokemon = response;
    });
});

angular.module("umbraco").controller("BlueLeet.Pokemon.EvolvePokemonController", function ($scope, $http, notificationsService, navigationService) {
    // Get the ID of the Pokémon
    var pokemonId = $scope.dialogOptions.currentNode.id;

    // Get the Pokémon from the API
    $scope.pokemon = null;
    $http.get('/umbraco/backoffice/BlueLeetPokemon/SkriftPokemon/GetPokemon?pokemonId=' + pokemonId).success(function (response) {
        $scope.pokemon = response;
    });

    $scope.evolve = function () {
        $http.get('/umbraco/backoffice/BlueLeetPokemon/SkriftPokemon/Evolve?pokemonId=' + pokemonId).success(function () {
            // Show a success message to the user
            notificationsService.success('Pokémon evolved', 'Your Pokémon <strong>' + $scope.pokemon.name + '</strong> has successfully evolved');

            $http.get('/umbraco/backoffice/BlueLeetPokemon/SkriftPokemon/GetPokemon?pokemonId=' + pokemonId).success(function (response) {
                $scope.pokemon = response;
            });

            // Hide the menu
            navigationService.hideMenu();
            
            // Reload the parent node
            navigationService.reloadNode($scope.currentNode.parent());
        }).error(function () {
            // Show an error message to the user
            notificationsService.error('Unable to evolve Pokémon', 'Your Pokémon <strong>' + $scope.pokemon.name + '</strong> could not be evolved');

            // Hide the menu
            navigationService.hideMenu();

            // Reload the parent node
            navigationService.reloadNode($scope.currentNode.parent());
        });
    };
});
