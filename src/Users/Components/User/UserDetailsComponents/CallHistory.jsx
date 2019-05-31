import React from 'react';
import CallHistoryItem from './CallHistoryItem';

const CallHistory = ({ history }) => {
  return (
    <div className="call-history">
      {
        history && history.map(call => <CallHistoryItem call={call} />)
      }
    </div>
  );
};

export default CallHistory;