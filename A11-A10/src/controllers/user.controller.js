// Todos os controllers relacionados a rota de user
import { users } from "../database/userDatabase.js";
import { User } from "../models/usuario.model.js";
// quero fazer uma função que pegue todos os usuarios
export const getUsers = (req, res) => {
	res.status(200).send(users);
};

export const createUser = (req, res) => {
	//req -> body
	//armezando o meu novo usuario, que vem no body da requisição dentro da constante newUser

	const newUser = req.body;

	const dadoFormartado = new User(
		newUser.name,
		newUser.email,
		newUser.password
	);

  //quero salvar o dado, o que vou fazer?
  //1. importo meu banco de dados (nesse caso é ficticio)

  // salvando o dado no meu banco de dados fake
  users.push(dadoFormartado)

  res.status(201).send(`O usuário ${dadoFormartado.name} foi criado com sucesso!`)
};
