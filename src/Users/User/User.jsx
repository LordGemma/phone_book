import React from 'react';

const User = ({ data }) => {
  const {
    full_name,
  } = data;

  return (
    <div>{ full_name }</div>
  );
}

export default User;
