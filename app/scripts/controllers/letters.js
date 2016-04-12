'use strict';

iPlayerApp.controller('LettersController', ['PageInfo', '$window', function(PageInfo, $window) {
  var self = this;
  
  PageInfo.getList().then(function(response) {
    self.info = response;
  });
  
  self.letterChange = function(letter) {
    sessionStorage.setItem('character', letter);
    $window.location.reload();
  };
}]);