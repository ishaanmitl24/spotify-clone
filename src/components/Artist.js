import React from 'react';
import {Box,Typography} from '@mui/material';
import { NavLink } from 'react-router-dom';
import classes from './Artist.module.css';

const Artist = (props) => {
  return (
    <Box className={classes.link} px={4}  sx={{position:"relative",display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}} pt={2}>
        <Typography  sx={{fontSize:"30px",fontWeight:600,color:"#fff",letterSpacing:"0.04em"}}>{props.name}</Typography>
        <Typography><NavLink to={`${props.type}`}>Show all</NavLink></Typography>
    </Box>
  )
}

export default Artist