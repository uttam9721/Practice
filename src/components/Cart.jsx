import React from 'react';
const Cart = ({cart,setCart}) => {
  return (
    <div>
      <h1>Cart</h1>
      {cart.map((item) => (
        <div key={item.id} style={{ border: '1px solid #ddd', padding: '10px', margin: '10px', borderRadius: '5px' }}>
          <img src={item.img} alt={item.model} style={{ width: '100px', height: '100px' }} />
          <h2>{item.brand} {item.model}</h2>
          <p>{item.description}</p>
          <p>Price: ₹{item.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Cart;
