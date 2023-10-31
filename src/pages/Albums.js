import React from 'react';
import { Box,CircularProgress,Typography } from "@mui/material";
import ArtistPage from "../components/ArtistPage";
import { useQuery } from "@tanstack/react-query";
import { getAlbumData } from "../store/https";
import MainHeader from '../components/MainHeader';
const Albums = () => {
  const { data,isPending } = useQuery({
    queryKey: ["albums"],
    queryFn: getAlbumData,
    staleTime:216000
  });
  return (
    <Box >
      <MainHeader/>
      {isPending &&  (
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
   {!isPending  && <ArtistPage pending={isPending} dataName='albums' name='Albums' data={data} />}
  </Box>
  )
}

export default Albums;