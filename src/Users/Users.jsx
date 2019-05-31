import React from 'react';
import { ListGroup } from 'react-bootstrap';
import User from './User';

const Users = ({ users, currentUser, getUser }) => (
  <ListGroup variant="flush" defaultActiveKey={currentUser.id}>
    {
      users.map(user => (
        <ListGroup.Item as='button' key={user.id} action href={user.id} onClick={() => getUser(user.id)}>
          <User data={user} />
        </ListGroup.Item>
      ))
    }
  </ListGroup>
);

export default Users;
