// const assert = require('assert');
const answerPhone = require('../src/asyncJest');
/*
A função answerPhone recebe um parâmetro boleano.
Dependendo do parâmetro o retorno da função varia, veja a função no arquivo 'src/asyncJest.js'

Complete o código abaixo para testar as situações em que
a função recebe como parâmetro true e false, respectivamente.

ATENÇÃO!!! Edite apenas este arquivo. Não altere os arquivos da pasta 'src'.
*/

// Referência: https://github.com/tryber/sd-10a-live-lectures/pulls  -> branch 10.3 - Jest - Simulando comportamentos -> linhas: 136 ~ 145
// Arquivo: revisao-aula-anterior.md, do Jensen.
// Referência para o toThrow: https://medium.com/@afolabiwaheed/how-to-test-a-function-thats-expected-to-throw-error-in-jest-2419cc7c6462

describe('o retorno do telefonema', () => {
  test('atende', async () => {
    // assert.fail();
    // Insira seu teste assíncrono aqui
    expect.assertions(1);

    await expect(answerPhone(true)).resolves.toBe('Oi!');
  });
  test('ocupado', async () => {
    // assert.fail();
    // Insira seu teste assíncrono aqui
    expect.assertions(1);

    await expect(answerPhone(false)).rejects.toThrow('Infelizmente não podemos atender...');
  });
});
