import { Router } from "express";

import { getAllAddrees } from "../controllers/getAllAddress.controller.js";

const rotaEnderecos = Router();

rotaEnderecos.get("/enderecos", getAllAddrees);

export { rotaEnderecos };
