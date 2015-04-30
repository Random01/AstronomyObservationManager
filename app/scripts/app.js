'use strict';

// Declare app level module which depends on views, and components
angular
    .module('aomApp', ['ngRoute'])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: '/app/scripts/main/main.html',
                controller: 'mainController'
            })
            .otherwise({ redirectTo: '/' });
    }]);
