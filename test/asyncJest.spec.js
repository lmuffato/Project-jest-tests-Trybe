// const assert = require('assert');
const answerPhone = require('../src/asyncJest');
/*
A função answerPhone recebe um parâmetro boleano.
Dependendo do parâmetro o retorno da função varia, veja a função no arquivo 'src/asyncJest.js'

Complete o código abaixo para testar as situações em que
a função recebe como parâmetro true e false, respectivamente.

ATENÇÃO!!! Edite apenas este arquivo. Não altere os arquivos da pasta 'src'.
*/

// baseado em https://jestjs.io/pt-BR/docs/asynchronous
describe('o retorno do telefonema', () => {
  test('atende', () => expect(answerPhone('Oi!')).resolves.toBe('Oi!'));

  test('ocupado', () => expect(answerPhone())
    .rejects.toThrow('Infelizmente não podemos atender...'));
});
