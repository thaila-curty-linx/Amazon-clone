import React, { useState } from 'react';
import StarIcon from '@material-ui/icons/Star';
import { useStateValue } from '../../Context/stateProvider';
import './styles.css';

function CheckoutProduct({ id, image, title, price, rating }) {
  const [amountValue, setAmountValue] = useState(1);
  const [state, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: 'REMOVE_FROM_BASKET',
      id: id,
    });
  };

  return (
    <div className="checkoutProduct">
      <img src={image} className="_image" />
      <div className="_info">
        <div className="_header">
          <p className="_title">{title}</p>
          <p className="_price">
            <small>$</small>
            <strong>{price}</strong>
          </p>
        </div>
        <div className="_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <StarIcon className="icon" />
            ))}
        </div>

        <div className="options">
          {amountValue != 10 ? (
            <select
              className="amount"
              onClick={e => setAmountValue(e.target.value)}
              value={amountValue}
            >
              <option value="1">Qty: 1</option>
              <option value="2">Qty: 2</option>
              <option value="3">Qty: 3</option>
              <option value="4">Qty: 4</option>
              <option value="5">Qty: 5</option>
              <option value="6">Qty: 6</option>
              <option value="7">Qty: 7</option>
              <option value="8">Qty: 8</option>
              <option value="9">Qty: 9</option>
              <option value="10">Qty: +10</option>
            </select>
          ) : (
            <>
              <input type="text" className="amountInput" value={amountValue} />
              <button className="amountUpdateButton">Update</button>
            </>
          )}
          <button
            className="_button"
            onClick={() => {
              removeFromBasket();
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default CheckoutProduct;
