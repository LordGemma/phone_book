import {
  SHOW_MODAL,
  HIDE_MODAL,
} from '../actionTypes';

const initialState = {
  isVisible: false,
  isEditMode: false,
};

export const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_MODAL:
      return {
        ...state,
        isVisible: true,
        isEditMode: action.payload.isEditMode,
      };
    case HIDE_MODAL:
      return {
        ...state,
        isVisible: false,
        isEditMode: false,
      };
    default:
      return state;
  }
};