import { useState } from 'react';

function Cart() {
  const [cartItems, updateCartItems] = useState(getCartItems());

  function getCartItems() {
    if (sessionStorage.getItem("cart")) {
      return JSON.parse(sessionStorage.getItem("cart"));
    } else {
      return [];
    }
  }

  function decreaseFromCart(product) {
                      //  .findIndex(cartProd => cartProd.cartProduct.code === product.code)
    const productIndex = cartItems.indexOf(product);
    cartItems[productIndex].quantity--;
    updateCartItems(cartItems.slice());
    sessionStorage.setItem("cart", JSON.stringify(cartItems));
  }

  function addToCart(product) {
    const productIndex = cartItems.indexOf(product);
    cartItems[productIndex].quantity++;
    updateCartItems(cartItems.slice());
    sessionStorage.setItem("cart", JSON.stringify(cartItems));
  }

  function removeFromCart(product) {
    const productIndex = cartItems.indexOf(product);
    cartItems.splice(productIndex,1);
    updateCartItems(cartItems.slice());
    sessionStorage.setItem("cart", JSON.stringify(cartItems));
  }

  return (<div>{cartItems.map(cartProd => 
    <div>
      {cartProd.cartProduct.name} - {cartProd.cartProduct.price} €
      <button onClick={() => decreaseFromCart(cartProd)}>-</button> 
      {cartProd.quantity} 
      <button onClick={() => addToCart(cartProd)}>+</button>
      <span>{cartProd.cartProduct.price * cartProd.quantity} €</span>
      <button onClick={() => removeFromCart(cartProd)}>X</button>
    </div>)}</div>)
}

export default Cart;