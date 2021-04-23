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
  test('atende', async () => {
    // Insira seu teste assíncrono aqui
    await expect(answerPhone(true)).resolves.toBe('Oi!');
  });
  test('ocupado', async () => {
    // Insira seu teste assíncrono aqui
    await expect(answerPhone(false)).rejects
      .toThrow();
    await expect(answerPhone(false)).rejects
      .toThrowError(new Error('Infelizmente não podemos atender...'));
  });
});

// Utilizei esses dois links para um entendimento mais completo da utilização do toThrow e toThrowError ''https://github.com/facebook/jest/issues/781'', ''https://jestjs.io/docs/expect#tothrowerror'';
