import axios from "axios";
import React, { useState } from "react";
import { backendUrl } from "../App";
import { toast } from "react-toastify";

const Login = ({ setToken }) => {
  // State variables to hold email and password input values
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Function to handle form submission
  const onSubmitHandler = async (e) => {
    e.preventDefault(); // Prevent default form behavior (page reload)
    try {
      // Make a POST request to admin login API endpoint
      const response = await axios.post(backendUrl + "/api/user/admin", {
        email,
        password,
      });
      if (response.data.success) {
        // If login is successful, set the admin token
        setToken(response.data.token);
      } else {
        // If login fails, display an error message
        toast.error(response.data.message);
      }
    } catch (error) {
      // If there's a server error, display an error message
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    <div className="d-flex align-items-center justify-content-center min-vh-100 bg-light">
      {/* Login card container */}
      <div
        className="card p-4 shadow-sm"
        style={{ maxWidth: "400px", width: "100%" }}
      >
        {/* Page heading */}
        <h2 className="mb-4 text-center">Admin Panel</h2>

        {/* Login form */}
        <form onSubmit={onSubmitHandler}>
          {/* Email input field */}
          <div className="mb-3">
            <label htmlFor="email" className="form-label text-muted">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              className="form-control"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Password input field */}
          <div className="mb-3">
            <label htmlFor="password" className="form-label text-muted">
              Password
            </label>
            <input
              id="password"
              type="password"
              className="form-control"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Submit button */}
          <div className="d-grid">
            <button type="submit" className="btn btn-dark">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
