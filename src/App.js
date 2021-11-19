import React, { useState, useEffect } from 'react';
import ShopCart from './components/ShopCart/ShopCart';
import MenuList from './components/MenuList/MenuList';
import Button from './components/shared/Button/Button';
import Header from './components/Header/Header'
import Data from './data.json';
import './App.css';

export default function App() {
  const [cartVisible, setCartVisible] = useState(false);
  const [menuVisible, setMenuVisible] = useState(true);
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const total = cart.reduce((sum,item) => sum + item.price * item.quantity, 0);
    setTotal(total);
  }, [cart]);

  const generateColor = (id) => {
    let hex = '#'
    for (let i=1; i<7; i++) {
      id = id * i;
      hex += id.toString()[0]
    }
    return hex;
  }

  const menu = Data.menu.items.map((item) => {
    return {
      ...item,
      quantity: 0,
      color: generateColor(item.id),
    }
  }).sort((a, b) => {
    return a.price - b.price;
  });


  const detail = {...Data.restaurant};

  const addToCart = (item) => {
    const match = cart.find((i) => i.id === item.id);

    if (!match) {
      setCart([...cart, {...item, quantity: 1}])
    } else {
      setCart(cart.map((item) => item.id === match.id ? {...item, quantity: match.quantity+1} : item));
    }
  };

  const toggleView = () => {
    setCartVisible(!cartVisible);
    setMenuVisible(!menuVisible);
  }

  const submitOrder = () => {
    alert('Order Submitted: $' + total);
  }

  return (
    <div className="app-container">
      <header>
        <Header detail={menuVisible ? detail : {...detail, name: 'My Order', phone: ''}} />
      </header>
      <div>
        <Button 
          label={menuVisible ? 'View Order' : 'Return to menu'} 
          handleClick={toggleView} 
        />
      </div>
      <main>
      {menuVisible ? 
        <MenuList
          menu={menu} 
          addToCart={addToCart}
          menuVisible={menuVisible}
        />
      : null }
      {cartVisible ? 
        <ShopCart 
          cart={cart}
          total={total}
        />
      : null }
      </main>
      <div>
        <Button 
          handleClick={submitOrder} 
          label="Submit Order "/>
        </div>
    </div>
  );
}

