// context/ProductContext.js
import React, { createContext, useState } from 'react';

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  // Define the product data here
  const [products, setProducts] = useState([
    {
      id: '1',
      name: 'Product 1',
      description: 'Description for Product 1',
      price: '$10',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: '2',
      name: 'Product 2',
      description: 'Description for Product 2',
      price: '$20',
      image: 'https://via.placeholder.com/150',
    },
  ]);

  return (
    <ProductContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductContext.Provider>
  );
};
