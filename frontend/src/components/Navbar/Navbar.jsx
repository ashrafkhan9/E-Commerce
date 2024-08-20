import "./Navbar.css";

import logo from "../assets/logo.png";
import cart_icon from "../assets/cart_icon.png";
import { useContext, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../../context/ShopContext";
import nav_dropdown from "../assets/nav_dropdown.png";

function Navbar() {
  const [menu, setMenu] = useState("shop");
  const { getTotalCartItem } = useContext(ShopContext);

  const menuRef = useRef();

  const dropdownToggle = (e) => {
    menuRef.current.classList.toggle("nav-menu-visible");
    e.target.classList.toggle("open");
  };

  return (
    <div className="navbar">
      <div className="nav-logo">
        <Link to="/">
          <img src={logo} alt="shopper-logo" />
        </Link>
        <p>E-COMMERCE</p>
      </div>
      <img
        className="nav-dropdown"
        onClick={dropdownToggle}
        src={nav_dropdown}
        alt=""
      />
      <ul ref={menuRef} className="nav-menu">
        <li
          className={menu === "shop" ? "active" : ""}
          onClick={() => setMenu("shop")}
        >
          <Link to="/" style={{ textDecoration: "none", color: "#626262" }}>
            Shop
          </Link>
        </li>
        <li
          className={menu === "men" ? "active" : ""}
          onClick={() => setMenu("men")}
        >
          <Link to="/mens" style={{ textDecoration: "none", color: "#626262" }}>
            Men
          </Link>
        </li>
        <li
          className={menu === "women" ? "active" : ""}
          onClick={() => setMenu("women")}
        >
          <Link
            to="/womens"
            style={{ textDecoration: "none", color: "#626262" }}
          >
            Women
          </Link>
        </li>
        <li
          className={menu === "kids" ? "active" : ""}
          onClick={() => setMenu("kids")}
        >
          <Link to="/kids" style={{ textDecoration: "none", color: "#626262" }}>
            Kids
          </Link>
        </li>
      </ul>
      <div className="nav-login-cart">
        {localStorage.getItem("auth-token") ? (
          <button
            onClick={() => {
              localStorage.removeItem("auth-token");
              window.location.replace("/");
            }}
          >
            Logout
          </button>
        ) : (
          <Link to="/login" style={{ textDecoration: "none" }}>
            <button>Login</button>
          </Link>
        )}

        <Link to="/cart" style={{ textDecoration: "none" }}>
          <img src={cart_icon} alt="cart_icon" />
        </Link>

        <div className="nav-cart-count">{getTotalCartItem()}</div>
      </div>
    </div>
  );
}

export default Navbar;
