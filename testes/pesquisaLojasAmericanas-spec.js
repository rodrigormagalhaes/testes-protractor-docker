browser.waitForAngularEnabled(false);

describe('site lojas americanas', function() {
    it('deve buscar um produto', function() {

      browser.get('https://www.americanas.com.br');
        
      //clica no campo de busca selector css
      element(by.id('h_search-input')).sendKeys('iphone');
      element(by.id('h_search-btn')).click();
   
      // clica no 'iphone - cor' = preto
      element(by.css('#sidebar-middle > div:nth-child(2) > div > div > div > div > section:nth-child(2) > div > ul > li:nth-child(1) > a > svg')).click();
        
      var teste = element(by.css('#content-middle > div:nth-child(2) > div > div > div > a.btn.btn-xs.btn-input.btn-thin.btn-dismissible.btn-list-item > span'));
      
      // verifica se foi aplicado filtro = preto
      expect(teste.getText()).toEqual('preto');

    });
  });
