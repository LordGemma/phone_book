// @flow

import React from 'react';

type LogoTypes = {
  text: String,
}

const Logo = ({ text }: LogoTypes) => (<span>{text}</span>);

export default Logo;
