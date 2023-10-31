import React from 'react';
import { Box} from "@mui/material";
import LoginPage from './LoginPage';
const NewLogin = () => {
  return (
    <Box
      sx={{
        bgcolor: "#000",
        height: "100vh",
        display: "flex",
        flexDirection: 'column',
        alignItems: "center",
        justifyContent:'center'
      }}
    >
      <LoginPage/>
    </Box>
  )
}

export default NewLogin