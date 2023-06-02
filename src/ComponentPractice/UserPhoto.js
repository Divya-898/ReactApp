import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import UserAlbumsPhoto from "./UserAlbumsPhoto";
import { Grid, ImageList, ImageListItemBar } from "@mui/material";
import ImageListItem from "@mui/material/ImageListItem";
import { styled } from "@mui/material/styles";
import Checkbox from "@mui/material/Checkbox";
import { Button, TextField, Typography } from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";
import Modal from "@mui/material/Modal";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  LazyLoadComponent,
  LazyLoadImage,
  trackWindowScroll,
} from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import EditPhotos from "./EditPhotos";
import Edit from "./Edit";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
function UserPhoto({ photos, albums }) {
  // let temp=albums[0].id
  //console.log(albums);
  const [formData, setformData] = useState({
    thumbnailUrl: "", // required
     url:""// required
  });
  // const [open, setOpen] = React.useState(false);
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState("paper");

  
 const [createPhotos, setCreatePhotos] = React.useState('');
 const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
    author: '@bkristastucchio',
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
    author: '@rollelflex_graphy726',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
    author: '@helloimnik',
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
    author: '@nolanissac',
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
    author: '@hjrc33',
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
    author: '@arwinneil',
  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
    author: '@tjdragotta',
  },
  {
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Fern',
    author: '@katie_wasserman',
  },
  {
    img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    title: 'Mushrooms',
    author: '@silverdalex',
  },
  {
    img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    title: 'Tomato basil',
    author: '@shelleypauls',
  },
  {
    img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    title: 'Sea star',
    author: '@peterlaster',
  },
  {
    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    title: 'Bike',
    author: '@southside_customs',
  },
];

 const handleClose = () => {
  setOpen(false);
};
const handleClickOpen = (scrollType) => () => {
  setOpen(true);
};
  const handleChange = (event) => {
    setCreatePhotos(event.target.value)
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("postId", temp);
    let payload = {};
    payload["albumId"] = createPhotos;
    // payload["name"] = user.name;
    // payload["email"] = user.email;
    payload["thumbnailUrl"] = formData.thumbnailUrl;
    payload["url"] = formData.url;
    // payload["completed"] = formData.completed;
    fetch(`http://localhost:3500/photos`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    }).then((res) => res.json());
    // .then((data) => setFormData(data));
  };
  function handleTodosChange(e) {
    setformData({ ...formData, [e.target.name]: e.target.value });
  }
  
  // let x= getScrollX();
  // let y=getScrollY();
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
        <Paper
          elevation={3}
          sx={{ width: "422px", borderRadius: "10px", height: "500px" }}
        >
        <div style={{display:"flex"}}>
          <h1 style={{ padding: "10px",width:"390px" }}>Photos</h1>
          <Button onClick={handleClickOpen("paper")}  sx={{ "&:hover": {
        backgroundColor: "#FFF"
    }}}><AddCircleIcon/></Button>
          </div>
          <div>
                    {/* <Button onClick={handleClickOpen('paper')}>scroll=paper</Button> */}

                    <Dialog
                      open={open}
                      onClose={handleClose}
                      scroll={scroll}
                      aria-labelledby="scroll-dialog-title"
                      aria-describedby="scroll-dialog-description"
                      PaperProps={{
                        sx: {
                          width: "50%",
                          maxHeight: 300,
                        },
                      }}
                    >
                      <DialogTitle
                        id="scroll-dialog-title"
                        sx={{ color: "black" }}
                      >
                        Create Photo
                      </DialogTitle>
                      <DialogContent dividers={scroll === "paper"}>
                        <form
                          className="login-form"
                          onSubmit={(e) => handleSubmit(e)}
                        >
                          <div style={{ display: "flex" }}>
                            <InputLabel
                              sx={{
                                padding: "10px",
                              }}
                            >
                              PhotoUrl
                            </InputLabel>
                            <TextField
                              sx={{
                                paddingTop: "10px",
                                marginLeft: "5px",
                              }}
                              InputProps={{ sx: { height: 25 } }}
                              type="text"
                              name="url"
                              onChange={(e) => handleTodosChange(e)}
                            />{" "}
                          </div>

                          <div style={{ display: "flex" }}>
                            <InputLabel
                              sx={{
                                padding: "10px",
                              }}
                            >
                              ThumbUrl
                            </InputLabel>
                            <TextField
                              sx={{
                                paddingTop: "10px",
                              }}
                              InputProps={{ sx: { height: 25 } }}
                              type="text"
                              name="thumbnailUrl"
                              onChange={(e) => handleTodosChange(e)}
                              //   onChange={(e) => handleTodosChange(e)}
                            />
                          </div>
                          <div style={{ display: "flex" }}>
                          <InputLabel
                              sx={{
                                padding: "10px",
                              }}
                            >
                              Title
                            </InputLabel>

                          <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Title"
                  
                  onChange={handleChange}
                >
                  {albums &&
                    albums.map((items) => (
                      <MenuItem
                        value={items.id}
              
                      >
                        {items.title}
                      </MenuItem>
                    ))}
                </Select>
                </div>
          
                          {/* <button
                            className="login-btn"
                            type="submit"
                            style={{ float: "right" }}
                          >
                            Submit
                          </button>  */}
                          <DialogActions dividers={scroll === "paper"}>
                            <Button onClick={handleClose}>Cancel</Button>
                            <Button type="submit">Submit</Button>
                          </DialogActions>
                        </form>
                      </DialogContent>
                    </Dialog>
                  </div>

          {/* <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <form className="login-form" onSubmit={(e) => handleSubmit(e)}>
                {/* <InputLabel
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  
                }}
              >
                Title
              </InputLabel> 
          <TextField
                required
                id="title"
                name="title"
                label="Title"
                fullWidth
                size="small"
                autoComplete="off"
                variant="outlined"
              />  */}

                {/* <TextField
                  type="text"
                  size="small"
                  name="thumbnailUrl"
                  onChange={(e) => handleTodosChange(e)}
                />
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Title"
                  onChange={handleChange}
                >
                  {albums &&
                    albums.map((items) => (
                      <MenuItem
                        value={items.id}
              
                      >
                        {items.title}
                      </MenuItem>
                    ))}
                </Select>
                <br></br>
                <br></br>
                {/* <TextField type="text" size='small' name="completed"
                    onChange={(e) => handleTodosChange(e)}/> */}
                {/* <button
                  className="login-btn"
                  type="submit"
                  style={{ float: "right" }}
                >
                  Submit
                </button>
              </form>
            </Box>
          </Modal> */}
            {/* <div style={{ height: "55vh", overflow: "auto", }}>
              {photos &&
                photos.map((image) => ( 
                  <>
                  
                  
                 <span><Edit photoUrl={image}></Edit></span>
                
                  <LazyLoadImage
                    className="load-image"
                    height="150px"
                    src={image.thumbnailUrl}
                    width="80px"
                    effect="opacity"
                    threshold={10}
                  />
                 
                

                  </>
                  
                  
                ))}
            </div> */}
            <ImageList sx={{  height: 300 ,padding:"0 8px"}} cols={3} gap={8}>
      {photos  && photos.map((item) => (
        <>
        <ImageListItem key={item.img} sx={{height:"150px"}}>
       <span style={{marginTop:"-25px"}}><Edit photoUrl={item}></Edit></span>
          {/* <Edit photoUrl={item}></Edit> */}
          {/* </ImageListItemBar> */}
        <ImageListItemBar
            title={item.title}
           position="bottom"
          
          /> 
          <img
            src={item.thumbnailUrl}
            width="100px"
            height="100px"
            alt={item.title}
            loading="lazy"
          />
           
        </ImageListItem>
       
          </>
      ))}
    </ImageList>
         
        </Paper>
      </Box>
    </div>
  );
}

export default trackWindowScroll(UserPhoto);
// {/* <div>
//       <Box
//         sx={{
//           display: "flex",
//           flexWrap: "wrap",
//           "& > :not(style)": {
//             m: 1,
//           },
//         }}
//       >
//         <Paper elevation={3} sx={{ width: "422px",borderRadius:"10px" }}>
//           <h1 style={{ padding: "10px" }}>Photos</h1>
//           <Button onClick={handleOpen}>Open modal</Button>
//       <Modal
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="modal-modal-title"
//         aria-describedby="modal-modal-description"
//       >
//         <Box sx={style}>
//           <form  className="login-form"
//                   onSubmit={(e) => handleSubmit(e,temp)}>
//                   {/* <InputLabel
//                 sx={{
//                   display: "flex",
//                   justifyContent: "center",

//                 }}
//               >
//                 Title
//               </InputLabel>
//           <TextField
//                 required
//                 id="title"
//                 name="title"
//                 label="Title"
//                 fullWidth
//                 size="small"
//                 autoComplete="off"
//                 variant="outlined"
//               />  */}

//    <TextField type="text" size='small' name="thumbnailUrl"
//                     onChange={(e) => handleTodosChange(e)}/><br></br><br></br>
//    {/* <TextField type="text" size='small' name="completed"
//                     onChange={(e) => handleTodosChange(e)}/> */}
//    <button
//                     className="login-btn"
//                     type="submit"
//                     style={{ float: "right" }}
//                   >
//                     Submit
//                   </button>
// </form>
//         </Box>
//       </Modal>
//           <ImageList sx={{ width: 415, height: 550,gap:"1px" }} cols={3}>
//   {albums && albums.map((items) => (
//     <ImageListItem key={items.id} sx={{padding: "0px 0px 0px 8px",height:"100px"}} >
//     <h1>{items.id}</h1>
//     <UserAlbumsPhoto albumId={items.id} albumWidth={"128px"} />

//     </ImageListItem>
//   ))}
// </ImageList>

//  {/* <img
//         src={}
//         srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
//         alt={item.title}
//         loading="lazy"
//       /> */}
//           {/* <Grid
//             container
//             rowSpacing={4}
//             columnSpacing={{ sm: 1 }}
//             sx={{ padding: "0px 10px 10px 10px", width: "430px" }}
//           >
//             {albums &&
//               albums.map((items) => (
//                 <Grid item xs={4} sx={{ height: "150px", width: "100px" }}>
//                   <Item
//                     sx={{
//                       height: "100px",
//                       boxShadow: "none",
//                       padding: "0px",
//                       borderRadius: "10px",
//                     }}
//                   >
//                     <UserAlbumsPhoto
//                       albumId={items.id}
//                       key={items.id}
//                       albumWidth={"130px"}
//                       albumHeight={"100px"}
//                     />
//                   </Item>
//                 </Grid>
//               ))}
//           </Grid> */}
//         </Paper>
//         {/* {albums && albums.map((items) =>(
//        <UserAlbumsPhoto albumId={items.id} key={items.id}/>

//       ))} */}
//       </Box>
//     </div> */}
