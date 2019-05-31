import React, { PureComponent } from 'react';
import { Image, Card } from 'react-bootstrap';
import './UserDetails.css';
import CallHistory from './UserDetailsComponents/CallHistory';

export class UserDetails extends PureComponent {
  render() {
    const {
      id,
      avatar,
      full_name,
      phone,
      email,
      history,
    } = this.props.user

    return (
      <div className="user-details-block">
        <Card bg="light" style={{ width: '80%' }}>
          <Card.Header>
            <div className="user-details">
              <Image src={avatar} roundedCircle thumbnail/>
              <div className="user-info">
                <h5>{full_name}</h5>
                <p><b>Phone:</b> {phone}</p>
                <p><b>Email:</b> {email}</p>
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