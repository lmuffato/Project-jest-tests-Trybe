const answerPhone = require('../src/asyncJest');
/*
A função answerPhone recebe um parâmetro boleano.
Dependendo do parâmetro o retorno da função varia, veja a função no arquivo 'src/asyncJest.js'

Complete o código abaixo para testar as situações em que
a função recebe como parâmetro true e false, respectivamente.

ATENÇÃO!!! Edite apenas este arquivo. Não altere os arquivos da pasta 'src'.
*/

describe('o retorno do telefonema', () => {
  test('atende', async () => { // turns function into async
    const apiAnswer = await answerPhone('alo'); // waits for it's answer
    expect(apiAnswer).toEqual('Oi!');
  });
  test('ocupado', async () => { // turns fn into async
    expect.assertions(1);
    try { // call function
      await answerPhone(); // waits for it's answer
    } catch (error) { // catchs error
      expect(error).toEqual(new Error('Infelizmente não podemos atender...'));
    }
  });
});
