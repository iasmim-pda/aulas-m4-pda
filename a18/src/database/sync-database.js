import sequelize from "./database/config.js";

const syncDatabase = async () => {
	try {
		await sequelize.authenticate();
		console.log("Connection has been established successfully.");
		await sequelize.sync({ force: true }); // This will drop and recreate the tables
		console.log("Database synchronized.");
	} catch (error) {
		console.error("Unable to connect to the database:", error);
	}
};

syncDatabase();
