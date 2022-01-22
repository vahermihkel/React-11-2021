import { useState } from 'react';
import Button from 'react-bootstrap/Button';

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
    if (product.quantity > 1) {
      cartItems[productIndex].quantity--;
      updateCartItems(cartItems.slice());
      sessionStorage.setItem("cart", JSON.stringify(cartItems));
    } else {
      removeFromCart(product);
    }
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

  // splice() - kustamiseks
  // slice() - mälukoha äravõtmiseks (et ei annaks sama asja)
  // split() - stringi tükeldamiseks (meie tegime URLi tükeldamist)

  function calculateSumOfCart() {
    let sumOfCart = 0;
    cartItems.forEach(cartProd => sumOfCart = sumOfCart + cartProd.cartProduct.price * cartProd.quantity);
    return sumOfCart;
  }

  function onPay() {
    fetch("https://igw-demo.every-pay.com/api/v4/payments/oneoff",
      {
        method: "POST", 
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Basic OTJkZGNmYWI5NmUzNGE1Zjo4Y2QxOWU5OWU5YzJjMjA4ZWU1NjNhYmY3ZDBlNGRhZA=="
        }, 
        body: JSON.stringify({
            "api_username": "92ddcfab96e34a5f",
            "account_name": "EUR3D1",
            "amount": calculateSumOfCart(),
            "order_reference": Math.floor(Math.random() * 89999999 + 10000000),
            "nonce": new Date() + "92ddcfab96e34a5f",
            "timestamp": new Date(),
            "customer_url": "https://mihkel-11-2021.web.app/ostukorv"
          })
      }
    ).then(res => {return res.json()})
    .then(data => window.location.href = data.payment_link);
  }

  return (
    <div>
      <div>{cartItems.map(cartProd => 
        <div className="cart-item">
          <span className="cart-item-name">
            <span>{cartProd.cartProduct.name} </span> 
            <span>{cartProd.cartProduct.model} </span>
            <span>({cartProd.cartProduct.size}) </span>
          </span>
          <span>{cartProd.cartProduct.price} €</span>
          <span>
            <img onClick={() => decreaseFromCart(cartProd)} src="/cart/minus.png" alt="" />
            <span>{cartProd.quantity} tk</span> 
            <img onClick={() => addToCart(cartProd)} src="/cart/add.png" alt="" />
          </span>
          <span>{cartProd.cartProduct.price * cartProd.quantity} €</span>
          <img className="cart-item-total" onClick={() => removeFromCart(cartProd)} src="/cart/delete.png" alt="" />
        </div>)}</div>
      { cartItems.length > 0 && 
        <div className="cart-sum">
          <div>Kokku: { calculateSumOfCart() } €</div>
          <Button onClick={onPay}>Maksma</Button>
        </div>
        }
      { cartItems.length === 0 && <div className="cart-empty">
          <div>Ostukorv on tühi</div>
          <img src="/cart/icon-sad-empty-cart.svg" alt="" />
        </div>}
    </div>)
}

export default Cart;