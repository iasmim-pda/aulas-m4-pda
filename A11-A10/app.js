import express from "express";
import { userRouter } from "./src/routes/user.router.js";

const app = express();

//middleware
app.use(express.json());

//rota criada
app.use(userRouter);

const PORT = 3000;

app.listen(PORT, () => {
	console.log(`Nosso app tá rodando na porta: http://localhost:${PORT}`);
});

//Crie uma aplicação com uma rota cadastro
//que recebe nome, email e senha
