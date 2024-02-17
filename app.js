import React, { useState } from 'react';
import './App.css';

function App() {
  const [cart, setCart] = useState([]);

  const products = [
    { id: 1, name: 'Product 1', price: 10, rating: 4, image: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Product 2', price: 15, rating: 3, image: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Product 3', price: 20, rating: 5, image: 'https://via.placeholder.com/150' },
    { id: 4, name: 'Product 4', price: 25, rating: 4, image: 'https://via.placeholder.com/150' }
  ];

  const addToCart = (product) => {
    setCart([...cart, { ...product, quantity: 1 }]);
  };

  const incrementQuantity = (productId) => {
    const updatedCart = cart.map(item => {
      if (item.id === productId) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setCart(updatedCart);
  };

  const decrementQuantity = (productId) => {
    const updatedCart = cart.map(item => {
      if (item.id === productId && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    setCart(updatedCart.filter(item => item.quantity > 0));
  };

  return (
    <div className="App">
      <header>
        <nav>
          <div className="search-bar">
            <input type="text" placeholder="Search..." />
          </div>
          <div className="categories">
            <select>
              <option value="all">All Categories</option>
              <option value="electronics">Electronics</option>
              <option value="clothing">Clothing</option>
              <option value="books">Books</option>
            </select>
          </div>
        </nav>
      </header>
      <div className="product-container">
        {products.map(product => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <div className="rating">Rating: {product.rating}</div>
            <div className="quantity-controls">
              <button onClick={() => decrementQuantity(product.id)}>-</button>
              <span>{cart.find(item => item.id === product.id)?.quantity || 0}</span>
              <button onClick={() => incrementQuantity(product.id)}>+</button>
            </div>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
