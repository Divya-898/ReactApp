import { Box, Button, DialogActions, Divider, InputLabel, LinearProgress, TextareaAutosize } from '@mui/material'
import React, { useState } from 'react'
import { styled } from "@mui/material/styles";
import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";
import { updatePhotos } from '../mainRedux/features/PhotoSlice';
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
function PhotoEdit({photoEdit,handleClose}) {
    const {loading } = useSelector((state) => state.userPosts);
    const dispatch = useDispatch();
    const [scroll, setScroll] = React.useState("paper");
    const [progress, setProgress] = useState(0);
    const [buffer, setBuffer] = useState(10);
    const [error, setError] = useState("");
    const [photo, setPhoto] = useState(photoEdit);
    const [disabled, setDisabled] = useState(false);
   
      const handleSubmit = (e, id) => {
        e.preventDefault();
        let payload = {};
        payload["id"]=photoEdit.id
        payload["albumId"] = id;
        payload["url"] = photo.url;
        payload["thumbnailUrl"] = photo.thumbnailUrl;
       payload["title"]=photo.title
        if (photo.thumbnailUrl) {
          setTimeout(() => {
            dispatch(updatePhotos(payload));
          }, 500);
          setTimeout(() => {
            setDisabled(true);
            setPhoto({title:"",thumbnailUrl:"",url:""})
            setError("Succesfully updated");
          }, 1000);
          setTimeout(()=>{
            window.location.reload();
          },3000)
        } else {
          setError("Photo is not updated");
        }
        
      };
      function handleChange(e) {
        setPhoto({ ...photo, [e.target.name]: e.target.value });
      }
  return (
    <div>
       <form
              className="login-form"
              onSubmit={(e) => handleSubmit(e, photoEdit.albumId)}
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
                  value={photo.title}
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
                  value={photo.url}
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
                  value={photo.thumbnailUrl}
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
    </div>
  )
}

export default PhotoEdit
