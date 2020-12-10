import React from 'react';
import StarIcon from '@material-ui/icons/Star';
import './styles.css';
import { useStateValue } from '../../Context/stateProvider';

function Product({ id, title, image, price, rating }) {
  const [state, dispatch] = useStateValue();
  const addToBasket = () => {
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="info">
        <p>{title}</p>
        <p className="price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <StarIcon className="icon" />
            ))}
        </div>
      </div>
      <img src={image} alt="" />
      <button type="button" onClick={() => addToBasket()}>
        Add to Basket
      </button>
    </div>
  );
}

export default Product;
