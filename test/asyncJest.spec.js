const answerPhone = require('../src/asyncJest');

describe('o retorno do telefonema', () => {
  test('atende', () => {
    // Insira seu teste assíncrono aqui
    expect.assertions(1);
    return answerPhone(true).then((recebida) => {
      expect(recebida).toBe('Oi!');
    });
  });
  test('ocupado', () => {
    // Insira seu teste assíncrono aqui
    expect.assertions(1);
    return expect(answerPhone(false)).rejects
      .toEqual(new Error('Infelizmente não podemos atender...'));
  });
});
