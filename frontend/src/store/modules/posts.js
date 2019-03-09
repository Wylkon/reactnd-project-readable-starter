const TYPES = {
  GET_POSTS: 'GET_POSTS',
  GET_POSTS_SUCCESS: 'GET_POSTS_SUCCESS',
  GET_POSTS_ERROR: 'GET_POSTS_ERROR',
};

const initialState = {
  data: [],
  loaded: false,
  error: false,
};

export const reducer = (state = initialState, { type, result }) => {
  switch (type) {
    case TYPES.GET_POSTS:
      return {
        ...state,
      };
    case TYPES.GET_POSTS_SUCCESS:
      return {
        ...state,
        loaded: true,
        data: [...result.data],
      };
    case TYPES.GET_POSTS_ERROR:
      return {
        ...state,
        loaded: false,
        error: true,
      };
    default:
      return state;
  }
};

export const getPosts = () => ({
  types: [TYPES.GET_POSTS, TYPES.GET_POSTS_SUCCESS, TYPES.GET_POSTS_ERROR],
  promise: client => client.get('/posts'),
});
