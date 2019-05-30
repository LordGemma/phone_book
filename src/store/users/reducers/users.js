import {
  GET_ALL_USERS,
  GET_USER,
  ADD_USER,
  DELETE_USER,
  EDIT_USER,
} from '../actionTypes';

const initialState = {
  users: [],
  user: {}
};

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_USERS:
      return {
        ...state,
        users: action.payload.users,
      };
    case GET_USER:
      return {
        ...state,
        user: action.payload.user,
      };
    case ADD_USER:
      const newUser = action.payload.userData;
      const extendedlist = [...state.users];
      extendedlist.push(newUser);
      return {
        ...state,
        users: extendedlist,
      };

    case EDIT_USER:
      const user = action.payload.userData;
      const editedlist = [...state.users];
      editedlist.push(user);
      return {
        ...state,
        users: editedlist,
      };
    case DELETE_USER:
      return {
        ...state,
        users: state.users.filter(user => user.id !== action.payload.userId),
      };
    default:
      return state;
  }
};