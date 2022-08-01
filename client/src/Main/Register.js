import React, { useState } from "react";
import "./Register.css";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";
import Home from "./Home";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      alert("Name Required!");
    } else if (!email) {
      alert("No email");
    } else if (!age) {
      alert("Age Required!");
    }
    else if (!password) {
      alert("No password!");
    } else if (!confirm) {
      alert("No confirm password!");
    } else if (password !== confirm) {
      alert("Password mismatch");
    } else {
      console.log("Password matched");

      fetch(`http://localhost:5000/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          email: email,
          age:age,
          password: password,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          console.log("done");
          alert("Successfully Registered!!!");
          navigate("/login");
        })
        .catch((err) => console.error(err));
    }
  };



  return (
    <div>
      {/* <Home /> */}

      <div className="Reg">
        <br />
        <h3 style={{ color: "#9C27B0" }}>REGISTRATION FORM</h3>
        <form className="form">
          <label>Name: </label>
          <br />
          <input
            type="text"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
          <br />
          <br />

          <label>Email: </label>
          <br />
          <input
            type="email"
            placeholder="Email id"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <br />
          <br />

          <label>Age: </label>
          <br />
          <input
           
            placeholder="Enter your Age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
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

          <label>Confirm Password: </label>
          <br />
          <input
            type="password"
            placeholder="Confirm password"
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
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
            Already an user?
            <Link to="/login"> Login</Link>
            <br />
            <br />
          </span>
        </form>
      </div>
    </div>
  );
}

export default Register;
