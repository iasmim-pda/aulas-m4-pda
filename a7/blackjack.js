const arquivoUtilitario = require("./utilitario");

const getTwoCards = (requisicao, resposta) => {
	const primeiraCarta = arquivoUtilitario.criaCartaAleatoria();
	const segundaCarta = arquivoUtilitario.criaCartaAleatoria();

	const arrayDeCartas = [primeiraCarta, segundaCarta];

	resposta.status(200).json(arrayDeCartas);
};

const getOneCard = (requisicao, resposta) => {
	const cartaAleatoria = arquivoUtilitario.criaCartaAleatoria();

	resposta.status(200).json(cartaAleatoria);
};

module.exports = { getTwoCards, getOneCard };
