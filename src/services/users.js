import axios from 'axios';

export const fetchUsersData = () => {
  return axios.get(`/users.json`);
};

export const fetchUserData = async (userId) => {
  const users = await fetchUsersData();
  const userData = users.data.find(user => user.id === userId);
  return Promise.resolve(userData);
};
