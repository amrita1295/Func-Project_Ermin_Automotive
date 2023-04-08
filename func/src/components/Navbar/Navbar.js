import React from "react";
import { useState } from "react";
import './Navbar.css'
import { Link, NavLink } from "react-router-dom";
const Navbar = () => {
  let Links = [
    { name: "HOME", link: "/" },
    { name: "ABOUT", link: "/about" },

  ];
  let [open, setOpen] = useState(false);

  return (
    <div>
      <div className="shadow-md w-full fixed top-0 left-0 z-50">
        <div className="md:flex items-center justify-between bg-nav py-4 md:px-10 px-7">
          <Link to={'/'}
            className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
    text-gray-800"
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
            className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-nav md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
              open ? "top-16 " : "top-[-490px]"
            }`}
          >
            {Links.map((link) => (
              <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7">
                <NavLink
                  to={link.link}
                  className="text-gray-800 hover:text-gray-400 duration-500"
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
