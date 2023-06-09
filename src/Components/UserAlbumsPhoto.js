import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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
import { useDispatch } from "react-redux";
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
  // console.log("album",user)
  const dispatch = useDispatch();
  const [photo, setPhoto] = useState("");
  const [open, setOpen] = React.useState(false);
  const [openBox, setOpenBox] = React.useState(false);
  const [scroll, setScroll] = React.useState("paper");
  const [values, setValue] = useState(items);
  const [progress, setProgress] = useState(0);
  const [buffer, setBuffer] = useState(10);
  const [loading, setLoading] = useState(false);
  const [loading1, setLoading1] = useState(true);
  const [disabled, setDisabled] = useState(false);
  const [error, setError] = useState("");
  const { userId } = useParams();
  const handleClose = () => {
    setOpen(false);
  };

  const handleClickOpen1 = () => {
    setOpenBox(true);
  };
  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
  };
  const handleClose1 = (event, reason) => {
    if (reason !== "backdropClick") {
      setOpenBox(false);
    }
  };
  function handleChange(e) {
    setValue({ ...values, [e.target.name]: e.target.value });
  }

  const handleSubmit = (e, id) => {
    e.preventDefault();
    console.log("comments");
    let payload = {};
    payload["userId"] = id;
    payload["title"] = values.title;
    payload["completed"] = values.completed;
    payload["id"]=items.id
    if (values.title) {
      dispatch(updateAlbums(payload))
        // setTimeout(() => {
        //   setLoading(true);
        // }, 5000);
      //   setLoading(true)
      // axios
      //   .put(`http://localhost:3500/albums/${items.id}`, payload)
      //   .then((res) => {
      //     console.log("hello");
      //   });
      //   // setTimeout(() => {
      //   //   setLoading(true);
  
         
      //   // }, 10000);
      //   setDisabled(true);
      //   setTimeout(() => {
      //     setLoading(false);
      //     setError("Succesfully updated");
  
      //     window.location.reload();
      //   }, 2000);
    }
    else{
      setError("Todo is not Submitted")
    }
      // setTimeout(()=>{
      //     window.location.reload();
      // }, 1000)
    
  };

  const handleDelete = (id) => {
    if (id) {
      dispatch(deleteAlbums(id))
      // setTimeout(() => {
      //   setLoading1(false);
      // }, 5000);
      // setLoading(true);
      // axios.delete(`http://localhost:3500/albums/${items.id}`).then((res) => {
      //   // window.location.reload();
      // });
      // // setTimeout(() => {
      // //   setLoading(true);

      // // }, 10000);
      // setTimeout(() => {
      //   setLoading(false);
      //   setError("Succesfully Deleted");

      //   window.location.reload();
      // }, 1000);
    } else {
      setError("Todos is not deleted");
    }
  };

  return (
    <>
      <div className="container">
        <div
          style={{
            display: "flex",
            position: "relative",
            top: "28px",
            left: "75px",
            // color: "white",
          }}
        >
          
          <ModeEditIcon color="success" onClick={handleClickOpen("paper")}></ModeEditIcon>
          <DeleteIcon color="error" onClick={handleClickOpen1}></DeleteIcon>
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
            onClose={handleClose1}
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
                  onClick={handleClose1}
                  variant="contained"
                  color="error"
                  sx={{ marginRight: "10px" }}
                >
                  Cancel
                </Button>
                <Button
                  //onClick={e=>handleDelete(commentId)}
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
              {/* <div style={{ display: "flex" }}>
            <InputLabel
              sx={{
                padding: "10px",
              }}
            >
              Title
            </InputLabel>
            <TextField
              sx={{
                paddingTop: "10px",
                marginLeft: "5px",
              }}
              InputProps={{ sx: { height: 25 } }}
              type="text"
              name="title"
               value={values.title}
              onChange={e => handleChange(e)}
            />
          </div>
          <div style={{ display: "flex" }}>
            <InputLabel
              sx={{
                padding: "10px",
              }}
            >
              Status
            </InputLabel>
            <TextField
              sx={{
                paddingTop: "10px",
                marginLeft: "5px",
              }}
              InputProps={{ sx: { height: 25 } }}
              type="text"
              name="completed"
               value={values.completed}
              onChange={e => handleChange(e)}
            />
          </div> */}
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
                //  disabled={disabled}
                  minRows={3}
                  type="text"
                  disabled={disabled}
                  name="title"
                  value={values.title}
                  onChange={(e) => handleChange(e)}
                />
              </div>

             

              {/* <button
            className="login-btn"
            type="submit"
            style={{ float: "right" }}
          >
            Submit
          </button>  */}
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
