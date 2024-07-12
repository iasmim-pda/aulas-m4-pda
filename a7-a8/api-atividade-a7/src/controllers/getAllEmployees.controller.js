// export const getAllEmployees = (app) => {
// 	app.get("/", (req, res) => {
// 		res.status(200).json({ employee });
// 	});
// };

//refatorando a função getAllEmployees, baseada no book.controller.js

import { employees } from "../database/employeeDatabase.js";

export const getAllEmployees = (requisicao, resposta) => {
	resposta.status(200).json(employees);
};
