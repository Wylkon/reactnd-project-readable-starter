import { uniqueId } from 'utils/uniqueId';
import { uniqBy } from 'lodash';

const TYPES = {
  GET_POSTS: 'GET_POSTS',
  GET_POSTS_SUCCESS: 'GET_POSTS_SUCCESS',
  GET_POSTS_ERROR: 'GET_POSTS_ERROR',
  SUBMIT_POST: 'SUBMIT_POST',
  SUBMIT_POST_SUCCESS: 'SUBMIT_POST_SUCCESS',
  SUBMIT_POST_ERROR: 'SUBMIT_POST_ERROR',
  VOTE: 'VOTE',
  VOTE_SUCCESS: 'VOTE_SUCCESS',
  VOTE_ERROR: 'VOTE_ERROR',
  REMOVE: 'REMOVE',
  REMOVE_SUCCESS: 'REMOVE_SUCCESS',
  REMOVE_ERROR: 'REMOVE_ERROR',
};

const initialState = {
  posts: {},
  loaded: false,
  error: false,
};

export const reducer = (state = initialState, { type, result, category, id, vote }) => {
  switch (type) {
    case TYPES.GET_POSTS:
      return {
        ...state,
        loaded: false,
      };
    case TYPES.GET_POSTS_SUCCESS:
      return {
        ...state,
        loaded: true,
        posts: {
          ...state.posts,
          [category]: [...result.data],
        },
      };
    case TYPES.GET_POSTS_ERROR:
      return {
        ...state,
        loaded: false,
        error: true,
      };
    case TYPES.SUBMIT_POST:
      return {
        ...state,
        loaded: false,
      };
    case TYPES.SUBMIT_POST_SUCCESS:
      return {
        ...state,
        loaded: true,
        posts: {
          ...state.posts,
          [category]: state.posts[category].concat(result.data),
        },
      };
    case TYPES.SUBMIT_POST_ERROR:
      return {
        ...state,
        loaded: false,
        error: true,
      };
    case TYPES.VOTE:
      return {
        ...state,
        posts: {
          ...state.posts,
          [category]: votedPost(state.posts[category], vote, id),
        },
      };
    case TYPES.VOTE_SUCCESS:
      return {
        ...state,
      };
    case TYPES.VOTE_ERROR:
      return {
        ...state,
        [category]: votedPost(state.posts[category], vote === 'upVote' ? 'downVote' : 'upVote', id),
      };
    case TYPES.REMOVE:
      return {
        ...state,
      };
    case TYPES.REMOVE_SUCCESS:
      return {
        ...state,
        success: true,
      };
    case TYPES.REMOVE_ERROR:
      return {
        ...state,
      };
    default:
      return state;
  }
};

const actualVote = vote => {
  return vote === 'upVote' ? 1 : -1;
};

const votedPost = (arr, vote, id) => {
  const currentPost = arr.filter(post => post.id === id)[0];
  const voted = [{ ...currentPost, ...{ voteScore: currentPost.voteScore + actualVote(vote) } }];

  return uniqBy([...voted, ...arr], 'id');
};

export const getPosts = (category = 'all') => ({
  types: [TYPES.GET_POSTS, TYPES.GET_POSTS_SUCCESS, TYPES.GET_POSTS_ERROR],
  promise: client => client.get(category === 'all' ? '/posts' : `/${category}/posts`),
  category: category,
});

export const submitPost = (values, currentCategory = 'all') => {
  const postValues = {
    ...values,
    timestamp: Date.parse(new Date()),
    id: uniqueId(),
  };

  return {
    types: [TYPES.SUBMIT_POST, TYPES.SUBMIT_POST_SUCCESS, TYPES.SUBMIT_POST_ERROR],
    promise: client => client.post('/posts', { ...postValues }),
    category: currentCategory,
  };
};

export const vote = (id, vote, currentCategory = 'all') => ({
  types: [TYPES.VOTE, TYPES.VOTE_SUCCESS, TYPES.VOTE_ERROR],
  promise: client => client.post(`/posts/${id}`, { option: vote }),
  category: currentCategory,
  vote,
  id,
});

export const removePost = id => ({
  types: [TYPES.REMOVE, TYPES.REMOVE_SUCCESS, TYPES.REMOVE_ERROR],
  promise: client => client.delete(`/posts/${id}`),
});
