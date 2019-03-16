const TYPES = {
  GET_POST: 'GET_POST',
  GET_POST_SUCCESS: 'GET_POST_SUCCESS',
  GET_POST_ERROR: 'GET_POST_ERROR',
  GET_COMMENTS: 'GET_COMMENTS',
  GET_COMMENTS_SUCCESS: 'GET_COMMENTS_SUCCESS',
  GET_COMMENTS_ERROR: 'GET_COMMENTS_ERROR',
};

const initialState = {
  data: {},
  comments: [],
  loaded: false,
  error: false,
};

export const reducer = (state = initialState, { type, result }) => {
  switch (type) {
    case TYPES.GET_POST:
      return {
        ...state,
      };
    case TYPES.GET_POST_SUCCESS:
      return {
        ...state,
        loaded: true,
        data: result.data,
      };
    case TYPES.GET_POST_ERROR:
      return {
        ...state,
        loaded: false,
        error: true,
      };
    case TYPES.GET_COMMENTS:
      return {
        ...state,
      };
    case TYPES.GET_COMMENTS_SUCCESS:
      return {
        ...state,
        loaded: true,
        comments: [...result.data],
      };
    case TYPES.GET_COMMENTS_ERROR:
      return {
        ...state,
        loaded: false,
        error: true,
      };
    default:
      return state;
  }
};

export const getPost = id => ({
  types: [TYPES.GET_POST, TYPES.GET_POST_SUCCESS, TYPES.GET_POST_ERROR],
  promise: client => client.get(`/posts/${id}`),
});

export const getComments = id => ({
  types: [TYPES.GET_COMMENTS, TYPES.GET_COMMENTS_SUCCESS, TYPES.GET_COMMENTS_ERROR],
  promise: client => client.get(`/posts/${id}/comments`),
});
