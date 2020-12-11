import React from 'react';
import Subtotal from '../../Components/Subtotal';
import CheckoutProduct from '../../Components/CheckoutProduct';
import { useStateValue } from '../../Context/stateProvider';

import './styles.css';

function Checkout() {
  const [{ basket }] = useStateValue();

  return (
    <div className="checkout">
      <div className="left">
        <div>
          <h2 className="title">Shopping Cart</h2>
          {basket.map(item => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>
      <div className="right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
