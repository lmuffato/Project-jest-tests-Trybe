const answerPhone = require('../src/asyncJest');

describe('o retorno do telefonema', () => {
  it('atende', () => {
    expect.assertions(1);
    return expect(answerPhone(true)).resolves.toEqual('Oi!');
  });
  it('ocupado', () => {
    expect.assertions(1);
    return expect(answerPhone()).rejects.toEqual(new Error('Infelizmente não podemos atender...'));
  });
});
