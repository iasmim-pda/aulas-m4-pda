import {
	deleteById,
	getAllPets,
	getById,
	getByName,
	updatePetById,
} from "../controllers/pet.controller.js";
import { createPet } from "../controllers/pet.controller.js";
import { Router } from "express";

const petRouter = Router();

petRouter.get("/pets/all", getAllPets);
petRouter.post("/pets", createPet);
petRouter.get("/pets/:id", getById);
petRouter.get("/pets/nome/:nome", getByName);
petRouter.delete("/pets/:id", deleteById);

petRouter.put("/pets/:id", updatePetById);

//1. estamos usando o put, logo iremos atualizar todo o objeto
// por isso na nossa requisição precisamos enviar todo o objeto para atualizar



//Se eu tenho um pet na estrutura:

// {
// 	"id": 1,
// 	"nome": "Rex",
// 	"porte": "Grande",
// 	"raca": "Vira-lata",
// 	"especie": "Cachorro",
// 	"idade": 5
// }

// Quando eu fizer uma request com o metodo PUT, passando o seguinte objeto:

// {
// 	"id": 1,
// 	"nome": "Rex",
// 	"porte": "Pequeno",
// 	"raca": "Vira-lata",
// 	"especie": "Cachorro",
// 	"idade": 5
// }

//Para atualizar um dado, podemos usar o PUT e o PATCH
//PUT -> Atualiza o objeto inteiro, logo eu tenho que passar o objeto INTEIRO NA REQUISICAO
//PATCH -> Atualiza apenas uma parte do objeto, apenas as propriedades que eu quero alterar

// Já quando eu utilizar o método PATCH, passando o seguinte objeto:

// {
// 	"porte": "Pequeno"
// }

// eu atualizo apenas o campo porte do objeto com id 1.

export { petRouter };
