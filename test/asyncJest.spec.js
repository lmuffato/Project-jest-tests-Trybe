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
    const answer = await answerPhone(true);
    expect(answer).toEqual('Oi!');
  });
  test('ocupado', () => {
    expect.assertions(1);

    return expect(answerPhone(false))
      .rejects.toEqual(new Error('Infelizmente não podemos atender...'));
  });
  // Insira seu teste assíncrono aqui
});

// test('Testando com async/await, testando o reject', async () => {
//   try {
//     await getListAnimals('Lion');
//   } catch (error) {
//     expect(error).toEqual({ error: "Não possui esse tipo de animal." })
//   }
// });
