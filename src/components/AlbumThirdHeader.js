import React from 'react';
import { Box,Typography,Divider } from '@mui/material';
import { TimerOutlined } from '@mui/icons-material';
import { grey } from '@mui/material/colors';
const AlbumThirdHeader = () => {
  return (
    <Box sx={{display:'flex',flexDirection:"column",gap:2,justifyContent:"center",px:5,pt:2}}>
    <Box sx={{position:"relative",display:'flex',flexDirection:"row",justifyContent:"space-between"}}>
        <Box sx={{display:'flex',flexDirection:'row',gap:2}}>
            <Typography sx={{color:grey[400]}} >#</Typography>
            <Typography sx={{color:grey[400]}} >Title</Typography>
        </Box>
        <Box sx={{width:'60%',display:'flex',flexDirection:"row",justifyContent:'space-around'}}>
            <Typography sx={{color:grey[400]}}>Plays</Typography>
            <Typography sx={{color:grey[400]}}><TimerOutlined/></Typography>
        </Box>
    </Box>
    <Divider sx={{bgcolor:grey[700]}} />
    </Box>
  )
}

export default AlbumThirdHeader