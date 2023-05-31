import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';



export default function UserAlbumsPhoto({albumId,albumWidth,albumHeight}) {
  // console.log("album",user)
  const [photo,setPhoto ] = useState("");
    const {pid} = useParams();
    // console.log(pid);
  //   const getPhotosData = () => {
  //       fetch(`http://localhost:3500/photos?albumId=${albumId}`)
  //         .then((response) => response.json())
  //         .then((result) => setPhoto(result[0]))
  //         .catch((error) => console.log("error", error));
  //     };
  //       if (photo) {
  //   console.log(photo);
  //  }
  // useEffect(()=>{
  //   getPhotosData();
  // },[])
  return (
    <>
      
     
          <img src={albumId} alt="photo" width={albumWidth} height={albumHeight} 
          style={{borderRadius:"10px"}}
></img>
          
        {/* <Grid item xs={6}>
          <Item>2</Item>
        </Grid>
        <Grid item xs={6}>
          <Item>3</Item>
        </Grid>
        <Grid item xs={6}>
          <Item>4</Item>
        </Grid> */}
     
   
      {/* <Grid rowSpacing={1}>
  <Grid item xs={4}>
    <Item>{photo.id}</Item>
  </Grid>
  
</Grid> */}
    </>
  )}
    //  <ImageList sx={{ width: 400, height: 450,padding: "11px" }} cols={3} rowHeight={164}>
    // {photo && photo.map((item) => (
    //     <ImageListItem key={item.id}>
    //       <img
    //         src={item.thumbnailUrl}
           
    //         alt={item.title}
    //         loading="lazy"
    //       />
    //     </ImageListItem>
    //   ))} 
    //     </ImageList>
    //     );
    //   }
      {/* {photo && photo.map((item) => (
        <ImageListItem key={item.id}>
          <img
            src={item.thumbnailUrl}
           
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))} */}
    // </ImageList>
  

// const itemData = [
//   {
//     img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
//     title: 'Breakfast',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
//     title: 'Burger',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
//     title: 'Camera',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
//     title: 'Coffee',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
//     title: 'Hats',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
//     title: 'Honey',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
//     title: 'Basketball',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
//     title: 'Fern',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
//     title: 'Mushrooms',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
//     title: 'Tomato basil',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
//     title: 'Sea star',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
//     title: 'Bike',
//   },
// ];