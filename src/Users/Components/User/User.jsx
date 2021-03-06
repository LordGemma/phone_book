import React from 'react';
import { Image, Button } from 'react-bootstrap';
import './User.css';

const User = ({ data, deleteUser }) => {
  const {
    id,
    first_name,
    last_name,
    avatar,
    phone,
  } = data;

  return (
    <div className="user-block">
      <Image src={avatar} roundedCircle thumbnail/>
      <div>
        <p className="full-name">{`${first_name} ${last_name}`}</p>
        <p className="phone">{ phone }</p>
      </div>
      <Button 
        variant="outline-danger" 
        size="sm" 
        onClick={() => deleteUser(id)}
      >X</Button>
    </div>
  );
}

export default User;
