const answerPhone = require('../src/asyncJest');
/*
A função answerPhone recebe um parâmetro boleano.
Dependendo do parâmetro o retorno da função varia, veja a função no arquivo 'src/asyncJest.js'

Complete o código abaixo para testar as situações em que
a função recebe como parâmetro true e false, respectivamente.

ATENÇÃO!!! Edite apenas este arquivo. Não altere os arquivos da pasta 'src'.
*/

describe('Testes sobre a chamada', () => {
  it('Chamada atendida (True)', async () => {
    const data = await answerPhone(true);
    expect(data).toBe('Oi!');
  });
  it('Chamada ocupada (False)', async () => {
    try {
      await answerPhone(false);
    } catch (error) {
      expect(error).toEqual(Error('Infelizmente não podemos atender...'));
    }
  });
});

// OBSERVAÇÕES:
// Revisei as aulas gravadas do course e esse
// link: https://jestjs.io/pt-BR/docs/asynchronous
// para e entender como o Jest funciona e fazer os requisitos.
// (26/04/2021) - Decidi refazer o exercício depois de assistir as aulas.
