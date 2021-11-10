import {
  Container,
  Grid,
  Box,
  Typography,
  TextField,
  Button,
  CircularProgress,
  Alert,
  AlertTitle,
} from "@mui/material";
import React, { useState } from "react";
import "./Login.css";
import { Link, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";

const Login = () => {
  const [loginData, setLoginData] = useState({});
  const { user, signInUsingEmail, isLoading, signInUsingGoogle } = useAuth();

  // Location, History
  const location = useLocation();
  const history = useHistory();

  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };

  const handleLoginSubmit = (e) => {
    signInUsingEmail(loginData.email, loginData.password, location, history);
    e.preventDefault();
    e.target.reset();
  };

  const handleGoogleSignIn = () => {
    signInUsingGoogle(location, history);
  };

  return (
    <>
      <Container className="min-vh-100">
        <Grid sx={{ height: "70vh", py: 5, my: 4 }} container spacing={2}>
          <Grid
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "left",
              height: "100%",
            }}
            item
            xs={12}
            sm={12}
            md={12}
          >
            <Typography
              sx={{ color: "#00b894" }}
              variant="h4"
              gutterBottom
              component="div"
            >
              Login
            </Typography>

            <Box sx={{ boxShadow: 2, p: 2, borderRadius: 1, my: 2 }}>
              <form onSubmit={handleLoginSubmit}>
                <TextField
                  sx={{ width: "100%", my: 1 }}
                  id="standard-basic"
                  label="Your Email"
                  variant="standard"
                  type="email"
                  name="email"
                  onChange={handleOnChange}
                  required
                />
                <TextField
                  sx={{ width: "100%", my: 1 }}
                  id="standard-password-input"
                  label="Password"
                  type="password"
                  autoComplete="current-password"
                  variant="standard"
                  name="password"
                  onChange={handleOnChange}
                  required
                />

                <Button
                  className="main-btn"
                  type="submit"
                  sx={{
                    color: "#fff",
                    letterSpacing: "1px",
                    fontSize: "18px",
                    padding: "13px 30px 9px 30px",
                    background:
                      "linear-gradient(45deg, rgba(29, 209, 161,0.8), rgba(72, 219, 251,1.0) )",
                    border: "none",
                    my: 2,
                    transition: "0.3s ease",
                    width: 1,
                  }}
                >
                  Login
                </Button>

                <Link
                  sx={{ textDecoration: "none", color: "#55efc4" }}
                  to="/register"
                >
                  <Button sx={{ color: "#00b894" }} variant="text">
                    New User? Please Register
                  </Button>
                </Link>
                {isLoading && <CircularProgress />}
                {user?.email && (
                  <Alert severity="success">
                    <AlertTitle>Success</AlertTitle>
                    You have successfully — <strong>Logged In</strong>
                  </Alert>
                )}
              </form>
              <div className="text-center">
                ---------------Or---------------
              </div>
              <Button
                onClick={handleGoogleSignIn}
                className="main-btn"
                sx={{
                  color: "#fff",
                  letterSpacing: "1px",
                  fontSize: "18px",
                  padding: "13px 30px 9px 30px",
                  background:
                    "linear-gradient(45deg, rgba(29, 209, 161,0.8), rgba(72, 219, 251,1.0) )",
                  border: "none",
                  my: 2,
                  transition: "0.3s ease",
                  width: 1,
                }}
              >
                Google Sign In
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Login;
