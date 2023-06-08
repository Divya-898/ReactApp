import React, { useEffect, useState } from "react";

import axios from "axios";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  InputLabel,
  LinearProgress,
  Menu,
  MenuItem,
  TextField,
  TextareaAutosize,
  Typography,
} from "@mui/material";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useParams } from "react-router-dom";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { styled } from "@mui/material/styles";
import { useDispatch } from "react-redux";
import { deletePhotos, updatePhotos } from "../mainRedux/features/PhotoSlice";
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
);;
function Edit({photoUrl}) {
  const dispatch = useDispatch();
    const { userId } = useParams();
    const [open, setOpen] = React.useState(false);
    const [openBox, setOpenBox] = React.useState(false);
    const [scroll, setScroll] = React.useState("paper");
    
    const [values, setValue] = useState(photoUrl);
    const [progress, setProgress] = useState(0);
    const [buffer, setBuffer] = useState(10);
    const [loading, setLoading] = useState(false);
    const [loading1, setLoading1] = useState(true);
    const [disabled, setDisabled] = useState(false);
    const [error, setError] = useState("");
    // ({
    //   title: "", // required
    //   completed: "",
  
    // });
    const [anchorEl, setAnchorEl] = React.useState(null);
    const menuOpen = Boolean(anchorEl);
    const handleClickMenu = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleCloseMenu = () => {
      setAnchorEl(null);
    };
  
    const handleClickOpen1 = () => {
      setOpenBox(true);
    };
  
    const handleClose1 = (event, reason) => {
      if (reason !== "backdropClick") {
        setOpenBox(false);
      }
    };
  
    const handleClose = () => {
      setOpen(false);
    };
    const handleClickOpen = (scrollType) => () => {
      setOpen(true);
    };
    // useEffect(() => {
    //   axios
    //     .get(`http://localhost:3500/todos/${todos.id}`)
    //     .then((response) => {
    //       setValue(response.data);
    //       console.log(response.data);
    //     })
    //     //.then((result) => setValue(result))
    //     .catch((error) => console.log("error", error));
    // }, []);
  
    const handleSubmit = (e, id) => {
      e.preventDefault();
      console.log("comments");
      let payload = {};
      payload["id"]=photoUrl.id
      payload["albumId"] = id;
      payload["url"] = values.url;
      payload["thumbnailUrl"] = values.thumbnailUrl;
     payload["title"]=values.title
      if (values.thumbnailUrl) {
        dispatch(updatePhotos(payload))
          // setTimeout(() => {
          //   setLoading(true);
          // }, 5000);
        //   setLoading(true)
        // axios
        //   .put(`http://localhost:3500/photos/${photoUrl.id}`, payload)
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
        setError("Photo is not Submitted")
      }
        // setTimeout(()=>{
        //     window.location.reload();
        // }, 1000)
      
    };
    const handleDelete = (id) => {
      if (id) {
       dispatch(deletePhotos(id))
    }
    else{
      setError("Photos is not deleted")
    }
      
    };
  
    function handleChange(e) {
      setValue({ ...values, [e.target.name]: e.target.value });
    }
  return (
  <>
        <span style={{position: "relative",
    left: "82px",
    top: "30px"}}><ModeEditIcon color="success" onClick={handleClickOpen("paper")}></ModeEditIcon>
        <DeleteIcon color="error" onClick={handleClickOpen1}></DeleteIcon></span>
        <span>
          <Dialog disableEscapeKeyDown open={openBox} onClose={handleClose1}
          PaperProps={{
            sx: {
              width:"30%",
            maxHeight: 300,
            },
          }}
          >
            <DialogTitle>Delete Photos</DialogTitle>
            <Divider />
            <DialogContent>
              <Box component="form" sx={{ display: "flex", flexWrap: "wrap" }}>
                <Typography> would you like to delete this photo ? </Typography>
              </Box>
            </DialogContent>
            <Typography>
              <Divider/>
            </Typography>
            <DialogActions>
            <Box sx={{ width: "80%", margin:"-30px 0px 0px 70px" }}>
                              {loading ? (
                                <LinearProgress
                                  variant="buffer"
                                  value={progress}
                                  valueBuffer={buffer}
                                />
                              ) : (
                                ""
                              )}
                              <div className="message" style={{position:"relative",width:"100px"}}>
                              {error==="Succesfully Deleted" ? <p style={{color:"green",width:"150px"}}>{error}</p> : <p style={{color:"red"}}>{error}</p>}
                            </div>
                            </Box>
                              
               <Typography sx={{display:"flex", marginTop:"30px"}}>         
              <Button onClick={handleClose1} variant="contained" color="error" sx={{marginRight:"10px"}}>
                Cancel
              </Button>
              <Button
                //onClick={e=>handleDelete(commentId)}
                variant="contained"
                onClick={(e) => handleDelete(photoUrl.id)}
                color="success"
              >
                Delete
              </Button>
              </Typography>   
            </DialogActions>
          </Dialog>
          <Dialog
          open={open}
          onClose={handleClose}
          scroll={scroll}
          aria-labelledby="scroll-dialog-title"
          aria-describedby="scroll-dialog-description"
          PaperProps={{
            sx: {
              width: "50%",
              maxHeight: 400,
            },
          }}
        >
          <DialogTitle id="scroll-dialog-title" sx={{ color: "black" }}>
            Update Photos
          </DialogTitle>
          <DialogContent dividers={scroll === "paper"}>
            <form
              className="login-form"
              onSubmit={(e) => handleSubmit(e, photoUrl.albumId)}
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
              {/* <div style={{ display: "flex" }}>
                <InputLabel
                  sx={{
                    padding: "8px",
                    margin: "5px 15px 0px 0px",
                  }}
                >
                  PhotoUrl
                </InputLabel>
                <StyledTextarea
                //  disabled={disabled}
                  minRows={3}
                  type="text"
                  disabled={disabled}
                  name="url"
                  value={values.url}
                  onChange={(e) => handleChange(e)}
                />
              </div> */}
              <div style={{ display: "flex" }}>
                <InputLabel
                  sx={{
                    padding: "8px",
                    // margin: "5px 0px 0px 40px",
                  }}
                >
                 Photo-Title
                </InputLabel>
                <StyledTextarea
                  type="text"
                  disabled={disabled}
                  name="title"
                  value={values.title}
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div style={{ display: "flex" }}>
                <InputLabel
                  sx={{
                    padding: "8px",
                    margin: "5px 8px 0px 1px",
                  }}
                >
                  Photo-Url
                </InputLabel>
                <StyledTextarea
                  type="text"
                  disabled={disabled}
                  name="url"
                  value={values.url}
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div style={{ display: "flex" }}>
                <InputLabel
                  sx={{
                    padding: "8px",
                    margin: "5px 0px 0px 1px",
                  }}
                >
                  Thumb-Url
                </InputLabel>
                <StyledTextarea
                  type="text"
                  disabled={disabled}
                  name="thumbnailUrl"
                  value={values.thumbnailUrl}
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
        </span>
        </>
  )
}

export default Edit
