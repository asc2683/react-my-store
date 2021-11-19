import React from 'react';
import './Header.css';

const Header = ({ detail }) => (
  <div className="header" data-testid="header">
    <h1>{detail.name}</h1>
    <h2>{detail.phone}</h2>
  </div>
)

export default Header;
