import React from "react";
import { PlayArrow} from "@mui/icons-material";
import classes from "./ArtistData.module.css";
import {
  Box,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Skeleton,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
const CardData = (props) => {
  let bool = props.dataName === "artists";
  const navigate = useNavigate();
  const navigateHandler = () => {
    if(props.route){
      navigate(`${props.route}/${props.id}`);
    }else{
      navigate(`${props.id}`);
    }
  };
  return (
    <Card
      onClick={navigateHandler}
      className={classes.card}
      sx={{
        position: "relative",
        bgcolor: "#161616",
        width: { lg: 200, md: 190, sm: 180, xs: 200 },
        borderRadius: 2,
        cursor: "pointer",
        "&.MuiCard-root:hover": {
          bgcolor: "#232323",
        },
      }}
      elevation={0}
    >
      <CardContent>
        {props.pending ? (
          <Skeleton
            variant={bool?'circular':'rounded'}
            sx={{bgcolor:"grey", width: bool ? 150 : 170, height: bool ? 150 : 170 }}
          />
        ) : (
          <CardMedia
            image={props.content.images[1].url}
            sx={{
              borderRadius: bool ? "50%" : "16px",
              width: bool ? 150 : 170,
              height: bool ? 150 : 170,
            }}
            component="img"
          />
        ) }
      </CardContent>
      {!props.pending && <button className={classes.play}>
        <PlayArrow sx={{ fontSize: "30px" }} />
      </button>}
      <CardContent>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "6px" }}>
          {props.pending ?  <Skeleton sx={{bgcolor:"grey",width:"100%"}} variant="text" /> : <Typography
            sx={{
              color: "#fff",
              textOverflow: "ellipsis",
              overflow: "hidden",
              whiteSpace: "nowrap",
              maxWidth: 200,
              fontWeight: 600,
            }}
          >
            {props.content.name}
          </Typography>}
         {props.pending ? <Skeleton sx={{bgcolor:"grey",width:"20%"}} variant="text"/> : <>{bool  && (
            <Typography sx={{ color: "#fff", fontSize: "14px", color: "grey" }}>
              Artist
            </Typography>
          )} </>}
         {props.pending ? <Skeleton sx={{bgcolor:"grey",width:'80%'}} variant="text"/> : <>{!bool && (
            <Box sx={{ flexDirection: "row", gap: 1, flexWrap: "wrap" }}>
              {props.content.artists.map((data) => (
                <Typography
                  sx={{
                    display: "inline-block",
                    color: "#fff",
                    fontSize: "14px",
                    color: "grey",
                  }}
                  key={data.id}
                >
                  {data.name},
                </Typography>
              ))}
            </Box>
          )}</> }
        </Box>
      </CardContent>
    </Card>
  );
};

export default CardData;
