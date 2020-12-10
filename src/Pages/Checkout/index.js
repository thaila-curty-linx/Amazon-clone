import React from 'react';
import Subtotal from '../../Components/Subtotal';
import './styles.css';

function Checkout() {
  return (
    <div className="checkout">
      <div className="left">
        <div>
          <h2 className="title">Shopping Cart</h2>
          {/* BasketItem */}
        </div>
      </div>
      <div className="right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
