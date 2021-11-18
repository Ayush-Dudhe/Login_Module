import React, { useState, Component } from 'react'
import GoogleLogin from 'react-google-login'
import Axios from 'axios'
import './styles/login.css'


function Login1() {


 //States used to store the registration details

 const [userEmailReg, setUserEmailReg] = useState('')
 const [nameReg, setNameReg] = useState('')
 const [userPasswordReg, setUserPasswordReg] = useState('')


  //States used to store the login details

 const [email, setEmail] = useState("")  
 const [password, setPassword] = useState("")  

  //handlelogin function --> Used to fetch the details from google login API

    const handleLogin = async googleData => {
        
        const res = await fetch("http://localhost:8081/api/v1/auth/google", {
            method: "POST",
            body: JSON.stringify({
            token: googleData.tokenId
          }),
          headers: {
            "Content-Type": "application/json"
          }
        })
        // const data = await res.json()
      
        alert("Success")
      }
    
     //handelogout function --> Used to fetch the details from logout API

     const handleLogout = async googleData => {
        
        const res = await fetch("http://localhost:8081/api/v1/auth/logout", {
            method: "GET",
            
          headers: {
            "Content-Type": "application/json"
          }
        })
        // const data = await res.json()
        // store returned user somehow
        alert("Logout Success")
      }

     
     //register function --> Used to fetch the details from register API

      const register = () =>{
          Axios.post('http://localhost:8081/register', {
              email: userEmailReg,
              name: nameReg,
              password: userPasswordReg
            }).then((response) => {
                console.log(response);
                alert('Registration Successful')
            })
      }


     //login function --> Used to fetch the details from login API

      const Login = () =>{
        Axios.post('http://localhost:8081/login', {
            email: email,
            password: password,
          }).then((response) => {
              console.log(response);
          })
    }

    return (

      //Registration , Login and Google Login modules

        <div>  

      <div className="registration">
        <h1>Registration</h1>
        <label>Email</label>
        <input type="email" onChange={(e) => {setUserEmailReg(e.target.value)}}/>
        <label>Name</label>
        <input type="text" onChange={(e) => {setNameReg(e.target.value)}}/>
        <label>Password</label>
        <input type="text" onChange={(e) => {setUserPasswordReg(e.target.value)}}/>

        <button onClick ={register}>Register</button>
      </div>

      <div className="login">
        <h1>Sign IN</h1>
        <input type="email" placeholder="Email" onChange={(e) => {setEmail(e.target.value)}}/>
        <input type="text" placeholder="Password" onChange={(e) => {setPassword(e.target.value)}}/>
        <button onClick={Login}>Sign In</button>
      </div>

      <div className="googleLogin"> 
        < GoogleLogin

        clientId="881458096689-beugkqj0c83vf7qspd114bgj979hsq4f.apps.googleusercontent.com"
        buttonText="Login with Google"
        onSuccess={handleLogin}
        onFailure={handleLogin}
        cookiePolicy={'single_host_origin'}

        />
      </div>

      {/* <div className="logout"> 

        <button onClick= {handleLogout}>Logout</button>

      </div> */}
      </div>
    )
}

export default Login1;
