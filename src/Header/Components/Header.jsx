import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Logo from './Logo';
import './Header.css';

const Header = () => {
  const logoText = 'Phone Book';
  return (
    <header className="header">
      <Container fluid>
        <Row>
          <Col>
            <Logo text={logoText} />
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
