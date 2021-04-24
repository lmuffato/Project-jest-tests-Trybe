const adventure = require('../src/setupTeardown');

describe('quem sobreviveu?', () => {
  beforeEach(() => adventure.randomAttack());
  afterEach(() => console.table(adventure.specialists));
  afterAll(() => console.log(`O aventureiro ${adventure.specialists[0].nome} sobreviveu! 
Fs in the chat for the fallen heroes`));
  it('depois da primeira aventura', () => {
    expect(adventure.specialists.length).toBe(5);
  });
  it('depois da segunda aventura', () => {
    expect(adventure.specialists.length).toBe(4);
  });
  it('depois da terceira aventura', () => {
    expect(adventure.specialists.length).toBe(3);
  });
  it('depois da quarta aventura', () => {
    expect(adventure.specialists.length).toBe(2);
  });
  it('depois da quinta aventura', () => {
    expect(adventure.specialists.length).toBe(1);
  });
});
