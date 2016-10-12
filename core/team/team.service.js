var teamservice = function ($http) {

    var getTeams = function () {
        return $http.get('data/league.json')
             .then(function (response) {
                 return response.data;
             });
    };

    var getTeamList = function () {
        return $http.get('data/teams.json')
             .then(function (response) {
                 return response.data;
             });
    };

    var getResults = function (teamId) {
        return $http.get('data/matches-' + teamId + '.json')
        .then(function (response)  {
            return response.data;
        });
    };

    return {
        getTeams: getTeams,
        getTeamList: getTeamList,
        getResults: getResults
    };

};

angular.
  module('core.team').
  factory('teamservice', teamservice);