import React from 'react';
import './styles.js';

const Alert = ({ children, design }) => {
  const classNames = ['alert'];
  if (design) {
    classNames.push(`alert-${design}`);
  }
  return <div className={ classNames.join(' ') }>{ children }</div>;
}

export default Alert;
