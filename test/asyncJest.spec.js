const assert = require('assert');
const answerPhone = require('../src/asyncJest');

describe('o retorno do telefonema', () => {

  test('atende', async () => {
    const test = await answerPhone(true);
    expect(test).toEqual('oi');
  });

  test('ocupado', () => {
    expect.assertions(1);
    return expect(answerPhone(false))
      .rejects.toEqual(new Error('Infelizmente não podemos atender...'));
  });
});
