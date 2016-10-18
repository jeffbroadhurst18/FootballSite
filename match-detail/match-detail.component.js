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
    }

    getMatch($routeParams.matchId);
    
}