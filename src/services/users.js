import * as users from '../mockData/users.json';

export const fetchUsersData = () => Promise.resolve(users);

export const fetchUserData = (userId) => {
  const userData = users.find(user => user.id === userId);
  return Promise.resolve(userData);
};
