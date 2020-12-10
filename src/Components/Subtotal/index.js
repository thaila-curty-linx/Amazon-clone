import React from 'react';
import './styles.css';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from '../../Context/stateProvider';
import { getBasketTotal } from '../../Context/reducer';

function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={value => (
          <>
            <p>
              Subtotal({basket.length} items):
              <strong>{value}</strong>
            </p>
            <small className="gift">
              <input type="checkbox" />
              This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={'text'}
        thousandSeparator={true}
        prefix={'$'}
      />
      <button>Proceed to checkout</button>
    </div>
  );
}

export default Subtotal;
