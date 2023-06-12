import React, {useEffect, useState } from "react";
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
  Menu,
  MenuItem,
  TextareaAutosize,
  Typography,
} from "@mui/material";
import { Link, useNavigate, useParams } from "react-router-dom";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import styled from "@emotion/styled";
import { useDispatch, useSelector } from "react-redux";
import { deletePost, updatePost } from "../mainRedux/features/PostSlice";
import { useForm } from "react-hook-form";

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
export default function EditPost({postId }) {
  const { register, reset } = useForm()
  const {loading } = useSelector((state) => state.userPosts);
  const dispatch = useDispatch();
  const { userId } = useParams();
  const [open, setOpen] = React.useState(false);
  const [openBox, setOpenBox] = React.useState(false);
  const [scroll, setScroll] = React.useState("paper");
  const [progress, setProgress] = useState(0);
  const [buffer, setBuffer] = useState(10);
  const [error, setError] = useState("");
  const [post, setPost] = useState(postId);
  const [disabled, setDisabled] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const menuOpen = Boolean(anchorEl);
  // const { register, reset } = useForm()
  const navigate = useNavigate()
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
		navigate(-1);
	}
  
  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
  };
  useEffect(() => {
    reset(postId);
  }, [postId]);

  const handleSubmit = (e, userId) => {
    e.preventDefault();
    console.log("postId", userId);
    let payload = {};
    payload["userId"] = userId;
    payload["id"] = postId.id;
    payload["title"] = post.title;
    payload["body"] = post.body;
    payload["title"] = post.title;
    if (post.body && post.title) {
        setTimeout(() => {
        dispatch(updatePost(payload));
      }, 500);
      setTimeout(() => {
        setDisabled(true);
        setPost({title:"",body:""})
        setError("Succesfully created");
      }, 1000);
      setTimeout(()=>{
        setOpen(false);
        setError("");
		navigate(-1);
      },3000)
    } else {
      setError("Post is not Submitted");
    }
  };

  const handleDelete = (id) => {
    if (id) {
      dispatch(deletePost(id));
    } else {
      setError("Post is not deleted");
    }
  };

  function handleChange(e) {
    setPost({ ...post, [e.target.name]: e.target.value });
  }
  return (
    <>
      <div>
        <div style={{ float: "right" }}>
          <Button
            id="basic-button"
            aria-controls={menuOpen ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={menuOpen ? "true" : undefined}
            onClick={handleClickMenu}
          >
            <MoreVertIcon />
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={menuOpen}
            onClose={handleCloseMenu}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem>
            <Link to={`edit/${postId.id}`}>
              <Button
                variant="contained"
                color="success"
                onClick={handleClickOpen("paper")}
                sx={{ float: "right", padding: "0" }}
              >
                Edit
              </Button>{" "}</Link>
            </MenuItem>
            <MenuItem>
              {" "}
              <Link to={`delete/${postId.id}`}>
              <Button
                variant="contained"
                color="error"
                onClick={handleClickOpen1}
                sx={{ float: "right", padding: "0" }}
              >
                delete
              </Button></Link>
            </MenuItem>
          </Menu>
        </div>
        <div>
          <Dialog disableEscapeKeyDown open={openBox} onClose={handleClose1}>
            <DialogTitle>Delete Post</DialogTitle>
            <Divider />
            <DialogContent>
              <Box component="form" sx={{ display: "flex", flexWrap: "wrap" }}>
                <Typography> would you like to delete this post ? </Typography>
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
                  variant="contained"
                  onClick={(e) => handleDelete(postId.id)}
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
              maxHeight: 500,
            },
          }}
        >
          <DialogTitle id="scroll-dialog-title" sx={{ color: "black" }}>
            Update Post
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
                  // {...register("title")}
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
                  // {...register("body")}
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
              <DialogActions dividers={scroll === "paper"}>
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
                    {error === "Succesfully created" ? (
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
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
}
