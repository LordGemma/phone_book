import React, { PureComponent } from 'react';
import { Image, Card, Button } from 'react-bootstrap';
import './UserDetails.css';
import CallHistory from './UserDetailsComponents/CallHistory';

export class UserDetails extends PureComponent {
  render() {
    const {
      id,
      avatar,
      first_name,
      last_name,
      phone,
      email,
      history,
    } = this.props.user

    const { showModal } = this.props;

    return (
      <div className="user-details-block">
        <Card bg="light" style={{ width: '80%' }}>
          <Card.Header>
            <div className="user-details">
              <Image src={avatar} roundedCircle thumbnail/>
              <div className="user-info">
                <h5>{`${first_name} ${last_name}`}</h5>
                <p><b>Phone:</b> {phone}</p>
                <p><b>Email:</b> {email}</p>
              </div>
              <div className="edit-btn">
                <Button variant="success" onClick={() => showModal(true)}>Edit</Button>
              </div>
            </div>
          </Card.Header>
          <Card.Body>
            <Card.Text>
              <h5>Call History</h5>
              <CallHistory history={history} />
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  }
}