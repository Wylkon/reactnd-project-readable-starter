const TYPES = {
  GET_CATEGORIES: 'GET_CATEGORIES',
  GET_CATEGORIES_SUCCESS: 'GET_CATEGORIES_SUCCESS',
  GET_CATEGORIES_ERROR: 'GET_CATEGORIES_ERROR',
};

const initialState = {
  categoriesList: [],
  loaded: false,
  loading: false,
  error: false,
};

export const reducer = (state = initialState, { type, result }) => {
  switch (type) {
    case TYPES.GET_CATEGORIES:
      return {
        ...state,
        loading: true,
      };
    case TYPES.GET_CATEGORIES_SUCCESS:
      return {
        ...state,
        loaded: true,
        loading: false,
        categoriesList: [...result.data.categories],
      };
    case TYPES.GET_CATEGORIES_ERROR:
      return {
        ...state,
        loaded: false,
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};

// Actions Creators
function load() {
  return {
    types: [TYPES.GET_CATEGORIES, TYPES.GET_CATEGORIES_SUCCESS, TYPES.GET_CATEGORIES_ERROR],
    promise: client => client.get('/categories'),
  };
}

function shouldFetch(state) {
  return state.categories.loading ? false : state.categories.categoriesList.length ? false : true;
}

// Método responsável pelo dispatch das actions de requisição
export function receive() {
  return (dispatch, getState) => {
    if (shouldFetch(getState())) {
      return dispatch(load());
    }
  };
}
