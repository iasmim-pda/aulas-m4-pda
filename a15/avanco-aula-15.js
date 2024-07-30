import sqlite3 from "sqlite3";
sqlite3.verbose();

// Conectando ao banco de dados (ou criando se não existir)
const db = new sqlite3.Database("example.db", (err) => {
	if (err) {
		console.error(err.message);
	}
	console.log("Conectado ao banco de dados SQLite.");
});

const USERS_SCHEMA = `
CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    age INTEGER NOT NULL
)
`;

// Criando uma tabela
db.run(USERS_SCHEMA, (err) => {
	if (err) {
		console.error(err.message);
	}
	console.log("Tabela users criada.");
});

// Listando as tabelas
db.all("SELECT name FROM sqlite_master WHERE type='table';", [], (err, tables) => {
  if (err) {
      throw err;
  }
  console.log("Tabelas no banco de dados:");
  tables.forEach((table) => {
      console.log(table.name);
  });
});


// Inserindo dados na tabela
let users = [
	{ name: "Alice", age: 30 },
	{ name: "Bob", age: 25 },
	{ name: "Charlie", age: 35 },
];

let placeholders = users.map(() => "(?, ?)").join(",");
let sql = "INSERT INTO users (name, age) VALUES " + placeholders;
let values = users.reduce((acc, user) => [...acc, user.name, user.age], []);

db.run(sql, values, function (err) {
	if (err) {
		console.error(err.message);
	}
	console.log(`Linhas inseridas: ${this.changes}`);
});

// Consultando os dados
db.all("SELECT * FROM users", [], (err, rows) => {
	if (err) {
		throw err;
	}
	rows.forEach((row) => {
		console.log(row);
	});
});

// Fechando a conexão
db.close((err) => {
	if (err) {
		console.error(err.message);
	}
	console.log("Conexão com o banco de dados fechada.");
});
