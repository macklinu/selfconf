var app = angular.module('selfconf', ['ngRoute', 'ngSanitize']);

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

    $routeProvider.when('/speakers', {
        templateUrl: 'pages/speakers.html',
        controller: 'SpeakersController'
    });

    $routeProvider.otherwise({ redirectTo: '/' });

});

app.controller('Scrontroller', function($window) {
	$window.scrollTo(0,0);
});

app.controller('SpeakersController', function($window, $scope, $http) {
    $window.scrollTo(0,0);

    $http.get('/files/speakers.json').success(function(speakers) {
        $scope.speakers = speakers;
    }).error(function() {
        alert('f');
    });
});

