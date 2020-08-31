import React from 'react';
import PropTypes from 'prop-types';
import './styles.js';

const Alert = ({ children, design }) => {
  const classNames = ['alert'];
  if (design) {
    classNames.push(`alert-${design}`);
  }
  return <div className={ classNames.join(' ') }>{ children }</div>;
}

Alert.propTypes = {
  /** Content for the alert */
  children: PropTypes.node,
  /** Type of design */
  design: PropTypes.oneOf(['critical', 'warning'])
}

export default Alert;