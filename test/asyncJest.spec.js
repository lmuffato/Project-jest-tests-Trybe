const answerPhone = require('../src/asyncJest');
/*
A função answerPhone recebe um parâmetro boleano.
Dependendo do parâmetro o retorno da função varia, veja a função no arquivo 'src/asyncJest.js'

Complete o código abaixo para testar as situações em que
a função recebe como parâmetro true e false, respectivamente.

ATENÇÃO!!! Edite apenas este arquivo. Não altere os arquivos da pasta 'src'.
*/

describe('o retorno do telefonema', () => {
  test('A chamada foi atendida', async () => {
    const chamadaAtendida = await answerPhone(true);
    expect(chamadaAtendida).toBe('Oi!');
  });
  test('A chamada está ocupada', async () => {
    try {
      await answerPhone(false);
    } catch (error) {
      expect(error).toEqual(Error('Infelizmente não podemos atender...'));
    }
  });
});

// OBSERVAÇÕES:
// Utilizei o conteúdo do course e esse link: https://jestjs.io/pt-BR/docs/asynchronous
// para fazer e entender como esse teste funciona.

// Vou deixar comentado por linha para servir como
// minha própria fonte de pesquisa em projetos futuros!

// 12 - Descrição sobre o teste
// 13 - Nome do teste + dizendo que o teste é assíncrono
// 14 - Guarda dentro da constante a espera "true" da função
// 15 - Mostra o esperado e compara se é igual ao que a função retorna
// 17 - Nome do teste + dizendo que o teste é assíncrono
// 18 - Abre um novo bloco de código relacionado ao caso de erro
// 19 - Aguarda para saber se a resposta da função é "false"
// 20 - Captura o erro informado pela função (New Error)
// 21 - Mostra o esperado e compara se é igual ao "New Error" que a função retorna
// Demais linhas são apenas o fechamento de } e ) nas funções
