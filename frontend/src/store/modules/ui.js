const TYPES = {
  MENU: 'MENU',
  POST_MODAL: 'POST_MODAL',
};

const initialState = {
  menu: false,
  modalPost: false,
};

export const reducer = (state = initialState, { type }) => {
  switch (type) {
    case TYPES.MENU:
      return {
        ...state,
        menu: !state.menu,
      };
    case TYPES.POST_MODAL:
      return {
        ...state,
        modalPost: !state.modalPost,
      };
    default:
      return state;
  }
};

export const toggleMenu = () => ({ type: TYPES.MENU });
export const toggleModalPost = () => ({ type: TYPES.POST_MODAL });
