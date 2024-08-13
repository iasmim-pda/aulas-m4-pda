import express from "express";
import sequelize from "./src/database/config.js";
import { petRouter } from "./src/routes/pet.routes.js";
import { setupSwagger } from "./src/doc/swaggerConfig.js";
import cors from "cors";

const corsConfig = {
	origin: ["https://meusite.com.br"],
	methos: ["GET,PUT,CREATE,DELETE"],
};

export const app = express();

app.use(express.json());
app.use(cors(corsConfig));

app.use(petRouter);

setupSwagger(app);

const PORT = 3000;

//Sincronizar o banco de dados sqlite
sequelize
	.sync()
	.then(() => {
		app.listen(PORT, () => {
			console.log(`A aplicação está rodando na porta http://localhost:${PORT}`);
		});
	})
	.catch((erro) => {
		console.error("Não foi possível conectar no banco de dados", erro);
	});

/**
 * 1. Instalamos npm install swagger-jsdoc swagger-ui-express
 */

//jest -> biblioteca principal de testes, framework
//supertest -> biblioteca que forcene uma api pra gente realizar requisicoes http junto com o jest
//@babel/plugin-transform-modules-commonjs -> transforma es modules -> common js
//babel/core -> núcleo do babel, compilador javascript que converte código es6+ em código legivel para os navegadores/sistemas antigos
// babel/preset-env -> preset que ajuda a trazer compatibilidade do javascript com versões anteriores
