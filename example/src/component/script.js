import React from 'react';
import './styles.css';
let cart = [];

function addToCart(productName, productPrice) {
    const existingProduct = cart.find(item => item.name === productName);
    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        cart.push({ name: productName, price: productPrice, quantity: 1 });
    }
    updateCart();
}

function removeFromCart(productName) {
    cart = cart.filter(item => item.name !== productName);
    updateCart();
}

function updateQuantity(productName, quantity) {
    const product = cart.find(item => item.name === productName);
    if (product) {
        product.quantity = quantity;
        if (product.quantity <= 0) {
            removeFromCart(productName);
        } else {
            updateCart();
        }
    }
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');

    // Clear current cart items
    cartItems.innerHTML = '';

    let totalPrice = 0;
    cart.forEach(item => {
        const listItem = document.createElement('li');
        listItem.className = 'cart-item';

        const name = document.createElement('p');
        name.textContent = item.name;

        const price = document.createElement('p');
        price.textContent = `$${(item.price * item.quantity).toFixed(2)}`;

        const quantityInput = document.createElement('input');
        quantityInput.type = 'number';
        quantityInput.min = '1';
        quantityInput.value = item.quantity;
        quantityInput.className = 'quantity-input';
        quantityInput.addEventListener('change', (event) => {
            updateQuantity(item.name, parseInt(event.target.value));
        });

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.onclick = () => removeFromCart(item.name);

        listItem.appendChild(name);
        listItem.appendChild(quantityInput);
        listItem.appendChild(price);
        listItem.appendChild(removeButton);

        cartItems.appendChild(listItem);

        totalPrice += item.price * item.quantity;
    });

    totalPriceElement.textContent = totalPrice.toFixed(2);
}

export default cart;