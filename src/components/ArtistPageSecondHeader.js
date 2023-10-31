import React from "react";
import { Box, Button } from "@mui/material";
import { PlayArrow, MoreHoriz } from "@mui/icons-material";

const ArtistPageSecondHeader = () => {
  return (
    <Box px={4} pb={2}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: 3,
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
            fontWeight: 600,
            letterSpacing: "0.07em",
            transition: "0.3s",
            background: "transparent",
            boxShadow: "none",
            border: "1px solid grey",
            borderRadius: "30px",
            fontSize: "10px",
            px: "10px",
            "&.MuiButton-root:hover": {
              background: "transparent",
              borderColor: "white",
              fontSize: "12px",
              px: "12px",
            },
          }}
        >
          Follow
        </Button>
        <Button
          variant="contained"
          sx={{
            color: "grey",
            background: "transparent",
            boxShadow: "none",
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
  );
};

export default ArtistPageSecondHeader;
