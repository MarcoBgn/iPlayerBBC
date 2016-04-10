describe('iPlayerBBC', function() {
  
  it('should automatically redirect to /home.html when location hash/fragment is empty', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/");
  });
  
  it('Has a navigation bar with link iPlayerBbc', function() {
    browser.get('/');
    var navbar = $('div.header')
    expect(navbar.getText()).toContain('iPlayerBbc');
  })
  
  it('Has a navigation bar with link Home', function() {
    browser.get('/');
    var navbar = $('div.header')
    expect(navbar.getText()).toContain('Home');
  })
})

  
