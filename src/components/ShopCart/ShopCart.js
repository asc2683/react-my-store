import React from 'react';
import ShopItem from '../ShopItem/ShopItem';
import './ShopCart.css';

const ShopCart = ({ cart, total }) => {
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
