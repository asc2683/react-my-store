import React, { useState, useEffect, createContext } from 'react';
import Data from '../data.json';
import { generateColor } from '../utils';

const DataContext = createContext(null);

export const DataProvider = ({ children }) => {
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
    setMenuVisible((prevMenuVisible) => !prevMenuVisible);
  };

  const submitOrder = () => {
    // eslint-disable-next-line no-alert
    alert(`Order Submitted: $${total}`);
  };

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const providerValue = {
    menuVisible,
    menu,
    detail,
    addToCart,
    toggleView,
    submitOrder,
    setMenuVisible,
    setCart,
    setTotal,
    cart,
    total,
  };

  return (
  // eslint-disable-next-line react/jsx-no-constructed-context-values
    <DataContext.Provider value={providerValue}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
