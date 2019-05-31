import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Button } from 'react-bootstrap';
import './App.css';
import Header from './Header/Components';
import { Sidebar } from './Sidebar/Containers';
import Main from './Main/Components';
import { getAllUsers } from './store/users';
import { Modal } from './Modal/Containers';
import { showModal } from './store/modal';

class App extends Component {
  componentDidMount() {
    const {
      getUsers,
    } = this.props;

    getUsers();
  }

  render() {
    const {
      showModal
    } = this.props;

    return (
      <div className="App">
        <Modal />
        <Button variant="success" onClick={() => showModal(false)}>Add User</Button>

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
    showModal: (id) => dispatch(showModal(id)),
  }
}

export default connect(null, mapDispatchToProps)(App);
