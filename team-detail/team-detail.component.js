'use strict';

// Register `phoneDetail` component, along with its associated controller and template
angular.
  module('teamDetail').
  component('teamDetail', {
      templateUrl: 'team-detail/team-detail.template.html',
      controller: ['$routeParams', 'teamservice', TeamDetailController]
  });

function TeamDetailController($routeParams, teamservice) {
    var self = this;
 
    var getResults = function (teamId) {
        teamservice.getResults(teamId).then(onResultsComplete);
    };

    var onResultsComplete = function (response) {
        self.results = response;
    }

    getResults($routeParams.teamId);
}