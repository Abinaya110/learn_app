import React from 'react'
import {BrowserRouter as Router,Route, Routes} from "react-router-dom";
import Register from './Register';
import Login from './Login';
import Home from './Home';
import Apppage from './Apppage';

const RouterComponent = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/mypage" element={<Apppage />} />
            
        </Routes>
      </Router>
    </div>
  )
}

export default RouterComponent