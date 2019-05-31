import React from 'react';

const CallHistoryItem = ({ call }) => {
  const {
    conversation_direction,
    conversation_time,
    date,
  } = call;
  const callDirection = conversation_direction === 'out' ? '' : ;
  return (
    <div className="call">
      
    </div>
  );
};

export default CallHistoryItem;