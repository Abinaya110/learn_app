import React, {useState} from 'react'
import './Register.css';
import Button from '@mui/material/Button';


function Register() {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirm, setConfirm] = useState("")


  const handleSubmit=(e)=>{
   e.preventDefault()
    if(!name){
      alert("no name")
    }
    else if(!email){
      alert("no email")
    } 
    else if(!password){
      alert("no password")
    } 
    else if(!confirm){
      alert("no password")
    }
   else if(password != confirm){
    alert(" password mismatch")
   }
   else{
    console.log("passwoed matched")
    fetch(`http://192.168.1.127:5000/register`,{
      method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          email: email,
          password: password
          }),
    }).then(response => response.json())
    .then(data =>{
      console.log(data)
      console.log("done")
    } )
    .catch(err => console.error(err));
   }
  }

  return (
    <div className="Reg"><br/>
      <h3 color='red'>REGISTRATION FORM</h3>
      <form className='form'>

      <label>Name: </label>
      <input type="text" 
        placeholder="Enter name" 
        value={name}
        onChange={e => 
          setName(e.target.value)} >
      </input><br/><br/>
      
      <label>Email: </label>
      <input type="email" 
        placeholder="Email id" 
        value={email}
        onChange={e =>
          setEmail(e.target.value)}>
      </input><br/><br/>
      
      <label>Password: </label>
      <input type="password" 
        placeholder="Enter Password" 
        value={password}
        onChange={e => 
          setPassword(e.target.value)}>
      </input><br/><br/>
      
      <label>Confirm Password </label>
      <input type="password" 
        placeholder="Confirm password" 
        value={confirm}
        onChange={e => 
          setConfirm(e.target.value)}>
      </input><br/><br/>
      
      <Button size="small" variant="outlined" onClick={handleSubmit}>Submit</Button>
      <br/>
      </form>
    </div>
  );
}

export default Register;