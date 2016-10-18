var matchservice = function ($http) {

    var getMatch = function (matchId) {
        return $http.get('data/match-' + matchId + '.json')
             .then(function (response) {
                 return response.data;
             });
    };

       return {
        getMatch: getMatch
    };

};

angular.
  module('core.match').
  factory('matchservice', matchservice);