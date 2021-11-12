import React from "react";
import {
  Container,
  Grid,
  Box,
  Typography,
  TextField,
  Button,
  CircularProgress,
  AlertTitle,
  Alert,
} from "@mui/material";
import { useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";

const Register = () => {
  const [loginData, setLoginData] = useState({});

  // Location, History
  const location = useLocation();
  const history = useHistory();

  const { user, registerUser, isLoading, signInUsingGoogle } = useAuth();

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
    console.log(newLoginData);
  };

  const handleLoginSubmit = (e) => {
    if (loginData.password !== loginData.password2) {
      alert("Incorrect Password");
      return;
    }
    alert("User Registered Successfully");
    registerUser(loginData.email, loginData.password, loginData.name, history);
    // e.target.reset();
    e.preventDefault();
  };

  const handleGoogleSignIn = () => {
    signInUsingGoogle(location, history);
  };

  return (
    <>
      <Container className="min-vh-100 container py-5">
        <Grid sx={{ height: "70vh", py: 5, my: 4 }} container spacing={3}>
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
              sx={{ color: "#00b894", pt: 15 }}
              variant="h4"
              gutterBottom
              component="div"
            >
              Register
            </Typography>

            {!isLoading && (
              <Box sx={{ boxShadow: 2, p: 2, borderRadius: 1, my: 2 }}>
                <form onSubmit={handleLoginSubmit}>
                  <TextField
                    sx={{ width: "100%", my: 1 }}
                    id="standard-basic"
                    label="Your Name"
                    variant="standard"
                    name="name"
                    onBlur={handleOnBlur}
                    required
                  />

                  <TextField
                    sx={{ width: "100%", my: 1 }}
                    id="standard-basic"
                    label="Your Email"
                    variant="standard"
                    type="email"
                    name="email"
                    onBlur={handleOnBlur}
                    required
                  />

                  <TextField
                    sx={{ width: "100%", my: 1 }}
                    id="standard-password-input"
                    label="Password"
                    type="password"
                    name="password"
                    autoComplete="current-password"
                    variant="standard"
                    onBlur={handleOnBlur}
                    required
                  />

                  <TextField
                    sx={{ width: "100%", my: 1 }}
                    id="standard-password-input"
                    label="Re-enter Password"
                    type="password"
                    name="password2"
                    autoComplete="current-password"
                    variant="standard"
                    onBlur={handleOnBlur}
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
                    Register
                  </Button>

                  <Link
                    sx={{ textDecoration: "none", color: "#55efc4" }}
                    to="/login"
                  >
                    <Button sx={{ color: "#00b894" }} variant="text">
                      Already Registered? Please Login
                    </Button>
                  </Link>
                  {user?.email && (
                    <Alert severity="success">
                      <AlertTitle>Success</AlertTitle>
                      You have successfully — <strong>registered!</strong>
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
                  Google Sign Up
                </Button>
              </Box>
            )}
            {isLoading && <CircularProgress />}
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Register;
