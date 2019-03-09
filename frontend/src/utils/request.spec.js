import client from './request';

describe('Request client', () => {
  it('returns a correct data', () => {
    return client.get('/categories').then(success => {
      expect(Object.keys(success.data)).toContain('categories');
    });
  });
});
