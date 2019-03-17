const compareByScore = (a, b) => {
  return b.voteScore - a.voteScore;
};

const compareByDate = (a, b) => {
  if (b.timestamp < a.timestamp) return -1;
  if (b.timestamp > a.timestamp) return 1;
  return 0;
};

export const sortPosts = (arr = [], order) => {
  return arr.sort(order === 'best' ? compareByScore : compareByDate);
};
