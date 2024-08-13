/**
 * Juntos criaremos uma API que nos permita cadastrar pets para
 * adoção usando banco de dados mocado, ler todos os pets cadastrados
 * Ler todos os pets -> get all
 * cadastrar um pet -> Post
 * pegar um pet especifico -> get por id
 * e pegar os dados de um pet específico através do ID sendo passado como parâmetro de rota.
 */

import express from "express";
import sequelize from "./src/database/config.js";
import { petRouter } from "./src/routes/pet.routes.js";
// import { authRouter } from "./src/routes/auth.routes.js";
import swaggerUi from "swagger-ui-express";
import setupSwagger from "./src/doc/swagger.js";

const app = express();

app.use(express.json());
app.use(petRouter);
// app.use(authRouter);

setupSwagger(app);

const PORT = 3000;

const startServer = async () => {
	try {
		await sequelize.authenticate();
		console.log("Connection has been established successfully.");
		await sequelize.sync(); // Use { force: true } if you want to drop and recreate tables
		console.log("Database synchronized.");

		app.listen(PORT, () => {
			console.log(`A aplicação está rodando na porta http://localhost:${PORT}`);
		});
	} catch (error) {
		console.error("Unable to connect to the database:", error);
	}
};

startServer();
