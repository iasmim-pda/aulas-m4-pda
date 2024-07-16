import { Router } from "express";

import { createUser, getUsers } from "../controllers/user.controller.js";

const userRouter = Router();

//quero criar um rota que envie todos os usuarios

userRouter.get("/user/all", getUsers);

//como prática de mercado, o caminho da sua rota faz referencia ao nome do arquivo
//o nome do nosso arquivo é user.router, logo, coloquei o nome user no nosso caminho de recurso

userRouter.post("/user", createUser);

export { userRouter };
