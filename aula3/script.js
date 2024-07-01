const chalk = require("chalk");

const Voyager = {
	nome: "Voyager",
	lancamento: "1977",
	objetivo: "Estudar os planetas exteriores do Sistema Solar",
	status: "Em operação",
	dados: [
		"Imagens de Júpiter",
		"Amostras de poeira interestelar",
		"Dados de radiação cósmica",
	],
};

const Curiosity = {
	nome: "Curiosity",
	lancamento: "2011",
	objetivo: "Investigar a habitabilidade de Marte",
	status: "Em operação",
	dados: [
		"Amostras de solo marciano",
		"Imagens panorâmicas de Marte",
		"Dados meteorológicos",
	],
};

const Perseverance = {
	nome: "Perseverance",
	lancamento: "2020",
	objetivo: "Procurar sinais de vida microbiana em Marte",
	status: "Em operação",
	dados: ["Amostras de rochas"],
};

const Hubble = {
	nome: "Hubble",
	lancamento: "1990",
	objetivo: "Observar os planetas e galáxias mais distantes já vistos",
	status: "Em operação",
	dados: ["Dados sobre a expansão do universo"],
};

/* Juntos desenvolveremos um sistema que usa uma promise para decidir quando devemos enviar os dados de cada sonda 
espacial de volta para a NASA, porém este sistema somente irá enviar os dados de volta para a NASA quando tivermos 
dois ou mais, faremos isso para economizar energia da sonda espacial enviando todos os dados de uma vez. Acaso não 
tivermos mais de um único dado, então enviaremos uma mensagem que estamos esperando mais quantidades de dados \
para os enviar juntos. (Usem este arquivo que contém os dados de cada sonda.)*/

//TODO:
//1. Nosso sistema utiliza Promise
//2. Objetivo: Enviar os dados de cada sonda

//3. A SONDA SÓ ENVIA O DADO Só irá enviar os dados quando tivermos pelo menos DOIS dados
//4. SE NAO tiver, enviaremos uma mensagem informando que esramos esperando mais quantidade de dados

//O fetch é uma promise

//CALLBACK
//exemplo da sonda

const Juno = {
	nome: "Juno",
	lancamento: "2011",
	objetivo: "Estudar Júpiter em detalhes nunca antes vistos",
	status: "Em operação",
	dados: [
		"Imagens de Júpiter",
		"Dados sobre o campo magnético de Júpiter",
		"Informações sobre a atmosfera de Júpiter",
	],
};

function verificaEnvioDeDados(sonda) {
	// a minha função recebe a sonda

	//Instacio a minha classe Promise, que é padrão do JS para criação de promisses
	const promessa = new Promise((resolve, reject) => {
		if (sonda.dados.length >= 2) {
			resolve({ status: 200, data: sonda.dados }); //O resolve envia o que a gente quiser para o cliente, caso a promise tenha sido bem sucedida
		} else {
			reject({
				status: 402,
				erro: "Esperando mais dados para realizar o envio",
			});
		}
	});

	return promessa;
}

//console.log(verificaEnvioDeDados(Juno));

const verificaDados_Curiosity = verificaEnvioDeDados(Curiosity)
	.then((dados) => console.log(dados))
	.catch((error) => console.error(error));

const verificaDados_Hubble = verificaEnvioDeDados(Hubble)
	.then((dados) => console.log(dados))
	.catch((error) => console.log(chalk.red(`ERRO: ${error.erro}`)));


  
// fetch("https://api.chucknorris.io/jokes/random") //por padrão usar o GET --> O FETCH É UMA PROMISE
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
