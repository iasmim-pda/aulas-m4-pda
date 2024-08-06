import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { fileURLToPath } from "url";
import YAML from "yamljs";
import { dirname } from "path";

//2. Criar o arquivo de configurações do swagger
const __filename = fileURLToPath(import.meta.url); // ela tá obtendo o nosso diretório atual
const __dirname = dirname(__filename);

//vamos carregar nosso arquivo YAML
const petDocs = YAML.load(`${__dirname}/pet.yaml`);

const options = {
	definition: {
		openapi: "3.0.0",
		info: {
			title: "Pets PDA",
			version: "1.0.0",
			description: "Uma API para gerenciar um sistema de Pets",
		},
		components: petDocs.components,
		paths: petDocs.paths,
	},
	apis: [],
};

const swaggerDoc = swaggerJSDoc(options);

const setupSwagger = (app) => {
	app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDoc));
};

export { setupSwagger };

//Para importar um arquivo YAML, vamos precisar fazer
// algumas alterações na configuração do nosso swagger
