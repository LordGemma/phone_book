import { 
  showModal as showModalSelector,
  hideModal as hideModalSelector,
} from "../actionTypes";

import { fetchUserData } from '../../../services/users';

export const showModal = isEditMode => {
  return dispatch => {
    dispatch(showModalSelector(isEditMode));
  };
}

export const hideModal = () => {
  return dispatch => {
    dispatch(hideModalSelector());
  };
}