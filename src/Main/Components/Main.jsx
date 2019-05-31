import React from 'react';
import { Col } from 'react-bootstrap';
import { UserDetails } from '../../Users/Containers';
import './Main.css';

const Main = () => (
  <Col xs={9}>
    <main className="main">
      <UserDetails />
    </main>
  </Col>
);

export default Main;
