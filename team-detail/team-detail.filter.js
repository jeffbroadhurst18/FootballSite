'use strict';

angular.
  module('teamDetail').
  filter('reduceDate', function() {
      return function(input){
          var parts = input.split(" ");
          var out = parts[0].substring(0, 3) + " " + parts[1] + " " + parts[2];
          return out;
      };
  })

angular.
  module('teamDetail').
  filter('reduceTime', function () {
      return function (input) {
          var out = input.substring(0, 5);
          return out;
      };
  })

angular.
  module('teamDetail').
  filter('reduceComp', function () {
      return function (input) {
          var out = '';
          switch (input) {
              case "National League":
                  out = "NL";
                  break;
              case "Emirates FA Cup":
                  out = "FAC";
                  break;
              default:
                  out = "Other";
          }
          return out;
      };
  })
