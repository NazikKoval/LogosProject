var app = angular.module('CoinKeeperApp', ['ui.router']);

app.config(function($stateProvider) {
    var categoriesState = {
        name: 'categories',
        url: '/',
        templateUrl: 'templates/categories.html'
    };

    var historyState = {
        name: 'history',
        url: '/history',
        templateUrl: 'templates/history.html'
    };

    $stateProvider.state(categoriesState);
    $stateProvider.state(historyState);
});