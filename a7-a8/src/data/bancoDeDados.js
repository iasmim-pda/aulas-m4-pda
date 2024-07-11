import { Livro } from "./bookModel.js";

export const bancoDeLivros = [
	new Livro("Dom Casmurro", "Machado de Assis", "Romance", "1899", 1),
	new Livro("A Metamorfose", "Franz Kafka", "Ficção", "1915", 2),
	new Livro("1984", "George Orwell", "Ficção Distópica", "1949", 3),
	new Livro(
		"O Pequeno Príncipe",
		"Antoine de Saint-Exupéry",
		"Fantasia",
		"1943",
		4
	),
	new Livro(
		"Cem Anos de Solidão",
		"Gabriel García Márquez",
		"Realismo Mágico",
		"1967",
		5
	),
];

// aqui deu um erro, o que esta faltando?

//Phelipe -> tem que importar!
