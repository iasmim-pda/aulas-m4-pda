//Vamos exportar a configuração do jest, pra que toda vez que nós formos rodar os testes
//ele utilize nossas configurações
// "jest": {
//   "collectCoverage": true,
//   "coverageReporters": [
//     "json",
//     "html"
//   ],
// "transform": {
//   "^.+\\.jsx?$": "babel-jest"
// }
export default {
	collectCoverage: true,
	coverageReporters: ["json", "html"],
	transform: {
		"^.+\\.jsx?$": "babel-jest",
	},
	testMatch: ["**/__tests__/**/*.js?(x)", "**/?(*.)+(spec|test).js?(x)"],
	moduleFileExtensions: ["js", "jsx"],
};
