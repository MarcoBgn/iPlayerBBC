'use strict';

iPlayerApp.factory('PageInfo', function($http) {
  var self = this;
  var Page = {};
  self.page = (sessionStorage.getItem('page') || 1);
  self.letter = (sessionStorage.getItem('character') || 'a');
  
  Page.getList = function() {
    return $http.get('https://ibl.api.bbci.co.uk/ibl/v1/atoz/'+self.letter+'/programmes?page='+self.page).then(function(response) {
      var list;
        list = response.data.atoz_programmes;
        return list;
      });
    };   
  return Page;
});