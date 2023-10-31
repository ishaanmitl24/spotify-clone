import React from "react";
import { Box, CircularProgress, Typography } from "@mui/material";
import MainHeader from "../components/MainHeader";
import { useParams } from "react-router-dom";
import { getSingleArtistData } from "../store/https";
import { useQuery } from "@tanstack/react-query";
import SingleArtistPage from "../components/SingleArtistPage";
const Songs = () => {
  const params = useParams();
  let id = params.id;
  const { data, isLoading } = useQuery({
    queryKey: ["single-artist", { id: id }],
    queryFn: ({ signal }) => getSingleArtistData({ signal, id }),
  });
  return (
    <Box>
      <MainHeader />
      {data ? (
        <SingleArtistPage data={data} />
      ) : (
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
      )}
    </Box>
  );
};

export default Songs;
