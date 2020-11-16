import React from 'react';
import './button.css';
import { Link } from 'react-router-dom';

export function Button() {
  return (
    <Link to='order'>
      <button className='btn'>Order</button>
    </Link>
  );
}