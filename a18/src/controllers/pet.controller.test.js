import request from "supertest";
import { app } from "../../app";
import { Pet } from "../models/pet.model";

// supertest helps in making HTTP requests to your app and inspecting the responses.
// app is your Express application where the getAllPets function is used.
// Pet is the model we need to mock to control its behavior in tests.

//Use jest to mock the Pet model. This allows you to simulate the behavior of Pet.findAll() without actually querying the database.
//Mocking Pet prevents real database operations and allows you to control the return values of Pet.findAll().
jest.mock("../models/pet.model");

describe("Testes do controller responsável pelo gerenciamento da rota Pets", () => {
	it("should return all pets with status 200", async () => {
		// Arrange
		const mockPets = [{ id: 1, name: "Fido" }];

		//Set up the test by mocking Pet.findAll to return a predefined set of pets.
		Pet.findAll.mockResolvedValue(mockPets); // Mock implementation of findAll

		// Act
		//Make a GET request to the /api/pets endpoint using supertest.
		const response = await request(app).get("/pets/all");

		// Assert
		expect(response.statusCode).toBe(200);
		expect(response.body).toEqual(mockPets);
	});

	it("should handle errors and return status 500", async () => {
		// Arrange
		Pet.findAll.mockRejectedValue(new Error("Database Error")); // Simulate error

		// Act
		const response = await request(app).get("/pets/all");

		// Assert
		expect(response.statusCode).toBe(500);
		expect(response.body).toEqual({
			error: "Não foi possível encontrar os pets",
		});
	});
});
