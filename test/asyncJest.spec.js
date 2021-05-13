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
  test('atende', () => {
    return answerPhone(true).then((r) => {
      expect(r).toEqual('Oi!');
    });
  });
  test('ocupado', () => {
    return answerPhone(false).catch((err) => {
      expect(err).toEqual(new Error('Infelizmente não podemos atender...'));
    });
  });
});
