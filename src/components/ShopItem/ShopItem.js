import React from 'react';
import './ShopItem.css';

const ShopItem = ({ item, menuVisible }) => {
  const itemTotal = Number(item.price) * Number(item.quantity);

  return (
    <ul className="shop-item" key={item.id} data-testid="shopItem">
      <li style={{ color: item.color }} key={`name_${item.id}`}>Item: {item.name}</li>
      <li key={`price_${item.id}`}>Price: ${item.price}</li>
      {!menuVisible && (
        <>
          <li key={`quantity_${item.id}`}>Quantity: {item.quantity}</li>
          <li key={`total_${item.id}`}>Item total: ${itemTotal}</li>
        </>
      )}
    </ul>
  )
}

export default ShopItem;
