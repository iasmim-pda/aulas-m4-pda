// Eu quero criar um controller para manipular a criação de um novo funcionario

import { Employee } from "../models/employee.model.js";

export const createNewEmployee = (request, response) => {
	//De onde vai vir os dados para criar um novo funcionario?
	// DENTRO DA MINHA REQUISIÇAO/REQUEST
	//resquest.body
	const novoFuncionario = request.body; //aqui eu consigo pegar o corpo da requisição
	console.log(novoFuncionario);
	response.status(200).send(`O usuário ${novoFuncionario.name} foi criado`);
};
