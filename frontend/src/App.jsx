import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Cart from './pages/Cart';
import ProductCollection from './pages/ProductCollection';
import Product from './pages/Product';
import PlaceOrder from './pages/PlaceOrder';
import Orders from './pages/Orders';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Verify from './pages/Verify';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SearchBar from './components/SearchBar';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './index.css';

const App = () => {
  return (
    <div>
      <ToastContainer />

      <Navbar />
      <SearchBar />

      <Routes>
        <Route path="/" element={<Home />} />

        {/* Auth */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

        {/* Shop */}
        <Route path="/collections" element={<ProductCollection />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/cart" element={<Cart />} />

        {/* Orders */}
        <Route path="/place-order" element={<PlaceOrder />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/verify" element={<Verify />} />

        {/* Info */}
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;