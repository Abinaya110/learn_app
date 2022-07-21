// import { Button } from "@mui/material";
// import React, {useState} from "react";
// import "./Apppage.css";

// // const [data,setData] = useState(false)
// const data = [
//   { name: "Hema", age: 20 },
//   { name: "Priya", age: 19 },
//   { name: "Abi", age: 21 },
//   { name: "Dharshini", age: 22 },
// ] ;

// function Apppage() {
//   const handleShow = () => {
//     data(true)
//   };

//   const handleClose = (e) => {
//     e.preventDefault();
//   };

//   return (
//     <div>
//       <div>
//         <Button variant="contained" onClick={handleShow}>
//           Start
//         </Button>
//         <br />
//         <br />

//         <Button variant="contained" onClick={handleClose}>
//           Stop
//         </Button>
//       </div>

//       <div className="Apppage">
//         <table>
//           <tr>
//             <th>Name</th>
//             <th>Age</th>
//           </tr>
//           {data.map((val, key) => {
//             return (
//               <tr key={key}>
//                 <td>{val.name}</td>
//                 <td>{val.age}</td>
//               </tr>
//             );
//           })}
//         </table>
//       </div>
//     </div>
//   );
// }

// export default Apppage;
