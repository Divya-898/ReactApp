import React, {useState } from "react";
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
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteIcon from "@mui/icons-material/Delete";
import { styled } from "@mui/material/styles";
import { useDispatch, useSelector } from "react-redux";
import { deletePhotos, updatePhotos } from "../mainRedux/features/PhotoSlice";
import { Link, useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {loading} = useSelector((state)=>state.userPhotos)
    const [open, setOpen] = React.useState(false);
    const [openBox, setOpenBox] = React.useState(false);
    const [scroll, setScroll] = React.useState("paper");
    const [photos, setPhotos] = useState(photoUrl);
    const [progress, setProgress] = useState(0);
    const [buffer, setBuffer] = useState(10);
    // const [loading, setLoading] = useState(false);
    const [disabled, setDisabled] = useState(false);
    const [error, setError] = useState("");
    const handleOpenDelete = () => {
      setOpenBox(true);
    };
  
    const handleCloseDelete = (event, reason) => {
      if (reason !== "backdropClick") {
        setOpenBox(false);
        navigate(-1);
      }
    };
  
    const handleClose = () => {
      setOpen(false);
      navigate(-1);
    };
    const handleClickOpen = (scrollType) => () => {
      setOpen(true);
    };
    const handleSubmit = (e, id) => {
      e.preventDefault();
      let payload = {};
      payload["id"]=photoUrl.id
      payload["albumId"] = id;
      payload["url"] = photos.url;
      payload["thumbnailUrl"] = photos.thumbnailUrl;
     payload["title"]=photos.title
      if (photos.thumbnailUrl) {
        setTimeout(() => {
          dispatch(updatePhotos(payload));
        }, 500);
        setTimeout(() => {
          setDisabled(true);
          setPhotos({title:"",thumbnailUrl:"",url:""})
          setError("Succesfully updated");
        }, 1000);
        setTimeout(()=>{
          window.location.reload();
        },3000)
      } else {
        setError("Photo is not updated");
      }
      
    };
    const handleDelete = (id) => {
      if (id) {
        setTimeout(()=>{
          dispatch(deletePhotos(id));
        },2000)
       
        setTimeout(()=>{
          setError("Succesfully Deleted")
        },2000)
        } 
       else {
        setError("Photo is not deleted");
      }
    };
  
    function handleChange(e) {
      setPhotos({ ...photos, [e.target.name]: e.target.value });
    }
  return (
  <>
        <span style={{position: "relative",
    left: "82px",
    top: "30px"}}>
    <Link to={`edit/${photoUrl.id}`}>
    <ModeEditIcon color="success" onClick={handleClickOpen("paper")}></ModeEditIcon></Link>
    <Link to={`delete/${photoUrl.id}`}> <DeleteIcon color="error" onClick={handleOpenDelete}></DeleteIcon></Link></span>
        <span>
          <Dialog disableEscapeKeyDown open={openBox} onClose={handleCloseDelete}
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
              <Button onClick={handleCloseDelete} variant="contained" color="error" sx={{marginRight:"10px"}}>
                Cancel
              </Button>
              <Button
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
              maxHeight: 490,
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
              <div style={{ display: "flex" }}>
                <InputLabel
                  sx={{
                    padding: "8px",
                  }}
                >
                 Photo-Title
                </InputLabel>
                <StyledTextarea
                  type="text"
                  disabled={disabled}
                  name="title"
                  value={photos.title}
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
                  value={photos.url}
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
                  value={photos.thumbnailUrl}
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
        </span>
        </>
  )
}

export default Edit
