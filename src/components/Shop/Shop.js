import React, { useContext } from 'react';
import DataContext from '../../contexts/DataContext';
import ShopCart from '../ShopCart/ShopCart';
import MenuList from '../MenuList/MenuList';
import Button from '../shared/Button/Button';
import './Shop.css';

const Shop = () => {
  const { menuVisible, submitOrder, toggleView } = useContext(DataContext);

  return (
    <main className="shop-container" data-testid="shop">
      <div>
        <Button
          label={menuVisible ? 'View Order' : 'Return to menu'}
          handleClick={toggleView}
        />
      </div>
      {menuVisible ? (
        <MenuList />
      ) : (
        <ShopCart />
      )}
      <div>
        <Button
          handleClick={submitOrder}
          label="Submit Order"
        />
      </div>
    </main>
  );
};

export default Shop;
