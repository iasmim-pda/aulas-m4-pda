import { calculator } from "./calculator";

describe("testando a função calculadora para diferentes cenários", () => {
	// Testar o caso de subtracao
	it("se eu passar o tipo de operacao de subtracao, a funcao deve executar uma operacao de subtracao", () => {
		const resultado = calculator("-", 5, 2);
		expect(resultado).toBe(3);
	});
	//testar o caso de adição
	// testar o caso de multiplicacao
	//testar um caso de operacao inválida
});
