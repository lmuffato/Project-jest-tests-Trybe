// const assert = require('assert');
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
// Utilizei o conteúdo do corse e esse link: https://jestjs.io/pt-BR/docs/asynchronous
// para fazer e entender como esse teste funciona.

// 13 - Descrição sobre o teste
// 14 - Nome do teste + dizendo que o teste é assíncrono
// 15 - Guarda dentro da constante a espera "true" da função
// 16 - Mostra o esperado e compara se é igual ao que a função retorna
// 18 - Nome do teste + dizendo que o teste é assíncrono
// 19 - Abre um novo bloco de código para o erro
// 20 - Aguarda para saber se a resposta da função é "false"
// 21 - Capitura o erro informado pela função
// 22 - Mostra o esperado e compara se é igual ao erro que a função retorna
