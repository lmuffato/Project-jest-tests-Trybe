const assert = require('assert');
const answerPhone = require('../src/asyncJest');

const expectAnswers = ['Oi!', 'Infelizmente não podemos atender...'];
const [resolved, rejected] = expectAnswers;

describe('o retorno do telefonema', () => {
  test('atende', () => {
    answerPhone(true).then((response) => assert.strictEqual(response, resolved));
  });
  test('ocupado', () => {
    answerPhone(false).then((response) => assert.strictEqual(response, rejected))
      .catch((err) => err);
  });
});
