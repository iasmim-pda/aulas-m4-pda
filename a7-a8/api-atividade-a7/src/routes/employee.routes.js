// export const getAllEmployees = (app) => {
// 	app.get("/", (req, res) => {
// 		res.status(200).json({ employee });
// 	});
// };

//1. importa o router
import { Router } from "express";
//2. importa controller
import { getAllEmployees } from "../controllers/getAllEmployees.controller.js";
import { createNewEmployee } from "../controllers/createNewEmployee.controller.js";

const rotaFuncionarios = Router();

rotaFuncionarios.get("/", getAllEmployees);

rotaFuncionarios.post("/novo-funcionario", createNewEmployee);

export { rotaFuncionarios };
