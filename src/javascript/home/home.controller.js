(function() {
    'use strict';

    angular
        .module('home.controllers', [])
        .controller('HomeController', HomeController)

        HomeController.$inject = ['homeFactory', '$scope'];

        function HomeController(homeFactory, $scope) {
            return homeFactory.getProduct()
                .then(function(data) {
                    return $scope.products = data;
                });
        }
})();

module.exports;