import React from 'react';
import CallHistoryItem from './CallHistoryItem';
import { ListGroup } from 'react-bootstrap';


const CallHistory = ({ history }) => {
  return (
    <div className="call-history">
      <ListGroup variant="flush">
        {
          history && history.map(call => <CallHistoryItem call={call} />)
        }
      </ListGroup>
    </div>
  );
};

export default CallHistory;