import { 
  fetchAllUsers, 
  fetchUser, 
  deleteUser as deleteUserData,
  editUser as editUserData,
  addUser as addUserData,
} from "../actionTypes";

import { fetchUsersData, fetchUserData } from '../../../services/users';

import { getGuid } from '../../../utils/guid';

export const getAllUsers = () => {
  return dispatch => {
    fetchUsersData()
          .then ( ({ data }) => {
            dispatch(fetchAllUsers(data));
            dispatch(fetchUser(data[0]));
          } )
          .catch ( error => {
              console.log(error);
          } )
  };
}

export const getUser = (id) => {
  return dispatch => {
    fetchUserData(id)
          .then ( user => {
            dispatch(fetchUser(user));
          } )
          .catch ( error => {
              console.log(error);
          } )
  };
}

export const deleteUser = (id) => {
  return dispatch => {
    dispatch(deleteUserData(id));
  };
}

export const editUser = (userData) => {
  return dispatch => {
    dispatch(editUserData(userData));
  }
}

export const addUser = (userData) => {
  const newUser = {
    ...userData,
    id: getGuid,
    avatar: 'http://lorempixel.com/128/128/people',
  }; 

  return dispatch => {
    dispatch(addUserData(newUser));
  }
}