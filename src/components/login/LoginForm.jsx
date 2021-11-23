import firebase from 'firebase/compat/app';
import {GoogleAuthProvider, getAuth} from 'firebase/compat/auth';
import 'firebase/compat/firestore';   
import { makeStyles, Link } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import {Homepage} from '../Homepage'
import GoogleLogin from 'react-google-login'
import { InputLabel } from '@mui/material';

// import { connect } from "react-redux";
import StyledTextField from "../../LoginComponents/src/components/atoms/StyledTextField";
import { StyledButton } from "../../LoginComponents/src/components/MaterialUIStyledComponents/StyledButton";
import ReCAPTCHA from "react-google-recaptcha";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  useNavigate,
} from "react-router-dom";



const useStyles = makeStyles((theme) => ({
  typography: {
    fontWeight: "normal",
  },
  linkButton: {
    color: "#252733",
  },
  reCaptchaDiv: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "1vh",
  },
}));



export const LoginForm = (props) => {
  const { handleForgotPassword, showAlert } = props;
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [disableLogin, setDisableLogin] = useState(true);

  const provider = new firebase.auth.GoogleAuthProvider();

  var navigate = useNavigate();



  // sign-in with email and password
  const handleSubmit = (event) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, pwd)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        // showAlert(true, false, "Login Successful");
        navigate("/homepage");
        alert("Login Successful");
        
              
        // console.log("signInWithEmailAndPassword",userCredential)
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        // showAlert(true, true, error.message);
        alert("Login Failed");
        console.log(error);
      });
  };

  
  // sign-in with google pop-up
  const handleGoogleLogin = (event) => {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function (result) {
        // This gives you a Google Access Token.
        // console.log("result", JSON.stringify(result));
        const token = result.credential.accessToken;
        // const token = result.user.stsTokenManager;
        console.log("token",token)
        // console.log("access token",token)
        // The signed-in user info.
        const user = result.user;
        // console.log("user details",user)
        // showAlert(true, false, "Login Successful");
        navigate("/homepage");
        alert("Login Successful");      
             
      })
      .catch(function (error) {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // showAlert(true, true, error.message);
        alert("Login Failed");
        // The email of the user's account used.
        const email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        const credential = error.credential;
      });
  };
  // to get reCaptcha score
  const onChange = (value) => {
    value ? setDisableLogin(false) : setDisableLogin(true);
  };
  return (
    <div>
      <h1 style={{ marginBottom: "3vh" }}>Login</h1>
      <StyledButton
        onClick={handleGoogleLogin}
        style={{
          background: "#DC4A38",
        }}
      >
        Login with Google
      </StyledButton>
      <h3
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          fontWeight: 350,
          fontSize: "0.75rem",
          lineHeight: "16px",
          marginTop: "3vh",
        }}
      >
        OR
      </h3>
      <h3 className={classes.typography}>Email ID</h3>
      <div style={{ marginRight: "4vh" }}>
        <StyledTextField
          placeholder="Type your ID"
          type="email"
          value={email}
          onInputChange={setEmail}
          fullwidth
          autofocus={true}
        />
      </div>
      <h3 className={classes.typography}>Password</h3>
      <div style={{ marginRight: "4vh" }}>
        <StyledTextField
          placeholder="password"
          type="password"
          value={pwd}
          onInputChange={setPwd}
        />
      </div>
      <h7
        style={{ justifyContent: "flex-end", display: "flex", padding: "2vh" }}
      >
        {/* <Link
          component="button"
          classes={{ button: classes.linkButton }}
          onClick={handleForgotPassword}
        >
          Forgot Password
        </Link> */}
      </h7>
      {/* <div className={classes.reCaptchaDiv}>
        <ReCAPTCHA
          sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
          onChange={onChange}
        />
      </div> */}
      <StyledButton onClick={handleSubmit} >
        Login
      </StyledButton>
    </div>
  );
};

// const mapStateToProps = (state) => ({});

// const mapDispatchToProps = {};

export default LoginForm;
