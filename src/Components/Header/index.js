import React from 'react';
import './styles.css';
import logo from '../../assets/images/amazon_logo.png';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from '../../Context/stateProvider';

function index() {
  const [{ basket }] = useStateValue();

  return (
    <div className="header">
      <Link to="/">
        <img src={logo} className="logo" />
      </Link>
      <div className="search">
        <input className="searchInput" type="text" />
        <button className="searchButton">
          <SearchIcon className="searchIcon" />
        </button>
      </div>
      <nav className="nav">
        <div className="option">
          <span className="optionLineOne">Hello Guest</span>
          <span className="optionLineTwo">SigIn</span>
        </div>
        <div className="option">
          <span className="optionLineOne">Returns</span>
          <span className="optionLineTwo">& Orders</span>
        </div>
        <div className="option">
          <span className="optionLineOne">Your</span>
          <span className="optionLineTwo">Prime</span>
        </div>
        <Link to="/checkout">
          <div className="optionBascket">
            <ShoppingBasketIcon />
            <span className="optionLineTwo bascketCount">{basket?.length}</span>
          </div>
        </Link>
      </nav>
    </div>
  );
}

export default index;
