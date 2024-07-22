/**
 * Juntos criaremos uma API que nos permita cadastrar pets para
 * adoção usando banco de dados mocado, ler todos os pets cadastrados
 * Ler todos os pets -> get all
 * cadastrar um pet -> Post
 * pegar um pet especifico -> get por id
 * e pegar os dados de um pet específico através do ID sendo passado como parâmetro de rota.
 */

import express from "express";
import { petRouter } from "./src/routes/pet.routes.js";

const app = express();

app.use(express.json());

app.use(petRouter);

const PORT = 3000;

app.listen(PORT, () => {
	console.log(`A aplicação está rodando na porta http://localhost:${PORT}`);
});
