import React, {useState} from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Redirect,
} from "react-router-dom";

import Login from './components/Login'
import Homepage from './components/Homepage'


const App = () => {
  return (
    <Router>
      {/* <div> */}
        <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/homepage" element={<Homepage />} />
        </Routes>
      {/* </div> */}
     </Router>
  )
}

export default App
