// const assert = require('assert');
// const answerPhone = require('../src/asyncJest');
/*
A função answerPhone recebe um parâmetro boleano.
Dependendo do parâmetro o retorno da função varia, veja a função no arquivo 'src/asyncJest.js'

Complete o código abaixo para testar as situações em que
a função recebe como parâmetro true e false, respectivamente.

ATENÇÃO!!! Edite apenas este arquivo. Não altere os arquivos da pasta 'src'.
*/

const answerPhone = require('../src/asyncJest');

// código consertado após ver código
// do Adelino - https://github.com/tryber/sd-010-a-project-jest/pull/76
describe('o retorno do telefonema', () => {
  test('atende', () => {
    expect.assertions(1);
    return answerPhone(true).then((answer) => {
      expect(answer).toEqual('Oi!');
    });
  });
  test('ocupado', () => {
    expect.assertions(1);
    return expect(answerPhone(false)).rejects
      .toEqual(new Error('Infelizmente não podemos atender...'));
  });
});
