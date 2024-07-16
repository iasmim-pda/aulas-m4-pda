import { Router } from "express";

import { getAllAddrees } from "../controllers/getAllAddress.controller.js";

const rotaEnderecos = Router();
//modifica as requisições APENAS desta rota
rotaEnderecos.use(express.json());

rotaEnderecos.get("/enderecos", getAllAddrees);

export { rotaEnderecos };
