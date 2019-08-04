var app = angular.module('CoinKeeperApp', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
    var categoriesState = {
        name: 'categories',
        url: '/',
        templateUrl: 'templates/categories.html',
        controller: 'CategoryController as category'
    };

    var historyState = {
        name: 'history',
        url: '/history',
        templateUrl: 'templates/history.html',
        controller: 'HistoryController as history'
    };

    $urlRouterProvider.otherwise('/');
    $stateProvider.state(categoriesState);
    $stateProvider.state(historyState);
});