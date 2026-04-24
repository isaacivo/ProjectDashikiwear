import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import { useLocation } from 'react-router-dom';

const SearchBar = () => {
  const location = useLocation();
  const [visible, setVisible] = useState(false);
  const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext);

  useEffect(() => {
    if (location.pathname.includes('collections') && showSearch) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [location, showSearch]);

  return showSearch && visible ? (
    <div className="border-top border-bottom bg-light py-3 text-center">
      <div className="d-inline-flex align-items-center border border-secondary rounded-pill px-3 py-2 w-75 w-sm-50 mx-auto">
        <input
          type="text"
          className="form-control border-0 bg-transparent me-2"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ boxShadow: 'none' }}
        />
        <img src={assets.search_icon} alt="Search" width="16" height="16" />
      </div>
      <img
        src={assets.cross_icon}
        alt="Close"
        width="12"
        height="12"
        className="ms-3 cursor-pointer"
        onClick={() => setShowSearch(false)}
        style={{ cursor: 'pointer' }}
      />
    </div>
  ) : null;
};

export default SearchBar;
