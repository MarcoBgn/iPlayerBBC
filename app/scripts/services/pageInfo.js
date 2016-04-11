iPlayerApp.factory('PageInfo', function($http) {
  var Page = {};
  self.page = (sessionStorage.getItem('page') || 1)
  
  Page.getList = function() {
    return $http.get('https://ibl.api.bbci.co.uk/ibl/v1/atoz/a/programmes?page=' + self.page).then(function(response) {
      this.list;
        this.list = response.data.atoz_programmes;
        return this.list;
      })
    }   
  return Page;
})