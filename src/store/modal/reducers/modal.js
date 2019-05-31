import {
  SHOW_MODAL,
  HIDE_MODAL,
} from '../actionTypes';

const initialState = {
  isVisible: false,
};

export const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_MODAL:
      return {
        ...state,
        isVisible: true,
      };
    case HIDE_MODAL:
      return {
        ...state,
        isVisible: false,
      };
    default:
      return state;
  }
};