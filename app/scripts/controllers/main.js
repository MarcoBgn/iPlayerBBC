'use strict';

iPlayerApp.controller('MainCtrl', function(ProgrammesList) {
  var self = this;
  
  ProgrammesList.getList().then(function(response) {
    self.listData = response;
  })
});