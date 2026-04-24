import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const backendUrl = "http://localhost:4000";
import {
  Box,
  Button,
  TextField,
  Typography,
  Paper,
  Avatar,
  Grid,
  Link,
  Alert,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Link as RouterLink } from "react-router-dom";

export default function SignUp() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

const navigate = useNavigate();

const handleSubmit = async (event) => {
  event.preventDefault();

  const { fullName, email, password, confirmPassword } = formData;

  if (!fullName || !email || !password || !confirmPassword) {
    setError("Please fill in all fields.");
    return;
  }

  if (password !== confirmPassword) {
    setError("Passwords do not match.");
    return;
  }

  try {
    const response = await axios.post(
      "http://localhost:4000/api/user/register",
      {
        name: fullName,
        email,
        password,
      }
    );

    if (response.data.success) {
      localStorage.setItem("token", response.data.token);
      navigate("/");
    } else {
      setError(response.data.message);
    }

  } catch (error) {
    console.error(error);
    setError("Server error. Try again.");
  }
};

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fdf8f3", // same cream as login
      }}
    >
      <Paper
        elevation={0}
        sx={{
          padding: 5,
          width: 380,
          borderRadius: "16px",
          backgroundColor: "#fff",
          border: "1px solid rgba(0,0,0,0.05)",
          boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {/* Icon */}
          <Avatar
            sx={{
              m: 1,
              bgcolor: "#e6b980",
              color: "#fff",
            }}
          >
            <LockOutlinedIcon />
          </Avatar>

          {/* Title */}
          <Typography
            variant="h5"
            sx={{
              fontFamily: "Playfair Display, serif",
              color: "#5a3e2b",
              mb: 2,
            }}
          >
            Create Account
          </Typography>

          {/* Error */}
          {error && (
            <Alert severity="error" sx={{ mb: 2, width: "100%" }}>
              {error}
            </Alert>
          )}

          {/* Form */}
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1, width: "100%" }}>
            
            <TextField
              margin="normal"
              fullWidth
              required
              label="Full Name"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              variant="outlined"
            />

            <TextField
              margin="normal"
              fullWidth
              required
              label="Email Address"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              variant="outlined"
            />

            <TextField
              margin="normal"
              fullWidth
              required
              label="Password"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              variant="outlined"
            />

            <TextField
              margin="normal"
              fullWidth
              required
              label="Confirm Password"
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              variant="outlined"
            />

            {/* Button */}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 3,
                mb: 2,
                background: "linear-gradient(135deg, #e6b980, #c08a5b)",
                color: "#fff",
                borderRadius: "30px",
                fontWeight: 600,
                "&:hover": {
                  background: "linear-gradient(135deg, #d4a373, #a47148)",
                },
              }}
            >
              Sign Up
            </Button>

            {/* Links */}
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link
                  component={RouterLink}
                  to="/login"
                  variant="body2"
                  sx={{ color: "#a47148", fontWeight: 500 }}
                >
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>

          </Box>
        </Box>
      </Paper>
    </Box>
  );
}