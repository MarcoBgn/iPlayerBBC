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
      expect(navbar.getText()).toContain('A B C D E F G');
    })
    
    it('Displays a list of programs retrieved from the API', function() {
      var main = $('div.jumbotron')
      expect(main.getText()).toContain('Abadas', "A Blackpool Big Band Boogie: Jools Holland and his Rhythm & Blues Orchestra");
    })
    
    it('Displays a list of programs with title and image', function() {
      var main = $('div.jumbotron')
      expect(element(by.id('p02b4jth')).isPresent()).toBe(true);  
    })
    
    it('Paginates the results if the letter has more than 20 entries', function() {
      var main = $('div.pagination')
      expect(main.getText()).toContain('Previous', 'Next');  
    })
    
    it('Organises the list alphabetically', function() {
      element(by.css('[ng-click="isCollapsed = !isCollapsed"]')).click();
      element(by.css('[ng-click="letter.letterChange(\'b\')"]')).click();
      var main = $('div.jumbotron')
      expect(main.getText()).toContain('Baby Jake');  
    })
  })
})

  
