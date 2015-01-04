var crewApp = angular.module('crewApp', ['ngRoute']);
crewApp.config(
        function ($routeProvider) {
            $routeProvider
                    .when('/', {
                        templateUrl: 'app/partials/crewManifest.html',
                        controller: 'crewCtrl'
                    })
                    .otherwise({
                        redirectTo: '/'
                    });
        });

