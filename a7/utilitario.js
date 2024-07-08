let suits = ["Copas", "Espadas", "Ouros", "Paus"]; //naipes
let numbers = [
	"A",
	"2",
	"3",
	"4",
	"5",
	"6",
	"7",
	"8",
	"9",
	"10",
	"J",
	"Q",
	"K",
];

//essa função pega uma carta aleatoria
const criaCartaAleatoria = () => {
	let randomSuit = suits[Math.floor(Math.random() * suits.length)]; // escolhe um naipe aleatorio
	let randomNumber = numbers[Math.floor(Math.random() * numbers.length)]; // escolhe um numero aleatorio
	//devolve um objeto de uma carta
	// { number: "A", suit: "Paus"}
	return { number: randomNumber, suit: randomSuit };
};

//cria um deck cartas
const deckDeCartas = () => {
	let deck = [];
	// suits.forEach -> para cada Naipe, preencha com todos os possiveis numeros
	suits.forEach((suit) => {
		numbers.forEach((num) => {
			deck.push({ number: num, suit: suit });
		});
	});

	return deck; // o retorno dessa função, é um array com todas as cartas de um baralho
};

console.log(criaCartaAleatoria());

module.exports = { criaCartaAleatoria, deckDeCartas };
