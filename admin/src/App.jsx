import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import { Routes, Route } from 'react-router-dom';
import Add from './pages/Add';
import List from './pages/List';
import Orders from './pages/Orders';
import Login from './components/Login';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const backendUrl = import.meta.env.VITE_BACKEND_URL;
export const currency = '€';

const App = () => {
  // State to manage admin authentication token
  const [token, setToken] = useState(
    localStorage.getItem('token') ? localStorage.getItem('token') : ''
  );

  // Sync token to localStorage when it changes
  useEffect(() => {
    localStorage.setItem('token', token);
  }, [token]);

  return (
    <div className="bg-light min-vh-100">
      {/* Toast notifications */}
      <ToastContainer />

      {/* If no token (not logged in), show login page */}
      {token === '' ? (
        <Login setToken={setToken} />
      ) : (
        <>
          {/* Navbar */}
          <Navbar setToken={setToken} />
          <hr className="my-0" />

          {/* Sidebar and main content area */}
          <div className="d-flex w-100">
            <Sidebar />
            <main className="flex-grow-1 p-4">
              <Routes>
                <Route path="/add" element={<Add token={token} />} />
                <Route path="/list" element={<List token={token} />} />
                <Route path="/orders" element={<Orders token={token} />} />
              </Routes>
            </main>
          </div>
        </>
      )}
    </div>
  );
};

export default App;
