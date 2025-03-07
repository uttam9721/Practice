import React from 'react';

const Cart = ({ cart, setCart }) => {
  console.log(cart);  // This will log the cart array, which contains all product objects.

  return (
    <div>
      <h2>Your Cart</h2>
      {/* Mapping over the cart array and displaying product details */}
      {cart.map((product) => (
        <div key={product.id} className="cart-item">
          <img src={product.img} alt={product.model} className="product-img" />
          <div className="product-details">
            <h3>{product.brand}</h3>
            <p>{product.model}</p>
            <p>{product.description}</p>
            <span>Price: ₹{product.price}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
