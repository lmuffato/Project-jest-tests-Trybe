// const assert = require('assert');
const answerPhone = require('../src/asyncJest');
/*
A função answerPhone recebe um parâmetro boleano.
Dependendo do parâmetro o retorno da função varia, veja a função no arquivo 'src/asyncJest.js'

Complete o código abaixo para testar as situações em que
a função recebe como parâmetro true e false, respectivamente.

ATENÇÃO!!! Edite apenas este arquivo. Não altere os arquivos da pasta 'src'.
*/
// código feito baseado na documentação do Jest, das aulas da turma 8 e 7 com os professores Oliva e Gustavo Caetano e do Pull Request do Vitor Canto

describe('o retorno do telefonema', () => {
  it('deveria retornar o atendimento oi', async () => {
    expect(answerPhone(true)).resolves.toBe('Oi!');
  });
  it('deveria retornar um erro', async () => {
    expect(answerPhone(false)).rejects
      .toThrow('Infelizmente não podemos atender...');
  });
});
