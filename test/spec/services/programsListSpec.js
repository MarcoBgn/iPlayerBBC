'use strict';

describe('ProgramsList service', function() {
  var httpBackend, ProgramsListService, data;
  
  beforeEach(function() {
    module('iPlayerApp');
  
    inject(function($httpBackend, _ProgramsList_) {
      data = {'atoz_programmes': {'elements' : [{"title": "program1"}
          ]
        }
      };
      httpBackend = $httpBackend
      ProgramsListService = _ProgramsList_
      httpBackend.whenGET('https://ibl.api.bbci.co.uk/ibl/v1/atoz/a/programmes?page=1').respond(200, data)
      httpBackend.expectGET('views/main.html').respond(200, {})
    })
  })
  
  it('is not an empty object', function() {
    expect(ProgramsListService).toBeNonEmptyObject();
  })
  
  it('has a method called #getList', function() {
    expect(ProgramsListService.getList()).toBeDefined();
    expect(ProgramsListService).toHaveMethod('getList');
  })
  
  it('Retrieves a list of programs', function() {
    ProgramsListService.getList();
    httpBackend.flush();
    expect(list[0].title).toBe('program1')
  })
})