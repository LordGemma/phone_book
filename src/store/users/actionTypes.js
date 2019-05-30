export const GET_ALL_USERS = 'GET_ALL_USERS';
export const GET_USER = 'GET_USER';
export const DELETE_USER = 'DELETE_USER';
export const ADD_USER = 'ADD_USER';
export const EDIT_USER = 'EDIT_USER';

export const fetchAllUsers = users => ({
  type: GET_ALL_USERS,
  payload: { users },
});

export const fetchUser = user => ({
  type: GET_USER,
  payload: { user },
});

export const deleteUser = userId => ({
  type: DELETE_USER,
  payload: { userId },
});

export const addUser = userData => ({
  type: ADD_USER,
  payload: { userData },
});

export const editUser = userData => ({
  type: EDIT_USER,
  payload: { userData },
});
