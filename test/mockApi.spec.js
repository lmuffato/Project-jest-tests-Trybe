const api = require('../src/mockApi');

/*
A função fetchURL retorna um JSON com informações de um usuário aleatório buscadas da API 'randomuser.me'.
No entanto, nos testes abaixo, queremos que todas as vezes que chamarmos a API a resposta contenha as informações do nosso adminis..Cof! Cof!.. programador favorito, Tunicão.

Faça um mock da função fetchURL() de forma que,
independa de chamadas de API e retorne as seguintes informações do Tunico:
- Gênero: Masculino
- Primeiro nome: Antônio
- Último nome: Britto
- País: Brasil
- Email: tunico@bol.com.br (Sim, é um email do bol mesmo...)
- Nome de usuário: tunicao123
- Senha: 1234567890 (Usem senhas fortes, crianças!)

Note que as informações devem estar de acordo com o JSON
presente no README.md do projeto.

Dica: Utilizem os métodos jest.fn() ou jest.spyOn().

ATENÇÃO!!! Edite apenas este arquivo. Não altere os arquivos da pasta 'src'.
*/

describe('verifica o usuário', () => {
  const mockedJson = {
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

  const spyFetch = jest.spyOn(api, 'fetchURL');

  test('verifica se o usuário é o tunico', async () => {
    spyFetch.mockResolvedValue(mockedJson);
    expect(mockedJson.gender).toEqual('male');
    expect(mockedJson.name.first).toEqual('Antônio');
    expect(mockedJson.name.last).toEqual('Britto');
    expect(mockedJson.location.country).toEqual('Brazil');
    expect(mockedJson.email).toEqual('tunico@bol.com.br');
    expect(mockedJson.login.username).toEqual('tunicao123');
    expect(mockedJson.login.password).toEqual('1234567890');
  });
});
