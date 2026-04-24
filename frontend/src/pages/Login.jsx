import React, { useState, useContext } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Paper,
  Avatar,
  Grid,
  Link,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import axios from "axios";
import { ShopContext } from "../context/ShopContext";
import { useNavigate, Link as RouterLink } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { backendUrl, setToken } = useContext(ShopContext);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        `${backendUrl}/api/user/login`,
        {
          email,
          password,
        }
      );

      if (response.data.success) {
        // Save token
        localStorage.setItem("token", response.data.token);
        setToken(response.data.token);

        console.log("Login success");

        // Redirect
        navigate("/");
      } else {
        alert(response.data.message);
      }

    } catch (error) {
      console.error(error);
      alert("Login failed. Check credentials.");
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fdf8f3",
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
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          
          <Avatar sx={{ m: 1, bgcolor: "#e6b980", color: "#fff" }}>
            <LockOutlinedIcon />
          </Avatar>

          <Typography
            variant="h5"
            sx={{
              fontFamily: "Playfair Display, serif",
              color: "#5a3e2b",
              mb: 2,
            }}
          >
            Welcome Back
          </Typography>

          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1, width: "100%" }}>

            <TextField
              margin="normal"
              fullWidth
              required
              label="Email Address"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <TextField
              margin="normal"
              fullWidth
              required
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

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
              Log In
            </Button>

            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2" sx={{ color: "#7a6a5c" }}>
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link
                  component={RouterLink}
                  to="/signup"
                  variant="body2"
                  sx={{ color: "#a47148", fontWeight: 500 }}
                >
                  Sign Up
                </Link>
              </Grid>
            </Grid>

          </Box>
        </Box>
      </Paper>
    </Box>
  );
}