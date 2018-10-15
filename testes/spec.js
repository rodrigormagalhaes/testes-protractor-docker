describe('site angularjs', function() {
    it('should find a text', function() {
      browser.get('https://angularjs.org/');
        
      //clica em Learn usando selector css
      element(by.css('#navbar-main > div > div > ul > li:nth-child(1) > a')).click();
     
      //clica em Tutorial
      element(by.css('#navbar-main > div > div > ul > li.dropdown.open > ul > li:nth-child(1) > a')).click();
  
      // clica em 11 - Custom Filters usando selector xpath
      element(by.xpath('//*[@id="wrapper"]/section/div/div[1]/div/ul/li/ul/li[12]/a')).click();
      
      // Verifica se existe texto 'Testing'  
      var teste = element(by.css('#testing'));
      expect(teste.getText()).toEqual('Testing');

      
    });
  });
