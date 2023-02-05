import React from "react";
import { useContext } from "react";
import CartContext from "../../Contexts/CartContext";
import { BsBagCheck } from "react-icons/bs";
import "./cart.css";

const Cart = () => {
  const { myCart, total } = useContext(CartContext);
  return (
    <div className="cart-container">
      <div className="cart-heading">
        <h1> Checkout</h1>
        <div className="cart-icon">
          <BsBagCheck />
        </div>
      </div>
      <div className="cart-total">
        <div className="cart-flex">
          {myCart.map((cart) => {
            return (
              <div key={cart.id} className="cart-box">
                <div className="cart-image">
                  <img src={cart.imageUrl} className="cart-img" />
                </div>
                <div className="wrapper-cart">
                  <div className="wrapper-text">
                    <div className="cart-name">{cart.name}</div>
                    <div className="cart-breed">{cart.breed}</div>
                  </div>
                  <div className="cart-price">{cart.price}$</div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="cart-list">{total}</div>
      </div>
    </div>
  );
};

export default Cart;
