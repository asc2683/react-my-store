import React, { useState, useEffect } from 'react';
import ShopCart from './components/ShopCart/ShopCart';
import MenuList from './components/MenuList/MenuList';
import Button from './components/shared/Button/Button';
import Header from './components/Header/Header';
import Data from './data.json';
import './App.css';

import { generateColor } from './utils';

const App = () => {
  const [menuVisible, setMenuVisible] = useState(true);
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const cartTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    setTotal(cartTotal);
  }, [cart]);

  const menu = Data.menu.items.map((item) => {
    return {
      ...item,
      quantity: 0,
      color: generateColor(item.id),
    };
  }).sort((a, b) => {
    return a.price - b.price;
  });

  const detail = { ...Data.restaurant };

  const addToCart = (item) => {
    const match = cart.find((i) => i.id === item.id);

    if (!match) {
      setCart([...cart, { ...item, quantity: 1 }]);
    } else {
      setCart(cart.map((el) => (el.id === match.id ? { ...item, quantity: match.quantity + 1 } : el)));
    }
  };

  const toggleView = () => {
    setMenuVisible(!menuVisible);
  };

  const submitOrder = () => {
    // eslint-disable-next-line no-alert
    alert(`Order Submitted: $${total}`);
  };

  return (
    <div className="app-container">
      <header>
        <Header detail={menuVisible ? detail : { ...detail, name: 'My Order', phone: '' }} />
      </header>
      <div>
        <Button
          label={menuVisible ? 'View Order' : 'Return to menu'}
          handleClick={toggleView}
        />
      </div>
      <main>
        {menuVisible ? (
          <MenuList
            menu={menu}
            addToCart={addToCart}
            menuVisible={menuVisible}
          />
        ) : (
          <ShopCart
            cart={cart}
            total={total}
          />
        )}
      </main>
      <div>
        <Button
          handleClick={submitOrder}
          label="Submit Order"
        />
      </div>
    </div>
  );
};

export default App;
