import React, { useState } from "react";
import { connect } from "react-redux";
import logo from "../assets/src/assets/header-logo.png";
import login from "../assets/src/assets/BackgroundLogin.PNG";
import LoginBigScreen from "../assets/src/assets/BackgroundLogin.PNG";
import "./login.css";
import { Grid, makeStyles, Paper } from "@material-ui/core";
import LoginForm from "./login/LoginForm";
// import ForgotPassword from "./components/ForgotPassword";
// import ResetPassword from "./components/ResetPassword";
// import Alerts from "../../components/atoms/Alerts";

const useStyles = makeStyles((theme) => ({
  loginPaper: {
    background: "linear-gradient(135deg, #EAEAEA 0%, #FFFFFF 100%)",
    borderRadius: "10px",
    width: "36vw",
  },
}));

export const Login = (props) => {
  const { handleLogin } = props;
  const classes = useStyles();
  const [forgotPwdView, setForgotPwdView] = useState(false);

  const [alert, setAlert] = useState({
    open: false,
    msg: "",
    err: false,
  });

  const showAlert = (open, err, msg) => {
    setAlert({
      ...alert,
      open: open,
      err: err,
      msg: msg,
    });
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setAlert({
      ...alert,
      open: false,
    });
  };

  const handleForgotPasswordView = () => {
    setForgotPwdView(!forgotPwdView);
  };
  return (
    <div>
      <div>
        <Grid container>
          <Grid item xs={7}>
            {/* Top left corner logo */}
            {/* <img src={logo} alt="Qognition" className="logoLogin" /> */}
            {/* Loginpage banner */}
            <picture>
              <source media="(min-width:500vh)" srcSet={LoginBigScreen} />
              <img
                src={login}
                alt="Dexter"
                style={{width:"auto", height: "100vh"}}
              />
            </picture>
          </Grid>
          <Grid item xs={5}>
            <div style={{ paddingTop: "5vh" }}>
              <Paper className={classes.loginPaper}>
                <div style={{ padding: "5vh" }}>
                  {/* {window.location.pathname === "/reset-password" ? (
                    <ResetPassword />
                  ) : forgotPwdView ? (
                    <ForgotPassword handleLogin={handleForgotPasswordView} />
                  ) : ( */}
                  
                    <LoginForm
                      handleForgotPassword={handleForgotPasswordView}
                      showAlert={showAlert}
                      handleLogin={handleLogin}
                    />
                  
                </div>
              </Paper>
            </div>
          </Grid>
        </Grid>
      </div>
      {/* {alert.open ? (
        <Alerts
          open={alert.open}
          msg={alert.msg}
          err={alert.err}
          handleClose={handleClose}
        />
      ) : (
        <></>
      )} */}
    </div>
  );
};

// const mapStateToProps = (state) => ({});

// const mapDispatchToProps = {};

export default Login;
