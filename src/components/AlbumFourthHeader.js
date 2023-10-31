import React from "react";
import { Box, Typography, List, ListItem, ListItemText } from "@mui/material";
import { grey } from "@mui/material/colors";

const AlbumFourthHeader = (props) => {
  const getTime = (time) => {
    const totalSeconds = time / 1000;
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = Math.round(totalSeconds % 60);
    return `${minutes > 9 ? minutes : `0${minutes}`}:${
      seconds > 9 ? seconds : `0${seconds}`
    }`;
  };
  const getListeners = (data) => {
    const newData = +data;
    return newData.toLocaleString("en-US", { style: "decimal" });
  };
  return (
    <Box px={4} pt={2}>
      <List sx={{ color: "White"}}>
        {props.track &&
          props.track.data.album.tracks.items.map((content, index) => (
            <ListItem
              sx={{
                "&.ListItem-root:hover": { bgcolor: "white" },
                bgcolor: "transparent",
                cursor: "pointer",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
              disableGutters
              key={content.uid}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems:'center',
                  maxWidth: "40%",
                  flexGrow: 1,
                }}
              >
                <ListItemText
                  sx={{ flexGrow: 0, pr: 4 }}
                  primary={
                    <Typography
                      sx={{ fontWeight: 600, color: "#fff", width: 15 }}
                    >
                      {index + 1}.
                    </Typography>
                  }
                />
                <ListItemText
                  sx={{ pl: 0, flexGrow: 0 }}
                  primary={
                    <Typography
                      sx={{ fontWeight: 600, letterSpacing: "0.04em" }}
                    >
                      {content.track.name}
                    </Typography>
                  }
                  secondary={
                    <Box sx={{display:'flex',flexDirection:'row'}}>
                      {content.track.artists.items.map((data)=>(
                      <Typography key={data.uri} sx={{color:grey[500]}}>
                        {data.profile.name},
                      </Typography>
                      ))}
                    </Box>
                  }
                ></ListItemText>
              </Box>
              <Box
                sx={{
                  width: "60%",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-around",
                }}
              >
                <ListItemText
                  sx={{ flexGrow: 0, color: grey[400] }}
                  primary={getListeners(content.track.playcount)}
                />
                <ListItemText
                  sx={{ flexGrow: 0, color: grey[400] }}
                  primary={`${getTime(
                    content.track.duration.totalMilliseconds
                  )}`}
                />
              </Box>
            </ListItem>
          ))}
      </List>
    </Box>
  );
};

export default AlbumFourthHeader;
