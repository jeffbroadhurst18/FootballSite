'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.
  module('teamList').
  component('teamList', {
      templateUrl: 'team-list/team-list.template.html',
      controller: ['teamservice',TeamListController]
  });

function TeamListController(teamservice) {
    var self = this;
    
    var getTeams = function () {
        teamservice.getTeams().then(onTeamsComplete);
    };

    var onTeamsComplete = function (response) {
        self.teams = response.leagueTable.team;
        teamservice.getTeamList().then(onTeamListComplete);
    }

    var onTeamListComplete = function (response) {
        self.teamList = response.teams.team;

        for (var i=0; i < self.teamList.length; i++)
        {
            for (var j = 0; j < self.teams.length; j++)
            {
                if (self.teams[j].name == self.teamList[i].name)
                {
                    self.teams[j].number = self.teamList[i].id;
                    break;
                }
            }
        }
    }

    getTeams();
}