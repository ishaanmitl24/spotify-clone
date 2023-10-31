import React from "react";
import { Box, Typography, Button } from "@mui/material";
import spotify from "../assests/spotify.png";
import { NavLink } from "react-router-dom";
import classes from "./Navigation.module.css";
import { Home, Search, LibraryAdd, Add, Favorite,Language } from "@mui/icons-material";

const Navigation = () => {
  return (
    <Box
      sx={{
        width: 239,
        bgcolor: "#000",
        maxHeight: "100%",
        gap: 8,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box sx={{ display: "flex", gap: 2, flexDirection: "column" }}>
        <Box
          sx={{
            gap: 1,
            display: "flex",
            flexDirection: "row",
            pl: 2,
            justifyContent: "flex-start",
            alignItems: "center",
            height: 100,
          }}
        >
          <img style={{ width: '40px', height: "40%" }} src={spotify} />
          <Typography variant="h5" sx={{ color: "#fff" }}>
            Spotify
          </Typography>
        </Box>
        <Box
          className={classes.link}
          sx={{ pl: 2, display: "flex", gap: 2, flexDirection: "column" }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
              gap: 3,
            }}
          >
            <Home sx={{ color: "#fff" }} />
            <NavLink
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
              to=""
            >
              Home
            </NavLink>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
              gap: 3,
            }}
          >
            <Search sx={{ color: "#B3B3B3" }} />
            <Typography sx={{ color: "#B3B3B3", fontSize: "1rem" }}>
              Search
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
              gap: 3,
            }}
          >
            <LibraryAdd sx={{ color: "#B3B3B3" }} />
            <Typography sx={{ color: "#B3B3B3", fontSize: "1rem" }}>
              Library
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          gap:22,
          height: "60%",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2, pl: 2 }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
              gap: 2,
            }}
          >
            <button className={classes.button}>
              <Add sx={{ color: "#000" }} />
            </button>
            <Typography sx={{ color: "#B3B3B3" }}>Create Playlist</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
              gap: 2,
            }}
          >
            <button className={classes.heartbutton}>
              <Favorite sx={{ color: "#fff" }} />
            </button>
            <Typography sx={{ color: "#B3B3B3" }}>Liked Songs</Typography>
          </Box>
        </Box>
        <Box pl={2} color="#fff" sx={{display:'flex',flexDirection:'column',gap:2}}>
          <Box  sx={{display:'flex',flexDirection:'row',flexWrap:"wrap",gap:1,color:'#B3B3B3'}}>
            <Typography sx={{fontSize:'12px'}}>Legacy</Typography>
            <Typography sx={{fontSize:'12px'}}>Privacy Center</Typography>
            <Typography sx={{fontSize:'12px'}}>Privacy Policy</Typography>
            <Typography sx={{fontSize:'12px'}}>Cookies</Typography>
            <Typography sx={{fontSize:'12px'}}>About</Typography>
            <Typography sx={{fontSize:'12px'}}>Add</Typography>
          </Box>
          <Box>
            <button className={classes.language}><Language sx={{color:'#fff'}}/><Typography>English</Typography></button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Navigation;
