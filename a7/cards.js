const arquivoUtilitario = require("./utilitario")

const getAllCards = (requisicao, resposta) => {
  const todasCartas = arquivoUtilitario.deckDeCartas()

  resposta.status(200).json(todasCartas)
}

module.exports = {getAllCards}

