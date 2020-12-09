import React from 'react';
import './styles.css';
import logo from '../../assets/images/amazon_logo.png';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
function index() {
  return (
    <div className="header">
      <img src={logo} className="logo" />
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
        <div className="optionBascket">
          <ShoppingBasketIcon />
          <span className="optionLineTwo bascketCount">0</span>
        </div>
      </nav>
    </div>
  );
}

export default index;
