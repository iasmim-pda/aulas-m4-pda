import request from "supertest";
import { app } from "../../app.js";
//Quando eu importo o Pet, eu importo uma conexão com o BD
import { Pet } from "../models/pet.model.js";

//Ao mockar a importação do Pet com o BD, eu previno que ocorram operações REAIS no banco de dados,
//com isso eu consigo simular/mockar o retorno de QUALQUER método na minha tabela
//como o Pet.findAll()

jest.mock("../models/pet.model.js");

describe("Testes do controller responsável pela rota de Pets", () => {
	// test("")
	it("deve retornar todos os pets", async () => {
		const mockPets = [
			{ id: 1, nome: "Maju", idade: 1, raca: "lulu" },
			{ id: 2, nome: "Pandora", idade: 3, raca: "lulu" },
		];
		//Com o código abaixo eu tô dizendo que ao usar a função findAll, eu quero que ela se resolva com o mock
		Pet.findAll.mockResolvedValue(mockPets);

		const response = await request(app).get("/pets/all");
		expect(response.status).toBe(200);
		expect(response.body).toEqual(mockPets);
	});

	it("deve retornar todos os pets", async () => {
		//Com o código abaixo eu tô dizendo que ao usar a função findAll, eu quero que ela se resolva com o mock
		Pet.findAll.mockRejectedValue(new Error("Erro"));

		const response = await request(app).get("/pets/all");
		expect(response.status).toBe(500);
		expect(response.body).toEqual({
			error: "Não foi possível encontrar os pets",
		});
	});
});
