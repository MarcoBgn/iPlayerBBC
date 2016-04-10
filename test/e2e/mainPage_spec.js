describe('iPlayerBBC', function() {
  
  it('should automatically redirect to /home.html when location hash/fragment is empty', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/");
  });
  
  describe('Main Page', function() {
    
    beforeEach(function() {
      browser.get('/');
    })
    it('Has a navigation bar with link iPlayerBbc', function() {
      var navbar = $('div.header')
      expect(navbar.getText()).toContain('iPlayerBbc');
    })
  
    it('Has a navigation bar with link Home', function() {
      var navbar = $('div.header')
      expect(navbar.getText()).toContain('Home');
    })
  
    it('Has a navigation page for letter selection', function() {
      var navbar = $('div.header')
      expect(navbar.getText()).toContain('A-Z');
    })
  
    it('Has a drop down menu for letter selection', function() {
      element(by.css('[ng-click="isCollapsed = !isCollapsed"]')).click();
      var navbar = $('div.navbar')
      expect(navbar.getText()).toContain('A-B-C-D-E-F-G');
    })
    
    it('Displays a list of programs retrieved from the API', function() {
      var main = $('p.ng-binding')
      expect(main.getText()).toContain('Abadas');
    })
  })
})

  
