const TYPES = {
  MENU: 'MENU',
  POST_MODAL: 'POST_MODAL',
  COMMENT_MODAL: 'COMMENT_MODAL',
};

const initialState = {
  menu: false,
  modalPost: false,
  modalComment: false,
  currentComent: {},
};

export const reducer = (state = initialState, { type, comment }) => {
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
    case TYPES.COMMENT_MODAL:
      return {
        ...initialState,
        modalComment: !state.modalComment,
        currentComent: comment,
      };
    default:
      return state;
  }
};

export const toggleMenu = () => ({ type: TYPES.MENU });
export const toggleModalPost = () => ({ type: TYPES.POST_MODAL });
export const toggleModalComment = comment => ({ type: TYPES.COMMENT_MODAL, comment });
