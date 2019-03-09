const TYPES = {
  MENU: 'MENU',
};

const initialState = {
  menu: false,
};

export const reducer = (state = initialState, { type }) => {
  switch (type) {
    case TYPES.MENU:
      return {
        ...state,
        menu: !state.menu,
      };
    default:
      return state;
  }
};

export const toggleMenu = () => ({ type: TYPES.MENU });
