const answerPhone = require('../src/asyncJest');
/*
A função answerPhone recebe um parâmetro boleano.
Dependendo do parâmetro o retorno da função varia, veja a função no arquivo 'src/asyncJest.js'

Complete o código abaixo para testar as situações em que
a função recebe como parâmetro true e false, respectivamente.

ATENÇÃO!!! Edite apenas este arquivo. Não altere os arquivos da pasta 'src'.
*/

describe('o retorno do telefonema', () => {
  test('atende', async () => {
    const atende = await answerPhone(true);
    expect.assertions(1);
    expect(atende).toBe('Oi!');
  });

  test('ocupado', async () => {
    const erro = 'Infelizmente não podemos atender...';
    const ocupado = await answerPhone(false).catch((error) => expect(error.message).toEqual(erro));
    expect.assertions(1);
    return ocupado;
  });
});

// 16 inseri async para informar que é uma função assincrona
// 17 criei uma variável "atende" que guarda o valor recebido pela função e inseri o
// await para informar uma espera.
// 18 informo a quantidade de expection no Teste
// 19 passo a variavel que guarda o valor da minha função e que está sendo
// comparado com o que o teste espera.

// 22 insiro async para informar que é uma função assincrona.
// 23 crie variavel para guardar a mensagem de erro que será comparado
// 24 criei variavel 'ocupado' que guarda  valor da função com um Boolean false, chamo
// o catch para capturar um erro, ele recebe  o parametro error o qual atribuo o message parametro
// que busca só a mensagem legivel para humanos e comparo com a const erro onde está guardado o
// valor da mensagem

// Encontrei sobre o (message) em pesquisa sobre Error no site
// :https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Error
