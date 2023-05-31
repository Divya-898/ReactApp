import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import UserPhoto from "./UserAlbumsPhoto";
import UserAlbumsPhoto from "./UserAlbumsPhoto";
import { Typography } from "@mui/material";
import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
function UserAlbums({ commonList }) {
  // const [albums,setAlbums ] = useState();
  console.log("commonList" ,commonList[0].photos[0].thumbnailUrl)
  const { pid } = useParams();
 
  //   const getAlbumData = () => {
  //       fetch(`http://localhost:3500/albums?userId=${pid}`)
  //         .then((response) => response.json())
  //         .then((result) => setAlbums(result))
  //         .catch((error) => console.log("error", error));
  //     };
  //      if (albums) {
  //    console.log(albums);
  //  }
  // useEffect(()=>{
  //   getAlbumData();
  // },[])
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": {
            m: 1,
          },
        }}
      >
        <Paper elevation={3} sx={{ width: "422px", height: "720px",borderRadius:"10px" }}>
          <h1 style={{ padding: "10px" }}>Albums</h1>
          <Grid
            container
            rowSpacing={4}
            columnSpacing={{ sm: 1 }}
            sx={{ padding: "0px 10px 10px 10px", width: "430px" }}
          >
            {commonList &&
              commonList.map((items) => (
                <Grid item xs={4} sx={{ height: "150px", width: "100px" }}>
                  <Item
                    sx={{
                      height: "100px",
                      boxShadow: "none",
                      padding: "0px",
                      borderRadius: "10px",
                    }}
                  >
                      <UserAlbumsPhoto
                      albumId={items.photos[0].thumbnailUrl}
                      key={items.id}
                      albumWidth={"130px"}
                      albumHeight={"100px"}
                    />  
                  </Item>
                  <Item
                    sx={{
                      width: "110px",
                      boxShadow: "none",
                      "letter-spacing": "0px",
                      textAlign: "start",
                      color: "black",
                    }}
                  >
                    {items.title}
                  </Item>
                </Grid>
              ))}
          </Grid>
        </Paper>
        {/* {albums && albums.map((items) =>(
       <UserAlbumsPhoto albumId={items.id} key={items.id}/>

      ))} */}
      </Box>
    </div>
  );
}

export default UserAlbums;
