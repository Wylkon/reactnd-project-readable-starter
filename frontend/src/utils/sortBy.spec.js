import { sortPosts } from './sortBy';

const mockPosts = [
  {
    id: '1',
    timestamp: 1467166872634,
    voteScore: 6,
  },
  {
    id: '2',
    timestamp: 1468479767190,
    voteScore: 0,
  },
  {
    id: '3',
    timestamp: 1317826080000,
    voteScore: 1,
  },
  {
    id: '4',
    timestamp: 1570286880000,
    voteScore: -10,
  },
];

describe('SortPosts', () => {
  const expectedScore = [
    { id: '1', timestamp: 1467166872634, voteScore: 6 },
    { id: '3', timestamp: 1317826080000, voteScore: 1 },
    { id: '2', timestamp: 1468479767190, voteScore: 0 },
    { id: '4', timestamp: 1570286880000, voteScore: -10 },
  ];

  const expectedDate = [
    { id: '4', timestamp: 1570286880000, voteScore: -10 },
    { id: '2', timestamp: 1468479767190, voteScore: 0 },
    { id: '1', timestamp: 1467166872634, voteScore: 6 },
    { id: '3', timestamp: 1317826080000, voteScore: 1 },
  ];

  it('returns a correct array sorted by best score', () => {
    expect(sortPosts(mockPosts, 'best')).toEqual(expectedScore);
  });

  it('returns a correct array sorted by newer post', () => {
    expect(sortPosts(mockPosts, 'new')).toEqual(expectedDate);
  });
});
