var app = angular.module('selfconf', ['ngRoute']);

app.config(function($routeProvider) {

    $routeProvider.when('/', {
        templateUrl: 'pages/home.html',
        controller: 'Scrontroller'
    });

    $routeProvider.when('/submit', {
        templateUrl: 'pages/submit.html',
        controller: 'Scrontroller'
    });

    $routeProvider.when('/coc', {
        templateUrl: 'pages/coc.html',
        controller: 'Scrontroller'
    });

    $routeProvider.otherwise({ redirectTo: '/' });

});

app.controller('Scrontroller', function($window) {
	$window.scrollTo(0,0);
});
