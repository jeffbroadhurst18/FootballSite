'use strict';

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
        for (var i = 0; i < self.results.matchesTeam.match.length; i++) {
            if (self.results.matchesTeam.match[i].status == "Full Time") {
                self.results.matchesTeam.match[i].score = self.results.matchesTeam.match[i].homeTeamName + " " + self.results.matchesTeam.match[i].homeTeamScore + "   " + self.results.matchesTeam.match[i].awayTeamName + " " + self.results.matchesTeam.match[i].awayTeamScore;
            }
            else {
                self.results.matchesTeam.match[i].score = self.results.matchesTeam.match[i].homeTeamName + " v " + self.results.matchesTeam.match[i].awayTeamName;
            }
        }
    }

    getResults($routeParams.teamId);
}