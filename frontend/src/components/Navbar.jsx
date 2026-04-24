import React, { useContext, useState, useEffect, useRef } from 'react';
import { assets } from '../assets/assets';
import { Link, NavLink } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const dropdownRef = useRef();

  const {
    setShowSearch,
    getCartCount,
    navigate,
    token,
    setToken,
    setCartItems
  } = useContext(ShopContext);

  // Logout function
  const logout = () => {
    navigate('/login');
    localStorage.removeItem('token');
    setToken('');
    setCartItems({});
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="navbar navbar-expand-lg px-3 px-md-5 custom-navbar">
      <div className="container-fluid">

        {/* Logo */}
        <Link to="/" className="navbar-brand">
          <img src={assets.logo} alt="Logo" className="logo-img" />
        </Link>

        {/* Toggle (Mobile) */}
        <button
          className="navbar-toggler border-0"
          type="button"
          onClick={() => setVisible(!visible)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Links */}
        <div className={`collapse navbar-collapse ${visible ? 'show' : ''}`}>
          <ul className="navbar-nav mx-auto">

            <li className="nav-item">
              <NavLink to="/" className="nav-link custom-link">HOME</NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/collections" className="nav-link custom-link">COLLECTION</NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/about" className="nav-link custom-link">ABOUT</NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/contact" className="nav-link custom-link">CONTACT</NavLink>
            </li>

          </ul>
        </div>

        {/* Right Side */}
        <div className="d-flex align-items-center gap-3">

          {/* Search */}
          <img
            src={assets.search_icon}
            alt="Search"
            className="nav-icon"
            onClick={() => {
              setShowSearch(true);
              navigate('/collections'); // ✅ fixed
            }}
          />

          {/* Profile */}
          <div className="position-relative" ref={dropdownRef}>
            <img
              src={assets.profile_icon}
              alt="Profile"
              className="nav-icon"
              onClick={() => {
                if (!token) {
                  navigate('/login');
                } else {
                  setShowDropdown(!showDropdown);
                }
              }}
            />

            {token && showDropdown && (
              <ul className="dropdown-menu show dropdown-menu-end mt-2 custom-dropdown">
                <li>
                  <p
                    className="dropdown-item"
                    onClick={() => {
                      navigate('/profile');
                      setShowDropdown(false);
                    }}
                  >
                    My Profile
                  </p>
                </li>
                <li>
                  <p
                    className="dropdown-item"
                    onClick={() => {
                      navigate('/orders');
                      setShowDropdown(false);
                    }}
                  >
                    Orders
                  </p>
                </li>
                <li>
                  <p
                    className="dropdown-item text-danger"
                    onClick={logout}
                  >
                    Logout
                  </p>
                </li>
              </ul>
            )}
          </div>

          {/* Cart */}
          <Link to="/cart" className="position-relative">
            <img src={assets.cart_icon} alt="Cart" className="nav-icon" />
            <span className="cart-badge">
              {getCartCount()}
            </span>
          </Link>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;