const express = require("express");
const app = express()

const blackJack = require("./blackjack")
blackJack(app)

app.listen(4000)