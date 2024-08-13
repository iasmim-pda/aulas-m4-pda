import express from "express";
import sequelize from "./src/database/config.js";
import { petRouter } from "./src/routes/pet.routes.js";
import { setupSwagger } from "./src/doc/swaggerConfig.js";
import cors from "cors"; // Import the cors package

export const app = express();

app.use(express.json());

const corsOptions = {
  origin: ['http://example.com', 'http://anotherdomain.com'], // Allow multiple origins
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Allow specific HTTP methods
  credentials: true, // Allow cookies to be sent
  optionsSuccessStatus: 204 // Some legacy browsers choke on 204
};

app.use(cors(corsOptions)); // Use the cors middleware with the specified options

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
