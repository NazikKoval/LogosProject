app.directive('header', function() {
    return {
        templateUrl: 'templates/header.html',
        controller: 'UserController as user'
    }
});

app.directive('sidebar', function() {
    return {
        templateUrl: 'templates/sidebar.html',
        controller: 'MainController as main'
    }
});

app.directive('sidebarToggle', function() {
    return {
        templateUrl: 'templates/sidebarToggle.html',
        controller: 'MainController as main'
    }
});