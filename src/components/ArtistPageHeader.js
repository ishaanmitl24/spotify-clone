import React from 'react';
import { Box, Typography } from "@mui/material";
import { Verified } from "@mui/icons-material";
const ArtistPageHeader = (props) => {
  const getMonthlyListeners = (data)=>{
    let newData = +data;
    return newData.toLocaleString('en-US', { style: 'decimal' });
  }
  return (
    <Box
        sx={{
          px: 5,
          pt: 8,
          pb:8,
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
              borderRadius: "50%",
            }}
            src={props.data.data.artist.visuals.avatarImage.sources[2].url}
          />
        </Box>
        <Box sx={{display:'flex',flexDirection:'column',alignItems:'flex-start',gap:2}}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: 1,
            }}
          >
            {props.data.data.artist.profile.verified && (
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  align: "flex-end",
                  gap: 1,
                }}
              >
                <Verified sx={{ color: "primary.light" }} />
                <Typography
                  sx={{
                    color: "#fff",
                    fontSize: "14px",
                    letterSpacing: "0.03em",
                  }}
                >
                  Verified Artist
                </Typography>
              </Box>
            )}
            <Box>
              <Typography variant="h2" sx={{ color: "#fff" }}>
                {props.data.data.artist.profile.name}
              </Typography>
            </Box>
          </Box>
          <Box>
            <Typography sx={{color:'#fff',fontSize:'15px'}}>{getMonthlyListeners(props.data.data.artist.stats['monthlyListeners'])} monthly listeners</Typography>
          </Box>
        </Box>
      </Box>
  )
}

export default ArtistPageHeader;