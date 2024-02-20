import React, { useState } from "react";
import "../../styles/navbar/nav-center.css";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/logo.png";
import Search from "../../assets/search.png";
import User from "../../assets/user.png";
import Basket from "../../assets/shopping-basket.png";
import Close from "../../assets/close.png";

function Navcenter() {
  const [isBasketOpen, setIsBasketOpen] = useState(false);
  const toggleBasket = () => setIsBasketOpen(!isBasketOpen);

  return (
    <div className="navbar-center">
      <div className="navbar-center-left">
        <NavLink to="/">
          <img src={Logo} alt="" />
        </NavLink>
      </div>
      <div className="navbar-center-right">
        <div className="search">
          <input type="search" placeholder="Ne aramıştınız ?" />
          <img src={Search} alt="" />
        </div>
        <div className="account">
          <NavLink to="/login">
            <img src={User} alt="" />
          </NavLink>
        </div>
        <div className="basket">
          <button onClick={toggleBasket}>
            <img src={Basket} alt="" className="basket-image"/>
          </button>
          {isBasketOpen && ( 
            <div className="basket-menu">
              <button className="basket-close-btn" onClick={toggleBasket}>
                <img src={Close} alt="Close" />
              </button>
              <NavLink to="/login">
              <div className="basket-menu-position">
                <div className="basket-menu-img">
                  <img
                    src="https://ideacdn.net/idea/ed/42/myassets/products/064/yuzuk-3_min.png?revision=1697143329"
                    alt=""
                  />
                </div>
                <div>
                  <p>Ürün Adı dsadsadsadsadsadsasdadsadsa</p>
                  <p>Ürün Fiyatı</p>
                </div>
              </div>
              </NavLink>
            </div>
          )}
        </div>
      </div>
      <div className="number">
        <p>1</p>
      </div>
    </div>
  );
}

export default Navcenter;
