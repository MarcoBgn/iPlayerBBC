'use strict';

describe('Controller: AboutCtrl', function () {

  beforeEach(module('iPlayerBbcApp'));

  var AboutCtrl,
    scope;

    beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AboutCtrl = $controller('AboutCtrl', {
      $scope: scope
    });
  }));

  it('Attaches elements to the scope', function () {
  });
});
