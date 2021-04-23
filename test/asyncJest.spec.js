const answerPhone = require('../src/asyncJest');
/*
A função answerPhone recebe um parâmetro boleano.
Dependendo do parâmetro o retorno da função varia, veja a função no arquivo 'src/asyncJest.js'

Complete o código abaixo para testar as situações em que
a função recebe como parâmetro true e false, respectivamente.

ATENÇÃO!!! Edite apenas este arquivo. Não altere os arquivos da pasta 'src'.
*/

// Source: https://github.com/tryber/sd-010-a-project-jest/blob/df6ec4f15d9f3a93ccfbf52daca301a96f247f0e/test/asyncJest.spec.js
describe('o retorno do telefonema', () => {
  test('atende', async () => {
    const answer = answerPhone(true);
    return answer.then((msg) => {
      expect(msg).toBe('Oi!');
    });
  });
  test('ocupado', () => {
    const ocupied = answerPhone(false);
    return ocupied.catch((err) => {
      expect(err).toBe(err);
    });
  });
});
