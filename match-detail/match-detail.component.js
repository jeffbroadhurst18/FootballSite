'use strict';

angular.
  module('matchDetail').
  component('matchDetail', {
      templateUrl: 'match-detail/match-detail.template.html',
      controller: ['$routeParams', 'matchservice', MatchDetailController]
  });

function MatchDetailController($routeParams, matchservice) {
    var self = this;

    var getMatch = function (matchId)
    {
        matchservice.getMatch(matchId).then(onMatchComplete);
    }
    
    var onMatchComplete = function (response)
    {
        self.results = response;

        populateSubs(0);
        populateSubs(1);
    }

    getMatch($routeParams.matchId);
    
}

function populateSubs(id)
{
    for (var i = 0; i < self.results.match.teams[id].players.length; i++) {
        if (self.results.match.teams[1].players[id].substitution == null) {
            self.results.match.teams[1].players[id].substitution = { replacedBy: " ", minute: " " };
        }
        if (self.results.match.teams[1].players[id].caution == null) {
            self.results.match.teams[1].players[id].caution = { minute: " " };
        }
    }
}