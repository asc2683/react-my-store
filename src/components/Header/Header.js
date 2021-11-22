import React, { useContext } from 'react';
import DataContext from '../../contexts/DataContext';
import './Header.css';

const Header = () => {
  const { detail, menuVisible } = useContext(DataContext);
  const header = menuVisible ? detail : { ...detail, name: 'My Order', phone: '' };

  return (
    <header className="header">
      <div data-testid="header">
        <h1>{header.name}</h1>
        <h2>{header.phone}</h2>
      </div>
    </header>
  );
};

export default Header;
