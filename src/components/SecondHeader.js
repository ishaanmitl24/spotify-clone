import React from 'react';
import { Box } from '@mui/material';
import Artist from './Artist';
import ArtistData from './ArtistData';

const SecondHeader = (props) => {
  return (
    <Box  >
        <ArtistData route={props.route} pending={props.pending} dataName={props.dataName} data={props.data}/>
    </Box>
  )
}

export default SecondHeader