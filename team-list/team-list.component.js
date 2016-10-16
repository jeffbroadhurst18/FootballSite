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
        self.competition = response.leagueTable.competition + " - " + getTodaysDate();
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

function getTodaysDate()
{
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0!
    var yyyy = today.getFullYear();

    if (dd < 10) {
        dd = '0' + dd
    }

    if (mm < 10) {
        mm = '0' + mm
    }

    return dd + '/' + mm + '/' + yyyy;
    
}