/**
 * Andrey: Controller local/func'ão onde sera feita toda a manipulação/tratamento de dados.
 *  Já na router é onde você passara o caminho/url onde tal tratamento/manipulação sera
 * executada
 */
import { bancoDeLivros } from "../data/bancoDeDados.js";

export const pegaTodosOslivros = (requisicao, resposta) => {
	//Nossa funçao fará apenas uma coisa, entregar todos os livros
	resposta.json(bancoDeLivros);
};
