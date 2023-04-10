import getData from '../../utils/getData';

describe('Fetch API', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });
  test('Llamar una api y retornar datos', () => {
    fetch.mockResponseOnce(JSON.stringify({ data: '12345' }));
    // prettier-ignore
    getData('https://rickandmortyapi.com/api/character/1').then((response) => {
      console.log(response)
      expect(response.data).toEqual('12345');
    });
    expect(fetch.mock.calls[0][0]).toEqual(
      'https://rickandmortyapi.com/api/character/1',
    );
  });
});
