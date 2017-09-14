'use strict';

angular.module('confusionApp', ['ngRoute'])
.config(function($routeProvider) {
        $routeProvider
            // route for the contactus page
            .when('/', {
                templateUrl : 'template1.html',
                controller  : 'MenuController'
            })
            // route for the menu page
            .when('/menu', {
                templateUrl : 'template1.html',
                controller  : 'MenuController'
            })
            .when('/menu/:id', {
                templateUrl : 'template2.html',
                controller  : 'DishDetailController'
            })
            // route for the dish details page

            .otherwise('/contactus');
    });
