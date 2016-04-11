iPlayerApp.factory('ProgrammesList', function($http) {
  var Programmes = {};
  
  Programmes.getList = function() {
    return $http.get('https://ibl.api.bbci.co.uk/ibl/v1/atoz/a/programmes?page=1').then(function(response) {
      this.list;
      this.parsed = [];
      this.image_url = [];
      this.programmes_list = [];
        this.list = response.data.atoz_programmes.elements;
        this.url = "http://ichef.bbci.co.uk/images/ic/" + "192x108/"
        for (var i = 0; i < this.list.length; i++) {
          this.parsed.push(this.list[i].images.standard.substr(43));
        }
        for (var i = 0; i < this.parsed.length; i++) {
          this.image_url.push(this.url + this.parsed[i]);
        }
        for (var i = 0; i < 20; i++) {
          this.programmes_list.push([this.list[i], this.image_url[i]]);
        }
        return programmes_list;
      })   
    }
  return Programmes;
})