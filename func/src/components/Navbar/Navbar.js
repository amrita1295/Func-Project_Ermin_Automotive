import React, { useContext } from "react";
import { useState } from "react";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import toast, { Toaster } from "react-hot-toast";
const Navbar = () => {

  const { user, logout } = useContext(AuthContext);

  console.log(user?.displayName, user?.email);

  
  
  const handleLogOut = () => {
    logout()
      .then(() => {
        toast.success('Logged Out Successfully')
      })
      .catch((error) => console.log(error));
  };

  const menuItems = (
    <>
      <li className="mb-2 md:mb-0 md:pt-0 lg:mb-0 lg:pt-0 pt-2">
        <Link to="/">HOME</Link>
      </li>
      <li className="mb-2 md:mb-0 lg:mb-0">
        <Link to="/blog">BLOG</Link>
      </li>
      <li className="mb-2 md:mb-0 lg:mb-0">
        <Link to="/about">ABOUT</Link>
      </li>
      <li className="mb-2 md:mb-0 lg:mb-0">
        <Link to="/product">PRODUCT</Link>
      </li>

      {user?.uid ? (
        <>
          <li>
            <button onClick={handleLogOut}>LOG OUT</button>
          </li>
        </>
      ) : (
        <li>
          <Link to="/login">LOGIN</Link>
        </li>
      )}
    </>
  );
  let [open, setOpen] = useState(false);
  return (
    <div className="shadow-md w-full fixed top-0 z-50">
      <Toaster></Toaster>
      <div className="md:flex sm:gap-5 items-center justify-between bg-nav  py-4 md:px-10 px-7">
        <Link
          to="/"
          className="font-bold text-2xl cursor-pointer flex items-center text-gray-800"
        >
          XTRALIVING
        </Link>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          <ion-icon name="filter-outline"></ion-icon>
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 gap-4 lg:gap-10 absolute md:static bg-nav md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-16 " : "top-[-490px]"
          }`}
        >
          {menuItems}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;