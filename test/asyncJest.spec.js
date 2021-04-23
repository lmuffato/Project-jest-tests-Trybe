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
  test('atende, usando resolves', () => {
    expect.assertions(1);
    return expect(answerPhone(true)).resolves.toEqual('Oi!');
  });

  test('atende, usando resolves e async/await', async () => {
    expect.assertions(1);
    await expect(answerPhone(true)).resolves.toEqual('Oi!');
  });

  test('atende, usando then', () => {
    expect.assertions(1);
    return answerPhone(true).then((response) => {
      expect(response).toEqual('Oi!');
    });
  });

  test('atende, usando async/await', async () => {
    expect.assertions(1);
    const response = await answerPhone(true);
    expect(response).toEqual('Oi!');
  });

  const messageError = 'Infelizmente não podemos atender...';

  test('ocupado, usando rejects', () => {
    expect.assertions(1);
    return expect(answerPhone(false)).rejects
      .toEqual(new Error(messageError));
  });

  test('ocupado, usando rejects e async/await', async () => {
    expect.assertions(1);
    await expect(answerPhone(false)).rejects
      .toEqual(new Error(messageError));
  });

  test('ocupado, usando catch', () => {
    expect.assertions(1);
    return answerPhone(false).catch((error) => {
      expect(error)
        .toEqual(new Error(messageError));
    });
  });

  test('ocupado, usando async/await', async () => {
    expect.assertions(1);
    try {
      await answerPhone(false);
    } catch (error) {
      expect(error)
        .toEqual(new Error(messageError));
    }
  });
});
