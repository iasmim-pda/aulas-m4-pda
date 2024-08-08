import { sum, mult } from "./script.js";
// Describe é onde descrevemos de forma geral o nosso teste
// Já, cada test dentro do describe é um teste separado
describe("testando a função de soma", () => {
	test("soma 1 + 4 e o resultado deve ser 5", () => {
		const resultado = sum(1, 4);

		expect(resultado).toBe(5);
	});

	test("soma 2 + 6 e o resultado deve ser 8", () => {
		const resultado = sum(2, 6);

		expect(resultado).toBe(8);
	});
});

describe("testando a função de multiplicacao", () => {
	test("multiplicação de 2*2 o resultado deve ser 4", () => {
		const resultado = mult(2, 2);

		expect(resultado).toBe(4);
	});
});
