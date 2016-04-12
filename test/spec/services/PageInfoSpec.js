'use strict';

describe('PageInfo service', function() {
  var httpBackend, PageInfoService, data;
  
  beforeEach(function() {
    module('iPlayerApp');
  
    inject(function($httpBackend, _PageInfo_) {
      data = {'atoz_programmes': {"character":"a",
                                  "count":74,
                                  "page":1,
                                  "per_page":20
          }
        };
      httpBackend = $httpBackend
      PageInfoService = _PageInfo_
      httpBackend.whenGET('https://ibl.api.bbci.co.uk/ibl/v1/atoz/a/programmes?page=1').respond(200, data)
      httpBackend.expectGET('views/main.html').respond(200, {})
    })
  })
  
  it('is not an empty object', function() {
    expect(PageInfoService).toBeNonEmptyObject();
  })
  
  it('has a method called #getList', function() {
    expect(PageInfoService.getList()).toBeDefined();
    expect(PageInfoService).toHaveMethod('getList');
  })
  
  it('Retrieves info about the TotalItems in the current letter', function() {
    httpBackend.flush();
    PageInfoService.getList().then(function(response) {
      expect(response.data).toBeDefined();
      expect(response.data.atoz_programmes.count).toBe(74);
    });
  })
  
  it('Retrieves info about page number in the current letter', function() {
    httpBackend.flush();
    PageInfoService.getList().then(function(response) {
      expect(response.data).toBeDefined();
      expect(response.data.atoz_programmes.page).toBe(1);
    });
  })
})