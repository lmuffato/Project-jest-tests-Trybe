const answerPhone = require('../src/asyncJest');

describe('o retorno do telefonema', () => {
  test('atende', () => {
    // Insira seu teste assíncrono aqui
    answerPhone(true).then((recebida) =>
      expect(recebida).toEqual('Oi!'));
  });
  test('ocupado', () => {
    // Insira seu teste assíncrono aqui
    answerPhone(false).catch((nrecebida) =>
      expect(nrecebida).toEqual('Infelizmente não podemos atender...'));
  });
});
