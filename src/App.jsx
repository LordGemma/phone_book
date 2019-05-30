import React from 'react';
import { Row } from 'react-bootstrap';
import './App.css';
import Header from './Header/Components';
// import Footer from './Footer/Components';
import Sidebar from './Sidebar/Components';
import Main from './Main/Components';

function App() {
  return (
    <div className="App">
      <Header />
      <Row noGutters>
        <Sidebar />
        <Main />
      </Row>
    </div>
  );
}

export default App;
