(function() {
    'use strict';

    angular
        .module('home.services', [])
        .factory('homeFactory', homeFactory)

        homeFactory.$inject = ['$http', '$q'];

        function homeFactory($http, $q) {
            return {
                getProduct: getProduct
            };

            function getProduct() {
                return $http.get('./assets/db/data.json')
                    .then(getProductComplete);

                function getProductComplete(response) {
                    return response.data;
                }
            }
        }
})();

module.exports;