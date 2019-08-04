app.factory("CategoryService", ['$http', function($http) {

    return {
        /**
         * Returns categories list
         * @returns {Array}
         */
        getCategories: function () {
            return $http.get('categories.json').then(function(response) {
                return response.data;
            });
        }
    };

}]);