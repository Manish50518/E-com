import { Link, useNavigate } from "react-router-dom";
import Logo from "./Logo";

import { FaCartShopping } from "react-icons/fa6";
import { MdLogin, MdPersonAdd } from "react-icons/md";
import { useEffect } from "react";
// import { getCartItems } from "../services/apiProducts";

// async function CartItem() {
//   const cartData = await getCartItems();
//   console.log(cartData.qunatity);
//   return cartData.quantity;
// }

// eslint-disable-next-line react/prop-types
function Header() {
  const navigate = useNavigate();

  return (
    <div className="header">
      <nav className="header-logo-nav">
        <Logo />
        <div className="nav-main">
          <Link to="/" className="links">
            Home
          </Link>
          <Link to="products" className="links">
            Product
          </Link>
          <Link to="about" className="links">
            About
          </Link>
          <Link to="contact" className="links">
            Contact
          </Link>
        </div>
        <div className="nav_button">
          <button onClick={() => navigate("/login")} className="log_reg_btn">
            <MdLogin />
            Login
          </button>
          <button
            onClick={() => navigate("/register")}
            className="log_register_btn"
          >
            <MdPersonAdd />
            Register
          </button>
          <button onClick={() => navigate("/cart")} className="log_reg_btn">
            <FaCartShopping />
            Cart
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Header;
