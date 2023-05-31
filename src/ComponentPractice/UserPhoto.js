import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import UserAlbumsPhoto from "./UserAlbumsPhoto";
import { Grid, ImageList } from "@mui/material";
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
          <LazyLoadComponent>
            <div style={{ height: "55vh", overflow: "auto" }}>
              {photos &&
                photos.map((image) => (
                  <LazyLoadImage
                    className="load-image"
                    height="150px"
                    src={image.thumbnailUrl}
                    width="130px"
                    effect="opacity"
                    threshold={10}
                  />
                ))}
            </div>
          </LazyLoadComponent>
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
