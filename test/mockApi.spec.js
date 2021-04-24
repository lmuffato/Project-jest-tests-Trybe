const api = require('../src/mockApi');

const mockUser = {
  gender: 'male',
  name: {
    first: 'Antônio',
    last: 'Britto',
  },
  location: {
    country: 'Brazil',
  },
  email: 'tunico@bol.com.br',
  login: {
    username: 'tunicao123',
    password: '1234567890',
  },
};
const fetchMock = () => new Promise((resolve, reject) => {
  try {
    resolve(mockUser);
  } catch (error) {
    reject(error);
  }
});

describe('verifica o usuário', () => {
  api.fetchURL = jest.fn().mockImplementation(fetchMock);
  it('verifica se o usuário é o tunico', async () => (
    api.fetchURL().then((user) => {
      expect(user.gender).toEqual('male');
      expect(user.name.first).toEqual('Antônio');
      expect(user.name.last).toEqual('Britto');
      expect(user.location.country).toEqual('Brazil');
      expect(user.email).toEqual('tunico@bol.com.br');
      expect(user.login.username).toEqual('tunicao123');
      expect(user.login.password).toEqual('1234567890');
    })
  ));
});
