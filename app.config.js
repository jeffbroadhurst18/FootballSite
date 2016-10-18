'use strict';

angular.
  module('teamApp').
  config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');

        $routeProvider.
          when('/teams', {
              template: '<team-list></team-list>'
          }).
            when('/teams/:teamId', {
                template: '<team-detail></team-detail>'
            }).
            when('/match/:matchId', {
                template: '<match-detail></match-detail>'
            })
            .otherwise('/teams');
    }
  ]);


