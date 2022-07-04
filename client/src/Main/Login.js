import React, { useState } from "react";
import "./Register.css";
import Button from "@mui/material/Button";
import Home from "./Home";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      alert("No email");
    } else if (!password) {
      alert("No password");
    } else {
      console.log("Welcome user");
      fetch(`http://localhost:5000/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Login Success");
          alert("Login Successfully!!!");
          navigate("/mypage");
        })
        .catch((err) => console.error(err));
    }
  };

  return (
    <div>
      <Home />
      <div className="Reg">
        <br />
        <h3 style={{ color: "#9C27B0" }}>LOGIN PAGE</h3>
        <form className="form">
          <label>Email id: </label>
          <br />
          <input
            type="email"
            placeholder="Email id"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <br />
          <br />

          <label>Password: </label>
          <br />
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <br />
          <br />

          <Button
            size="small"
            color="secondary"
            variant="contained"
            onClick={handleSubmit}
          >
            Submit
          </Button>
          <br />
          <br />
          <span style={{ fontStyle: "italic" }}>
            New user?
            <Link to="/register"> Register</Link>
            <br />
            <br />
          </span>
        </form>
      </div>
    </div>
  );
}

export default Login;
