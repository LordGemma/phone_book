import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row } from 'react-bootstrap';
import './App.css';
import Header from './Header/Components';
// import Footer from './Footer/Components';
import { Sidebar } from './Sidebar/Containers';
import Main from './Main/Components';
import { getAllUsers } from './store/users';
import { Modal } from './Modal/Containers';

class App extends Component {
  componentDidMount() {
    const {
      getUsers,
    } = this.props;

    getUsers();
  }

  render() {
    return (
      <div className="App">
        <Modal />
        <Header />
        <Row noGutters>
          <Sidebar />
          <Main />
        </Row>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getUsers: () => dispatch(getAllUsers()),
  }
}

export default connect(null, mapDispatchToProps)(App);
