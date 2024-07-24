import React from 'react';
import './App.css';

const products = [
  { id: 1, name: '사과', price: 1000 },
  { id: 2, name: '바나나', price: 1200 },
  { id: 3, name: '체리', price: 2500 },
];

const ProductList = ({ addToCart }) => {
  return (
    <div>
      <h2>과일</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            {product.name} - ₩{product.price}
            <button onClick={() => addToCart(product)}>장바구니에 추가</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;