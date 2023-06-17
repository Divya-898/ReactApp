
import { Box, Button, DialogActions, Divider, InputLabel, LinearProgress, TextareaAutosize } from '@mui/material'
import React, { useState } from 'react'
import { styled } from "@mui/material/styles";
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

  
  import MoreVertIcon from "@mui/icons-material/MoreVert";
  import { useDispatch } from "react-redux";
import { updatePost } from '../mainRedux/features/PostSlice';
 
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

function PostEditForm2({postEdit, handleClose}) {
    const navigate = useNavigate();
  const {loading,error } = useSelector((state) => state.userPosts);
  const dispatch = useDispatch();
  const { userId } = useParams();
  const [open, setOpen] = React.useState(false);
  const [openBox, setOpenBox] = React.useState(false);
  const [scroll, setScroll] = React.useState("paper");
  const [progress, setProgress] = useState(0);
  const [buffer, setBuffer] = useState(10);
  // const [error, setError] = useState("");
  const [post, setPost] = useState(postEdit);
  const [disabled, setDisabled] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const menuOpen = Boolean(anchorEl);



  const handleSubmit = (e, userId) => {
    e.preventDefault();
    console.log("postId", userId);
    let payload = {};
    payload["userId"] = userId;
    payload["id"] = postEdit.id;
    payload["title"] = post.title;
    payload["body"] = post.body;
    payload["title"] = post.title;
    if (post.body && post.title) {
        dispatch(updatePost(payload));
        setDisabled(true);
        }
  };  
  function handleChange(e) {
    setPost({ ...post, [e.target.name]: e.target.value });
  }
  return (
    <div>
   
            <form
              className="login-form"
              onSubmit={(e) => handleSubmit(e, userId)}
            >
              <div style={{ display: "flex" }}>
                <InputLabel
                  sx={{
                    padding: "8px",
                    margin: "5px",
                  }}
                >
                  Title
                </InputLabel>
                <StyledTextarea
                  disabled={disabled}
                  type="text"
                  name="title"
                  value={post.title}
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
                  Desc
                </InputLabel>
                <StyledTextarea
                  disabled={disabled}
                  minRows={3}
                  type="text"
                  name="body"
                  value={post.body}
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div>
                <Divider
                  sx={{
                    width: "610px",
                    right: "30px",
                    position: "relative",
                    top: "20px",
                  }}
                />
              </div>
              <DialogActions dividers={true ? true : undefined}>
                <Box sx={{ width: "80%", margin: "-10px 0px 0px 70px" }}>
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
                    style={{ position: "relative", left: "80px" }}
                  >
                    {error === "Succesfully updated" ? (
                      <p style={{ color: "green" }}>{error}</p>
                    ) : (
                      <p style={{ color: "red" }}>{error}</p>
                    )}
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

export default PostEditForm2
