import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  InputLabel,
  LinearProgress,
  TextareaAutosize,
  Typography,
} from "@mui/material";
import axios from "axios";
import { styled } from "@mui/material/styles";
import { useDispatch, useSelector } from "react-redux";
import { deleteAlbums, updateAlbums } from "../mainRedux/features/AlbumSlice";
const StyledTextarea = styled(TextareaAutosize)(
  ({ theme }) => `
  width: 320px;
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.5;
  margin:10px;
  border-radius: 4px
`
);
export default function UserAlbumsPhoto({
  albumId,
  albumWidth,
  albumHeight,
  items,
}) {
  const navigate = useNavigate();
   const{loading} = useSelector((state)=> state.userAlbums)
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const [openBox, setOpenBox] = React.useState(false);
  const [scroll, setScroll] = React.useState("paper");
  const [album, setAlbum] = useState(items);
  const [progress, setProgress] = useState(0);
  const [buffer, setBuffer] = useState(10);
  const [disabled, setDisabled] = useState(false);
  const [error, setError] = useState("");
  const { userId } = useParams();
  const handleClose = () => {
    setOpen(false);
    navigate(-1);
  };

  const handleOpenDelete = () => {
    setOpenBox(true);
  };
  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
  };
  const handleCloseDelete = (event, reason) => {
    if (reason !== "backdropClick") {
      setOpenBox(false);
      navigate(-1);
    }
  };
  function handleChange(e) {
    setAlbum({ ...album, [e.target.name]: e.target.value });
  }

  const handleSubmit = (e, id) => {
    e.preventDefault();
    let payload = {};
    payload["userId"] = id;
    payload["title"] = album.title;
    payload["completed"] = album.completed;
    payload["id"]=items.id
    if (album.title) {
      setTimeout(() => {
        dispatch(updateAlbums(payload));
      }, 500);
      setTimeout(() => {
        setDisabled(true);
        setAlbum({title:"",})
        setError("Succesfully updated");
      }, 1000);
      setTimeout(()=>{
        window.location.reload();
      },3000)
    }
    else{
      setError("albums is not updated")
    }
    
  };

  const handleDelete = (id) => {
    if (id) {
      setTimeout(()=>{
        dispatch(deleteAlbums(id));
      },2000)
     
      setTimeout(()=>{
        setError("Succesfully Deleted")
      },2000)
      } 
     else {
      setError("Album is not deleted");
    }
  };

  return (
    <>
      <div className="container">
        <div
          style={{
            display: "flex",
            position: "relative",
            top: "60px",
            left: "75px",
          }}
        >
          <Link to={`edit/${items.id}`}>
          <ModeEditIcon color="success" onClick={handleClickOpen("paper")}></ModeEditIcon></Link>
          <Link to={`delete/${items.id}`}><DeleteIcon color="error" onClick={handleOpenDelete}></DeleteIcon></Link>
        </div>
        <div id="bg-image" className="lazy" style={{marginTop:"30px"}}>
        <img 
          src={albumId.thumbnailUrl}
          alt=""
          width={albumWidth}
          height={albumHeight}
          style={{ borderRadius: "10px" }}
        ></img>
        </div>
        <div>
          <Dialog
            disableEscapeKeyDown
            open={openBox}
            onClose={handleCloseDelete}
            PaperProps={{
              sx: {
                width: "30%",
                maxHeight: 300,
              },
            }}
          >
            <DialogTitle>Delete Albums</DialogTitle>
            <Divider />
            <DialogContent>
              <Box component="form" sx={{ display: "flex", flexWrap: "wrap" }}>
                <Typography> would you like to delete this todo ? </Typography>
              </Box>
            </DialogContent>
            <Typography>
              <Divider />
            </Typography>
            <DialogActions>
              <Box sx={{ width: "80%", margin: "-30px 0px 0px 70px" }}>
                {loading ? (
                  <LinearProgress
                    variant="buffer"
                    value={progress}
                    valueBuffer={buffer}
                  />
                ) : (
                  ""
                )}
                <div
                  className="message"
                  style={{ position: "relative", width: "100px" }}
                >
                  {error === "Succesfully Deleted" ? (
                    <p style={{ color: "green", width: "150px" }}>{error}</p>
                  ) : (
                    <p style={{ color: "red" }}>{error}</p>
                  )}
                </div>
              </Box>

              <Typography sx={{ display: "flex", marginTop: "30px" }}>
                <Button
                  onClick={handleCloseDelete}
                  variant="contained"
                  color="error"
                  sx={{ marginRight: "10px" }}
                >
                  Cancel
                </Button>
                <Button
                  variant="contained"
                  onClick={(e) => handleDelete(items.id)}
                  color="success"
                >
                  Delete
                </Button>
              </Typography>
            </DialogActions>
          </Dialog>
        </div>
        <Dialog
          open={open}
          onClose={handleClose}
          scroll={scroll}
          aria-labelledby="scroll-dialog-title"
          aria-describedby="scroll-dialog-description"
          PaperProps={{
            sx: {
              width: "50%",
              maxHeight: 350,
            },
          }}
        >
          <DialogTitle id="scroll-dialog-title" sx={{ color: "black" }}>
            Update Albums
          </DialogTitle>
          <DialogContent dividers={scroll === "paper"}>
            <form
              className="login-form"
              onSubmit={(e) => handleSubmit(e, userId)}
            >
              <div style={{ display: "flex" }}>
                <InputLabel
                  sx={{
                    padding: "8px",
                    margin: "5px 15px 0px 0px",
                  }}
                >
                  Title
                </InputLabel>
                <StyledTextarea
                  minRows={3}
                  type="text"
                  disabled={disabled}
                  name="title"
                  value={album.title}
                  onChange={(e) => handleChange(e)}
                />
              </div>
          <div>
          <Divider sx={{width:'610px',right:"30px",position:"relative",top:"20px"}}/>
         </div>
              <DialogActions dividers={scroll === "paper"}>
              <Box sx={{ width: "80%", margin:"-10px 0px 0px 70px" }}>
                              {loading ? (
                                <LinearProgress
                                  variant="buffer"
                                  value={progress}
                                  valueBuffer={buffer}
                                />
                              ) : (
                                ""
                              )}
                              <div className="message" style={{position:"relative",left:"80px"}}>
                              {error==="Succesfully updated" ? <p style={{color:"green"}}>{error}</p> : <p style={{color:"red"}}>{error}</p>}
                            </div>
                            </Box>
                            <div style={{ margin: "40px 0px 0px 0px", display: "flex" }}>
                  <Button
                    onClick={handleClose}
                    color="error"
                    variant="contained"
                    sx={{ marginRight: "10px" }}
                  >
                    Cancel
                  </Button>
                  <Button type="submit" color="success" variant="contained">
                    Update
                  </Button>
                </div>
              </DialogActions>
            </form>
          </DialogContent>
        </Dialog>
      </div>

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
  );
}
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
{
  /* {photo && photo.map((item) => (
        <ImageListItem key={item.id}>
          <img
            src={item.thumbnailUrl}
           
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))} */
}
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
