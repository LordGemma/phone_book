import React from 'react';
import { Image, ListGroup } from 'react-bootstrap';
import moment from 'moment';

const CallHistoryItem = ({ call }) => {
  const {
    conversation_direction,
    conversation_time,
    date,
  } = call;
  const callDirection = conversation_direction === 'out' ? 'outcomming' : 'incomming';
  return (
    <ListGroup.Item>
      <div className="call">
        <Image src={`/assets/${callDirection}.svg`}/>
        <div>
          <p>date: {moment(date).format('DD/MM/YYYY')}</p>
          <p>duration: {conversation_time} min</p>
        </div>
      </div>
    </ListGroup.Item>
  );
};

export default CallHistoryItem;