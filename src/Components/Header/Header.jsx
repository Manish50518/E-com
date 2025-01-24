import { Link, useNavigate } from "react-router-dom";
import Logo from "../../ui/Logo";

import { FaCartShopping } from "react-icons/fa6";
import { MdLogin, MdPersonAdd } from "react-icons/md";
import { useState } from "react";
import Login from "../Login/Login";
import Register from "../Register/Register";

// eslint-disable-next-line react/prop-types
function Header() {
  const [openLogin, setOpenLogin] = useState(false);
  const [openRegister, setOpenRegister] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <header className="bg-blue-800 text-white py-4 h-20 fixed top-0 left-0 right-0 z-50 shadow-md">
        <nav className="flex justify-between items-center max-w-screen-xl mx-auto px-6">
          <Logo />

          <div className="flex space-x-8">
            <Link to="/" className="text-white hover:text-gray-300">
              Home
            </Link>
            <Link to="products" className="text-white hover:text-gray-300">
              Product
            </Link>
            <Link to="about" className="text-white hover:text-gray-300">
              About
            </Link>
            <Link to="contact" className="text-white hover:text-gray-300">
              Contact
            </Link>
          </div>

          <div className="flex space-x-4">
            <button
              onClick={() => setOpenLogin(true)}
              className="flex items-center text-sm text-white hover:text-gray-300 border border-white px-4 py-2 rounded-md"
            >
              <MdLogin className="mr-2" />
              Login
            </button>
            <button
              onClick={() => setOpenRegister(true)}
              className="flex items-center text-sm text-white hover:text-gray-300 border border-white px-4 py-2 rounded-md"
            >
              <MdPersonAdd className="mr-2" />
              Register
            </button>
            <button
              onClick={() => navigate("/cart")}
              className="flex items-center text-sm text-white hover:text-gray-300 border border-white px-4 py-2 rounded-md"
            >
              <FaCartShopping className="mr-2" />
              Cart
            </button>
          </div>
        </nav>
      </header>

      {openLogin && (
        <Login setOpenLogin={setOpenLogin} setOpenRegister={setOpenRegister} />
      )}
      {openRegister && (
        <Register
          setOpenRegister={setOpenRegister}
          setOpenLogin={setOpenLogin}
        />
      )}

      <div className="h-20"></div>
    </>
  );
}

export default Header;
