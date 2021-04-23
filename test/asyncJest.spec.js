const assert = require('assert');
const answerPhone = require('../src/asyncJest');
/*
A função answerPhone recebe um parâmetro boleano.
Dependendo do parâmetro o retorno da função varia, veja a função no arquivo 'src/asyncJest.js'

Complete o código abaixo para testar as situações em que
a função recebe como parâmetro true e false, respectivamente.

ATENÇÃO!!! Edite apenas este arquivo. Não altere os arquivos da pasta 'src'.
*/

describe('o retorno do telefonema', () => {
  test('atende', async () => {
    const expectativa = 'Oi!';
    const retorno = await answerPhone(true);
    expect(retorno).toBe(expectativa);
  });
  test('ocupado', async () => {
    const expectativa = 'Infelizmente não podemos atender...';
    try {
      await answerPhone();
    } catch (reject) {
      expect(reject.message).toBe(expectativa);
    }
  });
});
