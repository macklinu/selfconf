var app = angular.module('selfconf', ['ngRoute']);

app.config(function($routeProvider) {

    $routeProvider.when('/', {
        templateUrl: 'pages/home.html'
    });

    $routeProvider.when('/submit', {
        templateUrl: 'pages/submit.html'
    });

    $routeProvider.when('/coc', {
        templateUrl: 'pages/coc.html'
    });

    $routeProvider.otherwise({ redirectTo: '/' });

});
