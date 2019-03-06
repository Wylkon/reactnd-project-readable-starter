const TYPES = {
  EXAMPLE: 'EXAMPLE',
};

const initialState = {
  example: '',
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
  case TYPES.EXAMPLE:
    return {
      ...state,
      example: payload,
    };
  default:
    return state;
  }
};

export const example = payload => ({ type: TYPES.EXAMPLE, payload });
