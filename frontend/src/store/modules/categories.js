const TYPES = {
  GET_CATEGORIES: 'GET_CATEGORIES',
  GET_CATEGORIES_SUCCESS: 'GET_CATEGORIES_SUCCESS',
  GET_CATEGORIES_ERROR: 'GET_CATEGORIES_ERROR',
};

const initialState = {
  categoriesList: [],
  loaded: false,
  error: false,
};

export const reducer = (state = initialState, { type, result }) => {
  switch (type) {
    case TYPES.GET_CATEGORIES:
      return {
        ...state,
      };
    case TYPES.GET_CATEGORIES_SUCCESS:
      return {
        ...state,
        loaded: true,
        categoriesList: [...result.data.categories],
      };
    case TYPES.GET_CATEGORIES_ERROR:
      return {
        ...state,
        loaded: false,
        error: true,
      };
    default:
      return state;
  }
};

export const getCategories = () => ({
  types: [TYPES.GET_CATEGORIES, TYPES.GET_CATEGORIES_SUCCESS, TYPES.GET_CATEGORIES_ERROR],
  promise: client => client.get('/categories'),
});
