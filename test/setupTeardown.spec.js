const adventure = require('../src/setupTeardown');

describe('quem sobreviveu?', () => {
  // Adicione seu código aqui

  test('depois da primeira aventura', () => {
    adventure.randomAttack();
    expect(adventure.specialists.length).toBe(5);
  });
  test('depois da segunda aventura', () => {
    adventure.randomAttack();
    expect(adventure.specialists.length).toBe(4);
  });
  test('depois da terceira aventura', () => {
    adventure.randomAttack();
    expect(adventure.specialists.length).toBe(3);
  });
  test('depois da quarta aventura', () => {
    adventure.randomAttack();
    expect(adventure.specialists.length).toBe(2);
  });
  test('depois da quinta aventura', () => {
    adventure.randomAttack();
    expect(adventure.specialists.length).toBe(1);
  });
});
