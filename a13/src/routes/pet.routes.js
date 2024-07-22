import {
	deleteById,
	getAllPets,
	getById,
	getByName,
} from "../controllers/pet.controller.js";
import { createPet } from "../controllers/pet.controller.js";
import { Router } from "express";

const petRouter = Router();

petRouter.get("/pets/all", getAllPets);
petRouter.post("/pets", createPet);
petRouter.get("/pets/:id", getById);
petRouter.get("/pets/nome/:nome", getByName);
petRouter.delete("/pets/:id", deleteById);

export { petRouter };
