import React, { Component } from 'react';
import { Modal, Button, Form, Col } from 'react-bootstrap';
import { getGuid } from '../../utils/guid';
import _ from 'lodash';

class ModalComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      phone: '',
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    const {
      isVisible,
      isEditMode,
      editedUser,
    } = nextProps;
    return isVisible && _.isEqual(nextState, this.state) || !isVisible || !_.isEqual(this.state, editedUser) ;
  }

  componentDidUpdate(prevProps, prevState,) {
    if(this.props.editedUser) {
      const {
        first_name,
        last_name,
        email,
        phone,
      } = this.props.editedUser;
      this.setState({
        first_name,
        last_name,
        email,
        phone,
      })
    }
  }

  render() {
    const {
      isVisible,
      onHide,
      onSave,
      isEditMode,
    } = this.props;

    const {
      first_name,
      last_name,
      email,
      phone,
    } =this.state;

    return (
      <Modal
        show={isVisible}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            Edit User Data
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Row>
              <Form.Group as={Col}>
                <Form.Label>First Name</Form.Label>
                <Form.Control 
                  placeholder="Enter first name" 
                  defaultValue={first_name}
                  onChange={(e) => this.setState({first_name: e.target.value})}
                />
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label>Last Name</Form.Label>
                <Form.Control 
                  placeholder="Enter last name" 
                  defaultValue={last_name}
                  onChange={(e) => this.setState({last_name: e.target.value})}
                />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control 
                  type="email" 
                  placeholder="Enter email" 
                  defaultValue={email}
                  onChange={(e) => this.setState({email: e.target.value})}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control 
                  type="text" 
                  placeholder="Enter phone number" 
                  defaultValue={phone}
                  onChange={(e) => this.setState({phone: e.target.value})}
                />
              </Form.Group>
            </Form.Row>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => onHide()}>Close</Button>
          <Button variant="success" onClick={() => {
                const data = {
                  id: isEditMode ? this.props.editedUser.id : getGuid(),
                  ...this.state
                }; 
                onSave(data, isEditMode);
                this.setState({
                  first_name: '',
                  last_name: '',
                  email: '',
                  phone: '',
                })
              }
            }
            >Save</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default ModalComponent;