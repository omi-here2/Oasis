import { Outlet, Link } from "react-router-dom";
import React from "react";
import "./Navbar.css"
const Navbar = () => {
  return (
    <>
      <nav>
        <div className="nav-menu">
          <h2><Link to={`/`}>Oasis</Link></h2>
          <ul className="list-item">
            <li>
              <Link to={`/home`}>Home</Link>
            </li>
            <li>
              <Link to={`/about`}>About</Link>
            </li>
            <li>
              <Link to={`/contact`}>Contact</Link>
            </li>
          </ul>
          <div className="btn">
            <button>
              <Link to={`/login`}>Login</Link>
            </button>
            <button>
              <Link to={`/Signup`}>Signup</Link>
            </button>
          </div>
        </div>
      </nav>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
};

export default Navbar;
