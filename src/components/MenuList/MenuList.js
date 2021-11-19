import React from 'react';
import Button from '../shared/Button/Button';
import ShopItem from '../ShopItem/ShopItem';
import './MenuList.css';

const MenuList = ({ menu, addToCart, menuVisible }) => (
  <>
    {menu.map((item) => {
      return (
        <div key={item.id}>
          <ShopItem
            item={item}
            menuVisible={menuVisible}
          />
          <Button 
            item={item} 
            label="Add to Order" 
            handleClick={addToCart} 
          />
        </div>
      );
    })}
  </>
);

export default MenuList;
