import React, { useEffect } from "react";
import {
  Avatar,
  Button,
  Container,
  IconButton,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useInputValidation } from "6pp";
import { Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { adminLogin, getAdmin } from "../../redux/thunks/admin";

const AdminLogin = () => {
  const { isAdmin } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const secretKey = useInputValidation("");
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(adminLogin(secretKey.value));
    console.log("submitted");
  };

  useEffect(() => {
    dispatch(getAdmin());
  }, [dispatch]);
  if (isAdmin) return <Navigate to="/admin/dashboard" />;

  return (
    <div
      style={{
        backgroundImage:
          "linear-gradient(rgba(225, 22, 34, 0.65), rgba(120, 110, 220, 0.5))",
      }}
    >
      {/* <div style={{backgroundImage:'linear-gradient(90deg, #00C9FF 0%, #92FE9D 100%)'}}> */}
      <Container
        component={"main"}
        maxWidth="xs"
        sx={{
          height: "100vh",
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Paper
          elevation={3}
          sx={{
            padding: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {/* <span> */}

          <Typography variant="h5">Admin Login</Typography>
          <form
            style={{ width: "100%", marginTop: "1rem" }}
            onSubmit={submitHandler}
          >
            {/* <TextField
                    required
                    fullWidth
                    label="Username"
                    margin="normal"
                    variant="outlined"
                    value={username.value}
                    onChange={username.changeHandler}
                  /> */}
            <TextField
              required
              fullWidth
              label="Password"
              type="password"
              margin="normal"
              variant="outlined"
              value={secretKey.value}
              onChange={secretKey.changeHandler}
            />
            <Button
              sx={{ marginTop: "1rem" }}
              fullWidth
              variant="contained"
              color="primary"
              type="submit"
            >
              Login
            </Button>
            <Typography textAlign={"center"} m={"1rem"}>
              {/* OR */}
            </Typography>
            {/* <Button fullWidth variant="text" onClick={toggleLogin}>
                    Sign Up instead
                  </Button> */}
          </form>

          {/* </span> */}
        </Paper>
      </Container>
    </div>
  );
};

export default AdminLogin;
