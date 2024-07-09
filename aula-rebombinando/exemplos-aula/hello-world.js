//1. npm init -> inicializar nosso projeto node, com o gerenciador de dependencias npm
//2. instalamos o express com o npm install/i express

const express = require("express");

const app = express();

// function helloworld(requisicao, resposta) {
// 	return resposta.json("Olá mundo!");
// }

// app.get("/", helloworld); //-> helloworld é um callback também

// é equivalente a

app.get("/", (requisicao, resposta) => {
	return resposta.send("Olá mundo!");
});

app.listen(4000, () => {
	console.log("http://localhost:4000/");
});

//PERCAM O MEDO DE TENTAR! O COMPUTADOR NAO VAI EXPLODIR SE VOCE ERRAR
