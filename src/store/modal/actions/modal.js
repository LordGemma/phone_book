import { 
  showModal as showModalSelector,
  hideModal as hideModalSelector,
} from "../actionTypes";

import { fetchUserData } from '../../../services/users';

export const showModal = () => {
  return dispatch => {
    dispatch(showModalSelector());
  };
}

export const hideModal = () => {
  return dispatch => {
    dispatch(hideModalSelector());
  };
}