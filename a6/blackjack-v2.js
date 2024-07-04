const utils = require("./utilitario");

const blackJack = (app) => {
  app.get("/blackjack", (req, res) => {
    const response = [utils.randomPlayingCard(), utils.randomPlayingCard()];
    res.send(response);
  });

  app.get("/blackjack/more", (req, res) => {
    res.send(utils.randomPlayingCard());
  });
};

module.exports = blackJack;