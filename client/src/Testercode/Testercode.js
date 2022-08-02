import React,{useState} from 'react'

const Testercode = () => {
  const [name,setName]=useState()
  const [age,setAge]=useState()
  const [id,setId]=useState()
const send=()=>{
  fetch('http://localhost:5000/anya', {
  method: 'POST', // or 'PUT'
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    name:name,
    age:age,
    id:id
  }),
})
.then((response) => response.json())
.then((data) => {
  console.log('Success:', data);
})
.catch((error) => {
  console.error('Error:', error);
});
}
  return (
    <div>Testercode
        <div>

        <label>name:
        <input 
        value={name}
        onChange={(e)=>{setName(e.target.value)}}/>
        </label>


        <br/>
        <br/>
        <label>age:
        <input 
        value={age}
        onChange={(e)=>{setAge(e.target.value)}}/>
        </label>
        <br/>
        <br/>
        <label>id:
        <input
        value={id} 
        onChange={(e)=>{setId(e.target.value)}}/>
        </label>
        </div>

        <button onClick={send} >send</button>
    </div>
  )
}

export default Testercode