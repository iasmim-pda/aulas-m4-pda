import express from "express";
import sequelize from "./src/database/config.js";
import { petRouter } from "./src/routes/pet.routes.js";
import { setupSwagger } from "./src/doc/swaggerConfig.js";

const app = express();

app.use(express.json());

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
