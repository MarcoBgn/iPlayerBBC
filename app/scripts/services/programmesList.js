'use strict';

iPlayerApp.factory('ProgrammesList', function($http) {
  var self = this;
  var Programmes = {};
  self.page = (sessionStorage.getItem('page') || 1);
  self.letter = (sessionStorage.getItem('character') || 'a');
  
  Programmes.getList = function() {
    return $http.get('https://ibl.api.bbci.co.uk/ibl/v1/atoz/'+self.letter+'/programmes?page='+self.page).then(function(response) {
      var list, url;
      var parsed = [];
      var image_url = [];
      var programmes_list = [];
        list = response.data.atoz_programmes;
        url = "http://ichef.bbci.co.uk/images/ic/" + "192x108/";
        for (var i = 0; i < list.elements.length; i++) {
          parsed.push(list.elements[i].images.standard.substr(43));
        }
        for (i = 0; i < parsed.length; i++) {
          image_url.push(url + parsed[i]);
        }
        for (i = 0; i < list.elements.length; i++) {
          programmes_list.push([list.elements[i], image_url[i]]);
        }
        return programmes_list;
      });   
    };
  return Programmes;
});