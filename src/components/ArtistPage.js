import React from "react";
import { Box, Typography, Card, CardContent, CardMedia } from "@mui/material";
import MainHeader from "./MainHeader";
import CardData from "./CardData";

const ArtistPage = (props) => {
  let bool = props.dataName === "artists";
  return (
    <Box>
      <Box
        pb={3}
        className="artist"
        sx={{ position: "relative", bgcolor: "#161616", height: "100%"}}
      >
        <Typography
          sx={{
            fontSize: "30px",
            fontWeight: 600,
            color: "#fff",
            letterSpacing: "0.04em",
            px: 3,
            pt: 3,
          }}
        >
          {props.name}
        </Typography>
        <Box px={3} pt={2}>
          {props.data &&  <Box
              sx={{
                display: "flex",
                position: "relative",
                flexDirection: "row",
                gap: 3,
                justifyContent: {
                  lg: "space-evenly",
                  md: "space-evenly",
                  sm: "space-evenly",
                  xs: "flex-start",
                },
                flexWrap: "wrap",
              }}
            >
              {props.data[props.dataName].map((content) => (
                 <CardData
                 dataName={props.dataName}
                 id={content.id}
                 key={content.id}
                 content={content}
                 pending={props.pending}
               />
              ))}

            </Box>}
        </Box>
      </Box>
    </Box>
  );
};

export default ArtistPage;
