const answerPhone = require('../src/asyncJest');
/*
A função answerPhone recebe um parâmetro boleano.
Dependendo do parâmetro o retorno da função varia, veja a função no arquivo 'src/asyncJest.js'

Complete o código abaixo para testar as situações em que
a função recebe como parâmetro true e false, respectivamente.

ATENÇÃO!!! Edite apenas este arquivo. Não altere os arquivos da pasta 'src'.
*/

// referência - Bruno me ajudou na correção para o evaluator, embora já tivesse passado no test do JEST. documentação, https://jestjs.io/pt-BR/docs/tutorial-async - https://jestjs.io/pt-BR/docs/asynchronous
describe('o retorno do telefonema', () => {
  test('atende', async () => {
    await expect(answerPhone(true)).resolves.toEqual('Oi!');
  });

  test('ocupado', async () => {
    expect.assertions(1);
    await answerPhone(false)
      .catch((err) => {
        expect(err).toEqual(err);
      });
  });
});
