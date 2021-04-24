const adventure = require('../src/setupTeardown');

describe('quem sobreviveu?', () => {
  beforeEach(() => adventure.randomAttack());
  afterEach(() => console.table(adventure.specialists));
  afterAll(() => console.log(`O aventureiro ${adventure.specialists[0]} sobreviveu! 
Fs in the chat for the fallen heroes`));
  test('depois da primeira aventura', () => {
    expect(adventure.specialists.length).toBe(5);
  });
  test('depois da segunda aventura', () => {
    expect(adventure.specialists.length).toBe(4);
  });
  test('depois da terceira aventura', () => {
    expect(adventure.specialists.length).toBe(3);
  });
  test('depois da quarta aventura', () => {
    expect(adventure.specialists.length).toBe(2);
  });
  test('depois da quinta aventura', () => {
    expect(adventure.specialists.length).toBe(1);
  });
});
