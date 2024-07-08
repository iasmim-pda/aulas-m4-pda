// Criando uma rota passo a passo
//1. importando express
const express = require("express");

const { getTwoCards, getOneCard } = require("./blackjack");
//2. instanciando minha rota
const router = express.Router();

//Percebam que eu troquei de "app" para "router"
//Logo, entendam que o router é um "mini-app"
router.get("/blackjack", getTwoCards);
router.get("/blackjack/more", getOneCard);

//penultimo passo
//exporto a minha rota

module.exports = router;
