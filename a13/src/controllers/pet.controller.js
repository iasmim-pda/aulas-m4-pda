/**
 * Juntos criaremos uma API que nos permita cadastrar pets para
 * adoção usando banco de dados mocado, ler todos os pets cadastrados
 * Ler todos os pets -> get all
 * cadastrar um pet -> Post
 * pegar um pet especifico -> get por id
 * e pegar os dados de um pet específico através do ID sendo passado como parâmetro de rota.
 */

let petDatabase = [
	new Pet("Rex", "Grande", "Vira-lata", "Cachorro", 5),
	new Pet("Mingau", "Pequeno", "Siamês", "Gato", 2),
	new Pet("Simba", "Médio", "Persa", "Gato", 1),
	new Pet("Tobias", "Grande", "Vira-lata", "Cachorro", 3),
	new Pet("Nina", "Pequeno", "Siamês", "Gato", 2),
	new Pet("Luna", "Médio", "Persa", "Gato", 1),
];

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
