iPlayerApp.factory('ProgrammesList', function($http) {
  var self = this;
  var Programmes = {};
  self.page = (sessionStorage.getItem('page') || 1)
  
  Programmes.getList = function() {
    return $http.get('https://ibl.api.bbci.co.uk/ibl/v1/atoz/a/programmes?page=' + self.page).then(function(response) {
      this.list;
      this.parsed = [];
      this.image_url = [];
      this.programmes_list = [];
        this.list = response.data.atoz_programmes;
        this.url = "http://ichef.bbci.co.uk/images/ic/" + "192x108/"
        for (var i = 0; i < this.list.elements.length; i++) {
          this.parsed.push(this.list.elements[i].images.standard.substr(43));
        }
        for (var i = 0; i < this.parsed.length; i++) {
          this.image_url.push(this.url + this.parsed[i]);
        }
        for (var i = 0; i < this.list.elements.length; i++) {
          this.programmes_list.push([this.list.elements[i], this.image_url[i]]);
        }
        return programmes_list;
      })   
    }
  return Programmes;
})