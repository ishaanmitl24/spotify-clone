import React from "react";
import { Box } from "@mui/material";
import CardData from "./CardData";

const ArtistData = (props) => {
  let bool = props.dataName === "artists";
  return (
    <Box px={3} pt={2}>
      {props.data && (
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: 3,
            justifyContent: {
              lg: "space-evenly",
              md: "space-evenly",
              sm: "space-evenly",
              xs: "flex-start",
            },
            flexWrap: "wrap",
            height: bool ? 290 : 320,
            overflow: "hidden",
          }}
        >
          {props.data[props.dataName].map((content) => (
            <CardData
              route={props.route} 
              pending={props.pending}
              dataName={props.dataName}
              id={content.id}
              key={content.id}
              content={content}
            />
          ))}
        </Box>
      )}
    </Box>
  );
};

export default ArtistData;
