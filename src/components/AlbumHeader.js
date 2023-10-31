import React from "react";
import { Box, Typography } from "@mui/material";
import { Circle } from "@mui/icons-material";
import { grey } from "@mui/material/colors";
const AlbumHeader = (props) => {
  const getYear = (year) => {
    const date = new Date(year);
    return date.getFullYear();
  };
  const getTime = (data) => {
    let totalTime = 0;
    for (let i = 0; i < data.totalCount; i++) {
      totalTime += data.items[i].track.duration.totalMilliseconds;
    }
    const totalSeconds = totalTime / 1000;
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = Math.round(totalSeconds % 60);
    return `${minutes} min ${seconds} sec`;
  };
  return (
    <Box
      sx={{
        px: 5,
        pt: 8,
        pb: 8,
        display: "flex",
        flexDirection: "row",
        gap: 4,
        alignItems: "flex-end",
      }}
    >
      <Box sx={{ maxWidth: 200, height: 200 }}>
        <img
          style={{
            width: "200px",
            height: "100%",
            position: "relative",
            borderRadius: "1rem",
          }}
          src={props.data.metadata.data.album.coverArt.sources[2].url}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: 2,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: 1,
          }}
        >
          <Box pl={1}>
            <Typography
              sx={{
                color: "#fff",
                fontWeight: 600,
                fontSize: "15px",
                letterSpacing: "0.1em",
              }}
            >
              {props.data.metadata.data.album.type}
            </Typography>
          </Box>
          <Box>
            <Typography variant="h2" sx={{ color: "#fff" }}>
              {props.data.metadata.data.album.name}
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: 1,
            alignItems: "center",
          }}
        >
          {props.data.metadata.data.album.artists.items.map((artist) => (
            <Typography
              key={artist.uri}
              sx={{
                fontWeight: 600,
                color: "#fff",
                fontSize: "15px",
                alignItems: "center",
              }}
            >
              {artist.profile.name} <Circle sx={{ fontSize: "7px" }} />{" "}
            </Typography>
          ))}
          <Typography sx={{ color: "#fff", fontSize: "15px" }}>
            {getYear(props.data.metadata.data.album.date.isoString)}{" "}
            <Circle sx={{ fontSize: "7px" }} />
          </Typography>
          <Typography sx={{ color: "#fff", fontSize: "15px" }}>
            {props.data.metadata.data.album.tracks.totalCount} songs,
          </Typography>
          <Typography sx={{ color: grey[400], fontSize: "15px" }}>
            {getTime(props.data.metadata.data.album.tracks)}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default AlbumHeader;
