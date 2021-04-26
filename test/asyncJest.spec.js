// const assert = require('assert');

const answerPhone = require('../src/asyncJest');
/*
A função answerPhone recebe um parâmetro boleano.
Dependendo do parâmetro o retorno da função varia, veja a função no arquivo 'src/asyncJest.js'

Complete o código abaixo para testar as situações em que
a função recebe como parâmetro true e false, respectivamente.

ATENÇÃO!!! Edite apenas este arquivo. Não altere osgit sa arquivos da pasta 'src'.
*/

describe('o retorno do telefonema', () => {
  test('atende', async () => {
    await expect(answerPhone(true)).resolves.toEqual('Oi!');
  });
  test('ocupado', () => {
    expect.assertions(1);
    return answerPhone().catch((data) => {
      expect(answerPhone(false)).rejects.toEqual(data);
    }); // aula do course 10.2 -> matcher .resolves / rejects.
  });
});
