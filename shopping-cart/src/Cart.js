import React from 'react';
import './App.css';


const Cart = ({ cartItems, removeFromCart }) => {
  return (
    <div>
      <h2>장바구니</h2>
      <ul>
        {cartItems.map(item => (
          <li key={item.id}>
            {item.name} - ₩{item.price} x {item.quantity}
            <button onClick={() => removeFromCart(item.id)}>---</button>
          </li>
        ))}
      </ul>
      <p>총액 : {cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}원</p>
    
    <button>구매하기</button>
    </div>
  );
};

export default Cart;