describe("Contador de letras de números",function(){
	it("N. 0 deve retornar quatro letras", function(){
		expect(contaLetra(0)).toEqual(4);
	});

	it("N. 1 deve retornar duas letras", function(){
		expect(contaLetra(1)).toEqual(2);
	});

	it("N. 5 deve retornar cinco letras", function(){
		expect(contaLetra(5)).toEqual(5);
	});

	it("N. 10 deve retornar tres letras", function(){
		expect(contaLetra(10)).toEqual(3);
	});

	it("N. 21 deve retornar oito letras", function(){
		expect(contaLetra(21)).toEqual(8);
	});

	it("N. 45 deve retornar cartoze letras", function(){
		expect(contaLetra(45)).toEqual(14);
	});

	it("N. 100 deve retornar três letras", function(){
		expect(contaLetra(100)).toEqual(3);
	});

	it("N. 101 deve retornar oito letras", function(){
		expect(contaLetra(101)).toEqual(8);
	});

	it("N. 121 deve retornar doze letras", function(){
		expect(contaLetra(121)).toEqual(14);
	});
	it("N. 121 deve retornar doze letras", function(){
		expect(contaLetra(16)).toEqual(9);
	});
	it("N. 121 deve retornar doze letras", function(){
		expect(contaLetra(19)).toEqual(8);
	});
});
