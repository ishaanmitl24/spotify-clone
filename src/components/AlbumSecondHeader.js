import React from 'react';
import { Box, Button } from "@mui/material";
import { PlayArrow, MoreHoriz,FavoriteBorderOutlined,Download } from "@mui/icons-material";
const AlbumSecondHeader = () => {
  return (
    <Box px={4} pb={2}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: 2,
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <button
          style={{
            backgroundColor: "#1ED760",
            borderRadius: "50%",
            outline: "none",
            border: "none",
            padding: "0.5rem 0.6rem",
            cursor: "pointer",
          }}
        >
          <PlayArrow sx={{ fontSize: "35px" }} />
        </button>
        <Button
          variant="contained"
          sx={{
            color: "grey",
            background: "transparent",
            px:0,
            boxShadow: "none",
            "&.MuiButton-root:hover": {
              color: "white",
              background: "transparent",
              boxShadow: "none",
            },
          }}
        >
          <FavoriteBorderOutlined sx={{fontSize:"40px"}}/>
        </Button>
        <Button
          variant="contained"
          sx={{
            color: "grey",
            background: "transparent",
            boxShadow: "none",
            px:0,
            "&.MuiButton-root:hover": {
              color: "white",
              background: "transparent",
              boxShadow: "none",
            },
          }}
        >
          <Download sx={{fontSize:"40px"}} />
        </Button>
        <Button
          variant="contained"
          sx={{
            color: "grey",
            background: "transparent",
            boxShadow: "none",
            px:0,
            "&.MuiButton-root:hover": {
              color: "white",
              background: "transparent",
              boxShadow: "none",
            },
          }}
        >
          <MoreHoriz />
        </Button>
      </Box>
    </Box>
  )
}

export default AlbumSecondHeader;