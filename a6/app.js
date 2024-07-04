/* Juntos iremos desenvolver uma API de entrega de cartas de baralho, 
essa API irá conter três rotas GET, sendo elas:
“/blackjack” esta rota irá entregar duas cartas aleatórias;
“/blackjack/more” esta rota irá entregar uma carta aleatória;

//Tarefa de casa:
"/all-cards" esta rota entrega todas as cartas
"/copas" esta rota entrega todas as cartas copas
"/espada" esta rota entrega todas as cartas espada
"/paus" esta rota entrega todas as cartas paus
"/ouros" esta rota entrega todas as cartas ouros
“/truco” esta rota entrega 3 cartas aleatórias;
*/

const express = require("express");
const blackjack = require("./blackjack")

//desconstruindo
// const {getOneCard, getTwoCards} = require("./blackjack")

const app = express();

const port = 4000;

app.get("/blackjack", blackjack.getTwoCards);
app.get("/blackjack/more", blackjack.getOneCard);

// app.get("/blackjack", getTwoCards);
// app.get("/blackjack/more", getOneCard);

app.listen(port, () => {
	console.log(
		`Nossa aplicação está rodando na porta: http://localhost:${port}`
	);
});
