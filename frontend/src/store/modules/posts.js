import { uniqueId } from 'utils/uniqueId';

const TYPES = {
  GET_POSTS: 'GET_POSTS',
  GET_POSTS_SUCCESS: 'GET_POSTS_SUCCESS',
  GET_POSTS_ERROR: 'GET_POSTS_ERROR',
  SUBMIT_POST: 'SUBMIT_POST',
  SUBMIT_POST_SUCCESS: 'SUBMIT_POST_SUCCESS',
  SUBMIT_POST_ERROR: 'SUBMIT_POST_ERROR',
};

const initialState = {
  posts: {},
  loaded: false,
  error: false,
};

export const reducer = (state = initialState, { type, result, category }) => {
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
    default:
      return state;
  }
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
