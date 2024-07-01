// fetch("https://api.chucknorris.io/jokes/random", {
// 	method: "GET",
// 	headers: {
// 		Accept: "application/json",
// 	},
// }) //por padrão usar o GET --> O FETCH É UMA PROMISE
// 	.then((response) => {
// 		console.log(response);

// 		if (!response.ok) {
// 			throw new Error("Erro na rede!");
// 		}
// 		//esse retorno
// 		return response.json();
// 	})
// 	.then((dados) => console.log(dados)) //é recebido no proximo then
// 	.catch((erro) => console.error("Erro:", erro));

//Tranformar o codigo acima em uma função assincrona com async e await
//https://pokeapi.co/api/v2/pokemon/ditto

async function pegarPokemon(nomeDoPokemon) {
	let nomeEmMinusculo = nomeDoPokemon.toLowerCase();

	try {
		//dentro do try vai tudo que eu quero que aconteça se der certo
		const resposta = await fetch(
			`https://pokeapi.co/api/v2/pokemon/${nomeEmMinusculo}`
		);

		if (resposta.status === 404) {
			throw new Error("Pokemon não encontrado");
		}

		const converteJson = await resposta.json();

		console.log(converteJson);
	} catch (erro) {
		console.log("erro tratado", erro);
	}
}

console.log(pegarPokemon("pokemonquenaoexiste"));