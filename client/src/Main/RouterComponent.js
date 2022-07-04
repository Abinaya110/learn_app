import React from 'react'
import {BrowserRouter as Router,Route, Routes} from "react-router-dom";
import Register from './Register';
import Login from './Login';
import Home from './Home';

const RouterComponent = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/register" element={<Register />} />
            
          <Route path="/login" element={<Login />} />

            
        </Routes>
      </Router>
    </div>
  )
}

export default RouterComponent