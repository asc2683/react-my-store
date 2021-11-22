import React, { useContext } from 'react';
import DataContext from '../../contexts/DataContext';
import Button from '../shared/Button/Button';
import ShopItem from '../ShopItem/ShopItem';
import './MenuList.css';

const MenuList = () => {
  const { menu, addToCart, menuVisible } = useContext(DataContext);

  return (
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
};
export default MenuList;
