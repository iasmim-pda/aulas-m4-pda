const enviaPokemon = (requisicao, resposta) => {
	// nós buscamos o nome do pokemon dentro do parametro requisicao
	//fazemos a busca no bando de dados
	//enviamos a resposta pro nosso cliente (front)

	resposta.status(200).json({ nome: "Ditto", image: "image.png", ability: 5 });
};

module.exports =  enviaPokemon


