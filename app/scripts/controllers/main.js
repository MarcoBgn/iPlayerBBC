'use strict';

iPlayerApp.controller('MainCtrl', function(ProgramsList) {
  var self = this;
  
  ProgramsList.getList().then(function(response) {
    self.listData = response;
  })
});
