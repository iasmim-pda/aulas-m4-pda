import { sub, sum, mult } from "../script";

// nossa, não quero mais fazer assim, quero uma estrutura de objeto
function calculator(tipoDeOperacao, a, b) {
	switch (tipoDeOperacao) {
		case "-":
			return sub(a, b);
		case "+":
			return sum(a, b);
		case "*":
			return mult(a, b);
		default:
			return "Operação inválida";
	}
}

// function calculator(tipoDeOperacao, a, b) {
// 	const operacoes = {
// 		"-": sub(a, b),
// 		"+": sum(a, b),
// 		"*": mult(a, b),
// 	};

// 	return operacoes[tipoDeOperacao] ?? "Operacao inválida";
// }

export { calculator };
