import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
      <div className="logo" >
        <Link to="/women">CSTM</Link>
      </div>
        <ul className="nav-links">
          {/* <li>
            <Link to="/">Home</Link>
          </li> */}
          <li>
            <NavLink to="/women" className={({isActive}) => isActive ? "active-link" : ""}>Women</NavLink>
          </li>
          <li>
            <NavLink to="/men" className={({isActive}) => isActive ? "active-link" : ""}>Men</NavLink>
          </li>
          <li>
            <NavLink to="/kids" className={({isActive}) => isActive ? "active-link" : ""}>Kids</NavLink>
          </li>
          
          <li>
            <NavLink to="/cart" className={({isActive}) => isActive ? "active-link" : ""}>Cart (0)</NavLink>
          </li>
          {/* <li>
            <Link to="/baby">Baby</Link>
          </li> */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;