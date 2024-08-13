import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import YAML from "yamljs";
import { fileURLToPath } from "url";
import { dirname } from "path";

// Obter o diretório atual usando import.meta.url
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Carregar arquivos YAML diretamente
const petDocs = YAML.load(`${__dirname}/pet.yaml`);

const swaggerDefinition = {
	openapi: "3.0.0",
	info: {
		title: "Pet API",
		version: "1.0.0",
		description: "API for managing pets",
	},
	servers: [
		{
			url: "http://localhost:3000",
		},
	],
	components: petDocs.components,
	paths: petDocs.paths,
};

const options = {
	definition: swaggerDefinition,
	apis: [], 
};

const swaggerSpec = swaggerJSDoc(options);

const setupSwagger = (app) => {
	app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};

export default setupSwagger;
