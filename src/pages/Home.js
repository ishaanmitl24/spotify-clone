import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import Navigation from "../components/Navigation";
import { Box } from "@mui/material";


const Home = () => {
  const user = useSelector((state) => state.sign.user);
  
  return (
    <Box sx={{ display: "flex", flexDirection: "row" }}>
      <Navigation />
      <Box sx={{width:'100%'}}>
        <Outlet/>
      </Box>
    </Box>
  );
};

export default Home;
