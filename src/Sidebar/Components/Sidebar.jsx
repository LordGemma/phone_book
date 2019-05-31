import React from 'react';
import { Col } from 'react-bootstrap';
import Users from '../../Users'
import './Sidebar.css';

const Sidebar = ({ users, user, getUser, deleteUser }) => (
  <Col xs={3}>
    <aside className="sidebar">
      <Users 
        users={users} 
        currentUser={user} 
        getUser={getUser}
        deleteUser={deleteUser}
      />
    </aside>
  </Col>
);

export default Sidebar;
