import React from "react";
import { Box,CircularProgress,Typography } from "@mui/material";
import ArtistPage from "../components/ArtistPage";
import { useQuery } from "@tanstack/react-query";
import { fetchArtist } from "../store/https";
import MainHeader from "../components/MainHeader";
const Artists = () => {
  const { data , isPending } = useQuery({
    queryKey: ["artists"],
    queryFn: fetchArtist
  });
  return (
    <Box>
      <MainHeader />
      {isPending ? (
          <Box
          sx={{
            height: "140vh",
            bgcolor: "#161616",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            pt: 5,
          }}
        >
          <Box sx={{display:'flex',flexDirection:'column',gap:3}}>
          <CircularProgress
            sx={{ color: "#1ED760" ,alignSelf:'center'}}
            size={100}
            thickness={4}
          />
          <Typography sx={{ color: "#fff" }} variant="h3">
            Loading...
          </Typography>
         </Box> 
        </Box>
          ) : <ArtistPage  pending={isPending} dataName='artists' name='Artists' data={data} />}
    </Box>
  );
};

export default Artists;
