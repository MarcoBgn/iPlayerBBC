'use strict';

iPlayerApp.controller('MainCtrl', ['ProgrammesList', function(ProgrammesList) {
  var self = this;
  
  ProgrammesList.getList().then(function(response) {
    self.listData = response;
  });
}]);