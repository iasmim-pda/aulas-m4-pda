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

const app = express();

app.use(express.json());

app.use(petRouter);

const PORT = 3000;

// const syncDatabase = async () => {
//   try {
//     await sequelize.authenticate();
//     console.log('Connection has been established successfully.');
//     await sequelize.sync({ force: true }); 
//     console.log('Database synchronized.');
//   } catch (error) {
//     console.error('Unable to connect to the database:', error);
//   }
// };

// Sincronizar o banco de dados sqlite
// sequelize
// 	.sync()
// 	.then(() => {
// 		app.listen(PORT, () => {
// 			console.log(`A aplicação está rodando na porta http://localhost:${PORT}`);
// 		});
// 	})
// 	.catch((erro) => {
// 		console.error("Não foi possível conectar no banco de dados", erro);
// 	});

const startServer = async () => {
	try {
		await sequelize.authenticate();// quando o banco de dados tem servidor, precisamos autenticar
		
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
