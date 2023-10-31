import React from "react";
import { Box, CircularProgress, Typography} from "@mui/material";
import ArtistPageHeader from "./ArtistPageHeader";
import ArtistPageSecondHeader from "./ArtistPageSecondHeader";
import ArtistPageThirdHeader from "./ArtistPageThirdHeader";
import AlbumThirdHeader from "./AlbumThirdHeader";
const SingleArtistPage = (props) => {
  return (
    <Box
      sx={{
        height: "140vh",
        width:"100%",
        overflowY:"scroll",
        background: `linear-gradient(180deg,${props.data.data.artist.visuals.avatarImage.extractedColors.colorRaw["hex"]},#262626,#0d0d0d)`,
      }}
    >
     
      <ArtistPageHeader data={props.data}/>
      <ArtistPageSecondHeader/>
      <ArtistPageThirdHeader data={props.data}/>
    </Box>
  );
};

export default SingleArtistPage;
