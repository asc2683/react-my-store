import React, { useContext } from 'react';
import DataContext from '../../contexts/DataContext';
import ShopItem from '../ShopItem/ShopItem';
import './ShopCart.css';

const ShopCart = () => {
  const { cart, total } = useContext(DataContext);

  return (
    <>
      { !total
        ? <p>Nothing in order</p>
        : null }
      <>
        {cart.map((item) => {
          return (
            <div key={item.id}>
              <ShopItem item={item} />
            </div>
          );
        })}
      </>
      <p>
        Total: $
        {total}
      </p>
    </>
  );
};

export default ShopCart;
