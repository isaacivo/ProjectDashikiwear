import React from 'react';
import { NavLink } from 'react-router-dom';
import { assets } from '../assets/assets';

const Sidebar = () => {
  return (
    <div className="d-flex flex-column flex-shrink-0 p-3 border-end min-vh-100" style={{ width: '220px' }}>
      <div className="nav flex-column gap-3">

        <NavLink
          to="/add"
          className={({ isActive }) =>
            `d-flex align-items-center gap-2 p-2 border rounded-start ${isActive ? 'bg-warning' : 'bg-light'}`
          }
        >
          <img src={assets.add_icon} alt="Add" style={{ width: '20px', height: '20px' }} />
          <span className="d-none d-md-inline">Add Items</span>
        </NavLink>

        <NavLink
          to="/list"
          className={({ isActive }) =>
            `d-flex align-items-center gap-2 p-2 border rounded-start ${isActive ? 'bg-warning' : 'bg-light'}`
          }
        >
          <img src={assets.order_icon} alt="List" style={{ width: '20px', height: '20px' }} />
          <span className="d-none d-md-inline">List Items</span>
        </NavLink>

        <NavLink
          to="/orders"
          className={({ isActive }) =>
            `d-flex align-items-center gap-2 p-2 border rounded-start ${isActive ? 'bg-warning' : 'bg-light'}`
          }
        >
          <img src={assets.order_icon} alt="Orders" style={{ width: '20px', height: '20px' }} />
          <span className="d-none d-md-inline">Orders</span>
        </NavLink>

      </div>
    </div>
  );
};

export default Sidebar;
