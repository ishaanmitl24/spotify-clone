import React from 'react';
import AlbumHeader from './AlbumHeader';
import { Box } from '@mui/material';
import AlbumSecondHeader from './AlbumSecondHeader';
import AlbumThirdHeader from './AlbumThirdHeader';
import AlbumFourthHeader from './AlbumFourthHeader';

const AlbumPage = (props) => {
  return (
    <Box
      sx={{
        height: "140vh",
        width:"100%",
        overflowY:"scroll",
        background: `linear-gradient(180deg,${props.data.metadata.data.album.coverArt.extractedColors.colorRaw["hex"]},#262626,#0d0d0d)`,
      }}
    >
     
      <AlbumHeader data={props.data}/>
      <AlbumSecondHeader/>
      <AlbumThirdHeader  />
      <AlbumFourthHeader track={props.data.track}/>
    </Box>
  )
}

export default AlbumPage