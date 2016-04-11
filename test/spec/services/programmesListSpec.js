'use strict';

describe('ProgrammesList service', function() {
  var httpBackend, ProgrammesListService, data;
  
  beforeEach(function() {
    module('iPlayerApp');
  
    inject(function($httpBackend, _ProgrammesList_) {
      data = {'atoz_programmes': {'elements' : [
            {"title"  : "programme1",
             "images" : {"standard" : 'http://ichef.bbci.co.uk/images/ic/{recipe}/test.jpg'}},
          ]
        }
      };
      httpBackend = $httpBackend
      ProgrammesListService = _ProgrammesList_
      httpBackend.whenGET('https://ibl.api.bbci.co.uk/ibl/v1/atoz/a/programmes?page=1').respond(200, data)
      httpBackend.expectGET('views/main.html').respond(200, {})
    })
  })
  
  it('is not an empty object', function() {
    expect(ProgrammesListService).toBeNonEmptyObject();
  })
  
  it('has a method called #getList', function() {
    expect(ProgrammesListService.getList()).toBeDefined();
    expect(ProgrammesListService).toHaveMethod('getList');
  })
  
  it('Retrieves a list of programs', function() {
    ProgrammesListService.getList();
    httpBackend.flush();
    expect(programmes_list[0][0].title).toBe('programme1')
  })
  
  it('Includes parsed image_url in programmes_list array ', function() {
    ProgrammesListService.getList();
    httpBackend.flush();
    expect(programmes_list[0][1]).toBe('http://ichef.bbci.co.uk/images/ic/192x108/test.jpg')
  })
})