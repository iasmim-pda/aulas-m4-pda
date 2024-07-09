/**
 * API DE LIVROS!
 * Biblioteca PDA
 * 1. Criar um modelo da nossa classe LIVRO, para sabermos os atributos do livro
 * 2. Uma rota GET "/livros/todos" -> essa rota é responsável por retornar um array com todos os
 * nossos livros
 */

import express from "express";
import { rotaDeLivros } from "./bookRouter.js";

const app = express();

//Eu tenho que dizer pra minha aplicação TODA (app), que existem rotas
// O ultimo passo para usar uma rota, é definir ela no app.js
app.use(rotaDeLivros);
// app.use(rotaDeUsuarios)
// app.use(rotaDeAutores)

app.listen(4000, () => {
	console.log("http://localhost:4000/");
});
