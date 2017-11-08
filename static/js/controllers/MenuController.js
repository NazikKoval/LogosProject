app.controller('MenuController', ['$scope', function($scope) {
    $scope.toggleMenu = function() {
        alert('Менюшечка');
        $scope.menuShow = true;
    };
}]);