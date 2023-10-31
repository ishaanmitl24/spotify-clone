import React from "react";
import { Box, CircularProgress, Typography } from "@mui/material";
import MainHeader from "../components/MainHeader";
import SecondHeader from "../components/SecondHeader";
import { useQuery } from "@tanstack/react-query";
import { fetchArtist, getAlbumData } from "../store/https";
import Artist from "../components/Artist";
const Main = () => {
  const { data: artistData, isPending: artistPending } = useQuery({
    queryKey: ["artists"],
    queryFn: fetchArtist,
  });
  const { data: albumData, isPending: albumPending } = useQuery({
    queryKey: ["albums"],
    queryFn: getAlbumData,
  });
  console.log(albumData);
  return (
    <Box>
      <MainHeader />
      <Box
        className="artist"
        sx={{ pb: 4, bgcolor: "#161616", height: "140vh" }}
      >
        <Box>
          <Artist name="Artists" type="artist" />
          {artistPending && (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                height: "300",
              }}
            >
              <CircularProgress sx={{ color: "#1ED760" }} />
              <Typography variant="h3" sx={{ color: "#fff" }}>
                Loading...
              </Typography>
            </Box>
          )}
          {!artistPending && (
            <SecondHeader
              route='artist'
              pending={artistPending}
              dataName="artists"
              data={artistData}
            />
          )}
        </Box>
        <Box>
          <Artist name="Albums" type="album" />
          {albumPending && (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                height: "300",
              }}
            >
              <CircularProgress sx={{ color: "#1ED760" }} />
              <Typography variant="h3" sx={{ color: "#fff" }}>
                Loading...
              </Typography>
            </Box>
          )}
          {!albumPending && (
            <SecondHeader
              route='album'
              pending={albumPending}
              dataName="albums"
              data={albumData}
            />
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Main;
