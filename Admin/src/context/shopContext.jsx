// src/context/shopContext.js
import React, { createContext, useState } from "react";

export const ShopContext = createContext();

export const ShopProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems(prev => [...prev, item]);
  };

  return (
    <ShopContext.Provider value={{ cartItems, addToCart }}>
      {children}
    </ShopContext.Provider>
  );
};
