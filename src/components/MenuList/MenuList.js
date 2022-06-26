import React, { useContext } from 'react';
import DataContext from '../../contexts/DataContext';
// import Button from '../shared/Button/Button';
// import ShopItem from '../ShopItem/ShopItem';
import './MenuList.css';

const MenuList = () => {
  const { menu, addToCart, menuVisible } = useContext(DataContext);

  console.log('menu: ', menu);
  console.log('addToCard: ', addToCart);
  console.log('menuVisible: ', menuVisible);

  /*
      Todo: Need to show all items from menu dynamically...
  */

  return (
    <>
      <div>
        <ul className="shop-item" data-testid="shopItem">
          <li style={{ color: 'rgb(34, 34, 34)' }}>Item:chips</li>
          <li>Price: $1</li>
        </ul>
        <button type="button" data-testid="button" className="button">Add to Order</button>
      </div>
      <div>
        <ul className="shop-item" data-testid="shopItem">
          <li style={{ color: 'rgb(85, 85, 85)' }}>Item:drink</li>
          <li>Price: $2</li>
        </ul>
        <button type="button" data-testid="button" className="button">Add to Order</button>
      </div>
    </>
  );
};
export default MenuList;
