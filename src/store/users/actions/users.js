import { fetchAllUsers, fetchUser } from "../actionTypes";
import { fetchUsersData, fetchUserData } from '../../../services/users';
// import { getGuid } from '../../../utils/guid'

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