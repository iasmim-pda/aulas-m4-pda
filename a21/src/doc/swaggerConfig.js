import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import YAML from "yamljs";
import path from "path";

const currentDirectory = path.resolve(); // ela tá obtendo o nosso diretório atual
const petDocsPath = path.join(currentDirectory, "src/doc/pet.yaml");
const petDocs = YAML.load(petDocsPath);

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
