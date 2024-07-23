/**
 * Juntos criaremos uma API que nos permita cadastrar pets para
 * adoção usando banco de dados mocado, ler todos os pets cadastrados
 * Ler todos os pets -> get all
 * cadastrar um pet -> Post
 * pegar um pet especifico -> get por id
 * e pegar os dados de um pet específico através do ID sendo passado como parâmetro de rota.
 */

//nosso banco de dados é um array
let petDatabase = [
	new Pet("Rex", "Grande", "Vira-lata", "Cachorro", 5),
	new Pet("Mingau", "Pequeno", "Siamês", "Gato", 2),
	new Pet("Simba", "Médio", "Persa", "Gato", 1), // -> substituir por um novo
	new Pet("Tobias", "Grande", "Vira-lata", "Cachorro", 3),
	new Pet("Nina", "Pequeno", "Siamês", "Gato", 2),
	new Pet("Luna", "Médio", "Persa", "Gato", 1),
];

// petDatabase[2] = new Pet("Simba", "Grande", "Persa", "Gato", 3),

// import petDatabase from "../database/pet.database.js";
import { Pet } from "../models/pet.model.js";

export const getAllPets = (request, response) => {
	response.status(200).send(petDatabase);
};

export const createPet = (request, response) => {
	//desestruturar nossas propriedades do objeto
	//para ficar mais legivel nosso codigo

	const { nome, porte, raca, especie, idade } = request.body;

	//const novopet = response.body

	//response.body.id
	//response.body.nome
	//response.body.porte
	try {
		// se o nome = null, false, "" -> Falsy
		// ! -> negação
		// ! + nome = se nome não existe/vier
		if (!nome) {
			// se não vier nome, joga um erro
			// if (nome == null || nome == "" || nome == undefined) {
			throw new Error();
		}

		const newPet = new Pet(nome, porte, raca, especie, idade);

		petDatabase.push(newPet);

		response.status(201).send({
			message: "Pet criado com sucesso",
			newPet,
		});
	} catch (e) {
		response.status(400).send({
			error: "Não foi possível criar o Pet",
		});
	}
};

export const getById = (request, response) => {
	const idParametro = request.params.id;

	try {
		const petEncontrado = petDatabase.find((pet) => pet.id == idParametro);

		if (!petEncontrado) {
			throw new Error("Not found");
		}

		response.status(200).send(petEncontrado);
	} catch (e) {
		response.status(404).send({
			error: e.message,
		});
	}
	//os dados recebidos através dos parametros, vem no formato de string
};

export const getByName = (request, response) => {
	const nomeParametro = request.params.nome;

	try {
		//o método find vai encontrar o primeiro elemento que satisfaça uma condição
		// no caso, queremos encontrar o primeiro elemento/objeto que tenha o nome igual ao do nosso parametro

		//porque eu não usei o filter? porque o filter devolve em array e pode devolver mais de um elemento
		//nesse caso, eu só queria um
		const petEncontrado = petDatabase.find((pet) => pet.nome == nomeParametro);

		if (!petEncontrado) {
			throw new Error("Not found");
		}
		response.status(200).send(petEncontrado);
	} catch (e) {
		response.status(404).send({
			error: e.message,
		});
	}
	//os dados recebidos através dos parametros, vem no formato de string
};

export function deleteById(request, response) {
	let idParametro = request.params.id;

	try {
		let petParaDeletar = petDatabase.find((pet) => pet.id == idParametro);

		if (!petParaDeletar) {
			throw new Error("Not found");
		}

		//o filter, porque ai a gente filtra um novo array sem o pet a ser deletado
		// eu quero filtrar todos os pets que não sejam o petParaDeletar, pq esse eu quero remover

		//filter -> filtra o array baseado em uma condição
		// nesse caso eu quero remover um item do array
		//para isso eu posso filtrar todos os elementos que sejam diferentes daquele que eu
		//quero remover
		//com isso, no final eu terei um novo array sem o petParaDeletar
		// o pet atual é igual ao petParaDeletar? se sim, ele remove filtrando
		// se não, ele mantem no array -> que é o que a gente quer

		petDatabase = petDatabase.filter((pet) => pet != petParaDeletar);
		// essa é a base pro PUT, você reatribui com o valor atualizado

		//slice -> se a gente considerar que o id é o nosso indice
		// quando eu removo um item, o indice muda, logo o filter é melhor não precisarmos
		//lidar com essa complexidade agora

		response.status(204).send();
	} catch (e) {
		response.status(404).send(e.message);
	}
	//os dados recebidos através dos parametros, vem no formato de string
}

// Criando a rota de atualização
// vamos receber por parametro o ID do pet que queremos atualizar
//Primeiro precisamos pegar o pet que queremos atualizar
// Como vamos utilizar o método put, nós temos que substituir o objeto anterior pelo novo
// Segundo, temos que garantir que o cliente mandou todas as propriedades preenchidas
// Se faltar alguma propriedade, como nome, vou jogar um erro
// o meu lindo catch pegará o erro
// Se o cliente mandar todos os campos preenchidos, eu atualizo o dado

export const updatePetById = (request, response) => {
	//1. Pegar o id do pet que eu quero atualizar
	const petId = request.params.id;

	try {
		// Quem é o nosso petEncontrado? Vai ser aquele que o id for igual ao id recebido por params

		// Só que, como estamos trabalhando com array, nós precisamos substituir o elemento que está naquela
		//posição por um novo
		// logo eu preciso saber o INDEX daquele elemento para trocar por outro quando
		//estamos travalhando com arrays

		//Vamos encontrar o index do nosso banco de dados (array oara atualizar)
		// podemos usar o metodo findIndex para encontrar o index
		let indexPetParaAtualizar = petDatabase.findIndex((pet) => pet.id == petId);
		//o findIndex retorna -1 se não for encontrado o elemento

		if (indexPetParaAtualizar == -1) {
			throw new Error("Not found");
		}

		let petAtualizado = request.body;

		//Como que eu atualizo um elemento de um array?
		// ["casa", "carro"]
		// como eu atualizo de "carro" para moto?
		// array[1] = "moto"
		// novo array => ["casa", "moto"]

		//o que eu to fazendo aqui abaixo, é atualizando um elemento de um array baseado no index
		//é a mesma lógica acima
		console.log("Pet antigo", petDatabase[indexPetParaAtualizar]);
		petDatabase[indexPetParaAtualizar] = petAtualizado;

		console.log("Pet atualizado", petAtualizado);

		// response.status(200).send(petEncontrado);
		console.log("array apos atualizacao", petDatabase);
		response
			.status(200)
			.send({ message: "Pet atualizado com sucesso", petAtualizado });
	} catch (e) {
		response.status(404).send({
			error: e.message,
		});
	}
};
