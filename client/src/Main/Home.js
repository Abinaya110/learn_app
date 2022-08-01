import * as React from "react";
import Grid from "@mui/material/Grid";
import { Button, Menu } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import doctor from "./doctor.jpg";
import patient from "./patient.jpg";
import "./Home.css"
// import Menuside from "./Menuside"

export default function Home() {
  const navigate = useNavigate();

  const register = () => {
    navigate("/register");
  };

  const login = () => {
    navigate("/login");
  };
  

  return (
    <div>
      <section className="scene">
      {/* <div className="sun"></div> */}
      <div className="bg"></div>
     <div style={{ paddingTop: "15%" }}> 
      {/* <Menuside/> */}
      <div style={{ marginLeft:"22%" }}>
      <Grid
        container
        direction="row"
        justifyContent="space-evenly"
        alignItems="center"
      >

        <Grid item xs={6}>
          <Card sx={{ maxWidth: 350,position: "relative" }}>
              <img src={doctor}/>
           
            <CardActions>
              <Button onClick={login}>Login</Button>
            </CardActions>

          </Card>
        </Grid>

        <Grid item xs={6}>
        <Card sx={{ maxWidth: 350 ,position: "relative"}}>
            <div>
              <img src={patient}/>
            </div>

            <CardActions>
              <Button onClick={register}>Register</Button>
          <Button onClick={login}>Login</Button>
            </CardActions>
            
          </Card>
        </Grid>
      </Grid> 
       </div>
       </div>
    
    </section>
    </div>
  );
}
