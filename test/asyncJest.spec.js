const answerPhone = require('../src/asyncJest');
/*
A função answerPhone recebe um parâmetro boleano.
Dependendo do parâmetro o retorno da função varia, veja a função no arquivo 'src/asyncJest.js'

Complete o código abaixo para testar as situações em que
a função recebe como parâmetro true e false, respectivamente.

ATENÇÃO!!! Edite apenas este arquivo. Não altere os arquivos da pasta 'src'.
*/

// Referência, documentação do jest para auxílio.
// https://javascript.info/async-await - uso do try nos retornos assíncronos

describe('o retorno do telefonema', () => {
  test('atende', async () => {
    await expect(answerPhone(true)).resolves.toEqual('Oi!');
  });

  test('ocupado', async () => {
    try {
      await expect(answerPhone(false));
    } catch (err) {
      alert(err);
    }
  });
});
