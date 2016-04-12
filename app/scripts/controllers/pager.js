'use strict';

iPlayerApp.controller('PagerController', ['$window', 'PageInfo', '$anchorScroll', function($window, PageInfo, $anchorScroll) {
  var self = this;
  
  PageInfo.getList().then(function(response) {
    self.info = response;
  });
  
  self.pageChange = function() {
    sessionStorage.setItem('page', self.info.page);
    $window.location.reload();
    $anchorScroll();
  };
}]);