import { Router } from "express";
import { pegaTodosOslivros } from "../../controllers/book.controller.js";

//2. declaro o nome da minhan rota, pra facilitar, eu escrevi rotaDeLivros
const rotaDeLivros = Router();

//ao invés de usar a aplicação TODA
//agora eu uso só uma parte com o router
rotaDeLivros.get("/livros/todos", pegaTodosOslivros);
//rotaDeLivros.get("/livros/harry-potter", );

export { rotaDeLivros };
