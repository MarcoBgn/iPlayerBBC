iPlayerApp.factory('ProgramsList', function($http) {
  var Programs = {};
  
  Programs.getList = function() {
    return $http.get('https://ibl.api.bbci.co.uk/ibl/v1/atoz/a/programmes?page=1').then(function(response) {
      var list;
        this.list = response.data.atoz_programmes.elements;
        return this.list;
      })  
  }
  return Programs;
})