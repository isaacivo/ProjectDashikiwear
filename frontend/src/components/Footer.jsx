import React from 'react';
import { assets } from '../assets/assets';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer-container mt-5 pt-5">
      
      <div className="container">
        <div className="row gy-5 mb-4">

          {/* Brand Section */}
          <div className="col-12 col-md-6">
            <img
              src={assets.logo}
              alt="Dashikiwear"
              className="mb-3 footer-logo"
            />

            <p className="footer-text">
              Dashikiwear celebrates the richness of African culture through
              modern, stylish, and authentic fashion. Our collections blend
              tradition with contemporary design, allowing you to express
              confidence, identity, and heritage with every outfit.
            </p>
          </div>

          {/* Shop Links */}
          <div className="col-6 col-md-3">
            <h5 className="footer-title">SHOP</h5>
            <ul className="list-unstyled">
              <li><Link to="/collections" className="footer-link">All Collections</Link></li>
              <li><Link to="/collections" className="footer-link">Women</Link></li>
              <li><Link to="/collections" className="footer-link">Men</Link></li>
              <li><Link to="/collections" className="footer-link">Accessories</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div className="col-6 col-md-3">
            <h5 className="footer-title">COMPANY</h5>
            <ul className="list-unstyled">
              <li><Link to="/" className="footer-link">Home</Link></li>
              <li><Link to="/about" className="footer-link">About Us</Link></li>
              <li><Link to="/contact" className="footer-link">Contact</Link></li>
              <li><Link to="/privacy" className="footer-link">Privacy Policy</Link></li>
            </ul>
          </div>

        </div>

        {/* Bottom */}
        <div className="footer-bottom text-center">
          <p>
            &copy; 2026 Dashikiwear — Crafted with culture, style, and identity.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;