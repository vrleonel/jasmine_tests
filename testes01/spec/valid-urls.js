describe("Testes da URL",function(){
	
	it("Deve ser uma string", function(){
		var myUrl = 'http://www.titansgroup.com.br/bla.html';
		var UrlScript = new titans.pages.ValidUrl(myUrl);

		expect(UrlScript.getUrl()).toEqual(myUrl);
	});

	it("Deve ter o protocolo http", function(){
		var myUrl = 'https://www.titansgroup.com.br/bla.html';
		var UrlScript = new titans.pages.ValidUrl(myUrl);

		expect(UrlScript.getUrl()).toMatch(/http(s)?\:\/\//);
	});

	it("Deve ter o protocolo https", function(){
		var myUrl = 'https://www.titansgroup.com.br/bla.html';
		var UrlScript = new titans.pages.ValidUrl(myUrl);

		expect(UrlScript.getUrl()).toMatch(/http(s)?\:\/\//);
	});

	it("nao deve ter o protocolo ftp", function(){
		var myUrl = 'ftp://www.titansgroup.com.br/bla.html';
		var UrlScript = new titans.pages.ValidUrl(myUrl);

		expect(UrlScript.getUrl()).toBeFalsy();
	});

});

// describe("basic tests", function(){

// 	var myUrl = 'http://www.titansgroup.com.br/bla.html';
// 	var UrlScript = new titans.pages.ValidUrl(myUrl);

// 	it("null deve ser null", function(){
// 		expect(null).toBeNull();
// 	});

// 	it("get url deve retornar a url informada", function(){
// 		expect(UrlScript.getUrl()).toEqual(myUrl);
// 	});
// });