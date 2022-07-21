import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const home = () => {
    navigate("/");
  };

  const register = () => {
    navigate("/register");
  };

  const login = () => {
    navigate("/login");
  };

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="flex-start"
        >
          <Grid item xs={9}>
            <Button onClick={home}>Home</Button>
          </Grid>

          <Grid item xs={2}>
            <Button onClick={register}>Register</Button>
          </Grid>

          <Grid item xs={1}>
            <Button onClick={login}>Login</Button>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
