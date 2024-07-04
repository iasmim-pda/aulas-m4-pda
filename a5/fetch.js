
//nosso cliente/front

//POST
fetch("http:localhost:3000/pda", {
	method: "POST",
	body: { test: "Hello world" },
	headers: {
		Accept: "application/json",
	},
})
	.then((dados) => dados.text())
	.then((dados) => console.log(dados))
	.catch((erro) => console.log(erro));



//GET
fetch("http:localhost:3000/pda")
	.then((dados) => dados.text())
	.then((dados) => console.log(dados))
	.catch((erro) => console.log(erro));
