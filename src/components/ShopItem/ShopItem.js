import React, { useContext } from 'react';
import DataContext from '../../contexts/DataContext';
import './ShopItem.css';

import { calcItemTotal } from '../../utils';

const ShopItem = ({ item }) => {
  const { menuVisible } = useContext(DataContext);

  return (
    <ul
      className="shop-item"
      key={item.id}
      data-testid="shopItem"
    >
      <li
        style={{ color: item.color }}
        key={`name_${item.id}`}
      >
        Item:
        {item.name}
      </li>
      <li key={`price_${item.id}`}>
        Price: $
        {item.price}
      </li>
      { !menuVisible
        ? (
          <>
            <li key={`quantity_${item.id}`}>
              Quantity:
              {item.quantity}
            </li>
            <li key={`total_${item.id}`}>
              Item total: $
              {calcItemTotal(item)}
            </li>
          </>
        ) : null}
    </ul>
  );
};

export default ShopItem;
