import React from "react";
import { Box} from "@mui/material";
import SignUpPage from "./SignUpPage";
const NewSignUp = () => {
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
      <SignUpPage/>
    </Box>
  );
};

export default NewSignUp;
