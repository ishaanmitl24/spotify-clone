import React,{useEffect} from 'react';
import {Box,Avatar, Typography,Button} from '@mui/material';
import { useSelector } from 'react-redux';


const MainHeader = () => {
  const email = useSelector(state=>state.sign.email);
  return (
    <Box sx={{bgcolor:'#101010',display:'flex',flexDirection:"row-reverse",width:'100%',height:60}}>
        <Box sx={{display:'flex',flexDirection:'row',gap:2,alignItems:"center",pr:4}}>
            <Avatar sx={{width:30,height:30}} />
            <Typography sx={{color:'#fff'}}>{email}</Typography>
        </Box>
    </Box>
  )
}

export default MainHeader