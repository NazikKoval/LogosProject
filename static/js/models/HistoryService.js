app.factory('HistoryService', ['$http', function($http) {

    return {
        /**
         * Returns categories list
         * @returns {Array}
         */
        getRecords: function (month, year) {
            return $http.get('history.json').then(function(response) {
                return response.data;
            });
        }
    };

}]);