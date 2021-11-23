import React from 'react'
import { StyledButton } from "../LoginComponents/src/components/MaterialUIStyledComponents/StyledButton";
import {
    useNavigate,
  } from "react-router-dom";



const Homepage = () => {

    var navigate = useNavigate();
    const handleLogout = (event) => {
        
            navigate("/login");
            // alert("Logout Successful")
      };


    return (
        <div>
            Homepage is here!!!!
            <StyledButton onClick={handleLogout} >
        Logout
      </StyledButton>
        </div>
    )
}



export default Homepage
