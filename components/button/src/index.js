import React from 'react';
import './styles.js';

const Button = ({ children }) => {
  return <button className='button'>{ children }</button>;
}

export default Button;
