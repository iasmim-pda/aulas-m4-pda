//named export -> nome técnico da coisa

export class Livro {
	constructor(titulo, autor, genero, dataLancamento, id) {
		this.titulo = titulo;
		this.autor = autor;
		this.genero = genero;
		this.dataLancamento = dataLancamento;
		this.id = id;
	}
}

//só a  titulo de exemplo
// export function soma(a,b){
//   return a+b
// }

// export function subtracao(a,b){
//   return a-b
// }



// Quero usar a minha classe livros dentro do meu arquivo bancoDeDados para criar varios
// livros dentro de um array

// Comentei esse código porque iremos separa-lo em um arquivo diferente, para termos
// separação de responsabilidades

// SOLID? S -> Single responsability -> responsabilide unica -> cada coisa faz uma coisa so


// const livros = [
//   new Livro("Dom Casmurro", "Machado de Assis", "Romance", "1899", 1),
//   new Livro("A Metamorfose", "Franz Kafka", "Ficção", "1915", 2),
//   new Livro("1984", "George Orwell", "Ficção Distópica", "1949", 3),
//   new Livro("O Pequeno Príncipe", "Antoine de Saint-Exupéry", "Fantasia", "1943", 4),
//   new Livro("Cem Anos de Solidão", "Gabriel García Márquez", "Realismo Mágico", "1967", 5)
// ];


//Poderiamos fazer assim? Sim, tá certo também
//Só que, somos alunos comprometidos, logo, vamos aplicar POO
//Por isso usaremos o modelo com Classe

// const arrayDeLivros = [
//   {
//     nome: "DomCasmurro",
//     autor: "Machado de Assis"
//   }
// ]