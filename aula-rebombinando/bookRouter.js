//1. Primeiro passo para criar uma rota, importo a função Router
import { Router } from "express";
import { bancoDeLivros } from "./bancoDeDados.js";

//2. declaro o nome da minhan rota, pra facilitar, eu escrevi rotaDeLivros
const rotaDeLivros = Router();

// minha callback
const pegaTodosOslivros = (requisicao, resposta) => {
	//Nossa funçao fará apenas uma coisa, entregar todos os livros
	resposta.json(bancoDeLivros);
};

//ao invés de usar a aplicação TODA
//agora eu uso só uma parte com o router
rotaDeLivros.get("/livros/todos", pegaTodosOslivros);
//rotaDeLivros.get("/livros/harry-potter", );

export { rotaDeLivros };
