import React from 'react';
import { assets } from '../assets/assets';

const Navbar = ({ setToken }) => {
  return (
    <nav className="d-flex align-items-center justify-content-between py-2 px-4 border-bottom">
      {/* Logo */}
      <img
        src={assets.logo}
        alt="Logo"
        className="img-fluid"
        style={{ maxWidth: '80px', width: '10%' }}
      />

      {/* Logout Button */}
      <button
        onClick={() => setToken('')}
        className="btn btn-secondary btn-sm px-3 py-1 text-white rounded-pill"
      >
        Logout
      </button>
    </nav>
  );
};

export default Navbar;
