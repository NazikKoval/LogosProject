var app = angular.module('CoinKeeperApp', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl : "templates/categories.html"
        })
        .when("/history", {
            templateUrl : "templates/history.html"
        })
});