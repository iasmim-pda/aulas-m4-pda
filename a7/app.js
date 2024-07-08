/* Juntos iremos desenvolver uma API de entrega de cartas de baralho, 
essa API irá conter três rotas GET, sendo elas:
“/blackjack” esta rota irá entregar duas cartas aleatórias;
“/blackjack/more” esta rota irá entregar uma carta aleatória;

//Tarefa de casa:
"/all-cards" esta rota entrega todas as cartas
"/copas" esta rota entrega todas as cartas copas
"/espadas" esta rota entrega todas as cartas espada
"/paus" esta rota entrega todas as cartas paus
"/ouros" esta rota entrega todas as cartas ouros
“/truco” esta rota entrega 3 cartas aleatórias;
*/

const express = require("express");

const { getAllCards } = require("./cards");
const blackjackRouter = require("./blackjackRouter")

const app = express(); 
//QUANDO EU MUDO AQUI, EU MUDO TUDO
// é a nossa instancia principal do express
// inicia o nosso servidor
// app -> é a raiz da nossa aplicacao, 
//normalmente temos apenas UMA raiz por app
//app -> gerencia tudo

//const router = express.Router()
// QUANDO EU MUDO AQUI, EU SO MUDO UMA PARTE
// criar um mini-roteador, como se fosse um mini aplicativo, dentro da aplicação principal
// são MULTIPLOS por aplicação
// nós podemos ter VARIOS routers, um dedicado a cada parte especifica do nosso codigo
// gerenciamento focado, gerencia por partes especificas

//Um exemplo de aplicação:
// Uma api de um ecommerce -> 
//qualquer usuario pode ver os produtos
// porém apenas o usuario autenticado pode comprar -> apenas na rota de compra teriamos autenticacao/protecao
//logo, apenas o usuario autenticado consegue acessar a rota de compra
//isso demonstra a aplicabilidade do nosso router, pós podemos colocar "middlewares" especificos por rotas
// só pra rota /comprar/produto
const port = 4000;


//Irei remover aqui, e criarei em blackjackRouter
// app.get("/blackjack", getTwoCards);
// app.get("/blackjack/more", getOneCard);
app.get("/all-cards", getAllCards);

//Ultimo passo
//vou usar a minha rota
app.use(blackjackRouter)

app.listen(port, () => {
	console.log(
		`Nossa aplicação está rodando na porta: http://localhost:${port}`
	);
});
