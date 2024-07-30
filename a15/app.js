import sqlite3 from "sqlite3";
sqlite3.verbose();

//  o  primeiro parametro é o caminho para a nossa database
// Conectar ao banco de dados, porém se não existir ainda,
// essa linha codigo vai criar o banco de dados no arquivo
// passado no primeiro parametro

const databaseInstanciada = new sqlite3.Database(
	"./src/database/database.db",
	(erro) => {
		if (erro) {
			console.log(erro.message);
		}
		console.log("Conectado ao banco de dados com sucesso!");
	}
);

const USERS_SCHEMA_SQL = `CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    age INTEGER NOT NULL
)`;

const ADDRESS_SCHEMA_SQL = `CREATE TABLE IF NOT EXISTS address (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    country TEXT NOT NULL,
    city TEXT NOT NULL,
    user_id INTEGER,
    FOREIGN KEY(user_id) REFERENCES users(id)
)`;

const CLASSES_SCHEMA_SQL = `CREATE TABLE IF NOT EXISTS classes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    user_id INTEGER,
    FOREIGN KEY(user_id) REFERENCES users(id)
)`;

function CreateTableUser() {
	//Como vamos criar uma tabela?
	databaseInstanciada.run(USERS_SCHEMA_SQL, (erro) => {
		if (erro) {
			console.log(erro);
		}
		console.log("Tabela criada com sucesso");
	});
}

function CreateTableAddress(){
  databaseInstanciada.run(ADDRESS_SCHEMA_SQL, (erro) => {
    if (erro) {
      console.log(erro);
    }
    console.log("Tabela criada com sucesso");
  });
}

function CreateTableClasses(){
  databaseInstanciada.run(CLASSES_SCHEMA_SQL, (erro) => {
    if (erro) {
      console.log(erro);
    }
    console.log("Tabela criada com sucesso");
  });
}

// Se a gente usar funções para rodar o db.run()
// Serialize é importante para garantir a ordem da execução das QUERIES!

databaseInstanciada.serialize(() => {
  CreateTableUser()
  CreateTableAddress()
  CreateTableClasses
})

//Como visualizar se a tabela foi criada?
databaseInstanciada.all(
	"SELECT name FROM sqlite_master WHERE type='table';",
	[],
	(erro, tables) => {
		if (erro) {
			console.log(erro);
		}
		console.log(tables);
	}
);
