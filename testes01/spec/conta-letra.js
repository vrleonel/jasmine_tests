describe("Contador de letras de número não composto",function(){
	
	it("N. 1 deve retornar duas letras", function(){
		expect(contaLetra(1)).toEqual(2);
	});

	it("N. 8 deve retornar quatro letras", function(){
		expect(contaLetra(8)).toEqual(4);
	});

	it("N. 4 deve retornar seis letras", function(){
		expect(contaLetra(4)).toEqual(6);
	});

	it("N. 10 deve retornar 3 letras", function(){
		expect(contaLetra(10)).toEqual(3);
	});

	it("N. 0 deve retornar 4 letras", function(){
		expect(contaLetra(0)).toEqual(4);
	});
});

describe("Contador de números compostos", function(){
	it("N. 31 deve rotornar 9 letras", function(){
		expect(contaLetra(31)).toEqual(9);
	});
});