app.factory("CategoryService", ['$http', function($http) {

    return {
        getCategories: function () {
            return $http.get('categories.json').then(function(response) {
                return response.data;
            });
        }
    };

}]);