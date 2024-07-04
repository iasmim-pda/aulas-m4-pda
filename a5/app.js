//nosso backend/servidor

// 1) Importando o express
const express = require("express");
const enviaPokemon = require("./pokemon");

// 2) Criando uma instância da nossa aplicação
const app = express();

// 3) Essa constante é para facilitar a manutenção, pra ficar bonitinho
const port = 3000;

//requisicao -> o que recebe
//resposta -> o que enviamos

app.get("/", (requisicao, resposta) => {
	resposta.send("GET no caminho '/'");
});

app.delete("/", (requisicao, resposta) => {
	resposta.send("DELETE no caminho '/'");
});

app.put("/", (requisicao, resposta) => {
	resposta.send("PUT no caminho '/'");
});

app.post("/", (requisicao, resposta) => {
	resposta.send("POST no caminho '/'");
});

app.patch("/", (requisicao, resposta) => {
	resposta.send("PATCH no caminho '/'");
});

app.get("/julia", (requisicao, resposta) => {
	resposta.send("GET no caminho '/julia' ");
});

app.get("/pda", (requisicao, resposta) => {
	resposta.send("A turma 5 é a melhor. Helloooo world!!!");
});

app.post("/pda", (requisicao, resposta) => {
	resposta.send("Deu tudo certo no POST");
});

app.get("/pokemon/v2/ditto", enviaPokemon);

app.listen(port, () => {
	console.log(`Nossa aplicação está rodando na porta: ${port}`);
});
