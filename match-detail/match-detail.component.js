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

        self = populateSubs(0,self);
        self = populateSubs(1,self);
    }

    getMatch($routeParams.matchId);
    
}

function populateSubs(id,self)
{
    for (var i = 0; i < self.results.match.teams[id].players.length; i++) {
        self.results.match.teams[id].players[i].playerType =  i < 11 ? "football-player" : "football-sub" ;
        if (self.results.match.teams[id].players[i].substitution == null) {
            self.results.match.teams[id].players[i].substitution = { replacedBy: " ", minute: " " };
        }
        if (self.results.match.teams[id].players[i].caution == null) {
            self.results.match.teams[id].players[i].caution = { minute: " " };
        }
        if (self.results.match.teams[id].players[i].sendingOff == null) {
            self.results.match.teams[id].players[i].sendingOff = { minute: " " };
        }
    }
    return self;
}