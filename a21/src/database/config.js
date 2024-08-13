import { Sequelize } from "sequelize";

const sequelize = new Sequelize({
	dialect: "sqlite", //CRIA
	storage: "./src/database/database-sqlite.db",// onde nós queremos CRIAR o arquivo do banco de dados
});

// Instalamos o sqlite3 e o sequelize e colocamos o caminho para o o arquivo database.sqlite.db
// Instaciamos o sequelize e passamos um objeto com as configurações do banco de dados

export default sequelize;
