const TYPES = {
  GET_POST: 'GET_POST',
  GET_POST_SUCCESS: 'GET_POST_SUCCESS',
  GET_POST_ERROR: 'GET_POST_ERROR',
};

const initialState = {
  data: [],
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
    default:
      return state;
  }
};

export const getPost = id => ({
  types: [TYPES.GET_POST, TYPES.GET_POST_SUCCESS, TYPES.GET_POST_ERROR],
  promise: client => client.get(`/posts/${id}`),
});
