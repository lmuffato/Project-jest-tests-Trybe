const answerPhone = require('../src/asyncJest');
/*
A função answerPhone recebe um parâmetro boleano.
Dependendo do parâmetro o retorno da função varia, veja a função no arquivo 'src/asyncJest.js'

Complete o código abaixo para testar as situações em que
a função recebe como parâmetro true e false, respectivamente.

ATENÇÃO!!! Edite apenas este arquivo. Não altere os arquivos da pasta 'src'.
*/
// requisito realizado com ajuda de Iago Ferraira
describe('o retorno do telefonema', () => {
  answerPhone.answerPhone = jest.fn();
  test('atende', () => {
    answerPhone.answerPhone.mockResolvedValue('Oi!');
    expect(answerPhone.answerPhone()).resolves.toBe('Oi!');
    expect(answerPhone.answerPhone).toHaveBeenCalled();
  });

  test('ocupado', () => {
    answerPhone.answerPhone.mockReset();
    answerPhone.answerPhone.mockRejectedValue('Infelizmente não podemos atender...');
    expect(answerPhone.answerPhone()).rejects.toBe('Infelizmente não podemos atender...');
    expect(answerPhone.answerPhone).toHaveBeenCalledTimes(1);
  });
});
