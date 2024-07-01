const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('Qual o seu nome? ', (nome) => {
  console.log(`Olá, ${nome}!`);
  readline.close();
});

//O que seria um runtime? 
//runtime -> tempo de execução, plataforma de execução de um programa
//Node.js é um ambiente de execução de JavaScript que permite rodar códigos JavaScript no servidor
//Node.js é um runtime