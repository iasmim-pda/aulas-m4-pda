import express from "express";
import { rotaFuncionarios } from "./src/routes/employee.routes.js";
import { rotaEnderecos } from "./src/routes/address.routes.js";

const app = express();

const PORT = 3003;

//MIDDLEWARE
app.use(express.json());
//MODICA TODAS AS REQUISICOES DO APP

//ROTAS DO SERVIDOR
app.use(rotaFuncionarios);
app.use(rotaEnderecos);

app.listen(PORT, () => {
	console.log(`Nosso app tá rodando na porta: http://localhost:${PORT}`);
	//Template string, para poder colocar variaveis dentro da minha string
});
