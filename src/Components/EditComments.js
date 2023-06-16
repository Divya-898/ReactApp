import React, { useState } from "react";
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
import { Link, useNavigate } from "react-router-dom";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import styled from "@emotion/styled";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteComment,
  updateComment,
} from "../mainRedux/features/CommentSlice";

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
export default function EditComment({ postId, commentObj }) {
  const navigate = useNavigate();
  const { loading } = useSelector((state) => state.userComments);
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const [openBox, setOpenBox] = React.useState(false);
  const [scroll, setScroll] = React.useState("paper");
  const [comment, setComment] = useState(commentObj);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const menuOpen = Boolean(anchorEl);
  const [progress, setProgress] = useState(0);
  const [buffer, setBuffer] = useState(10);
  const [error, setError] = useState("");
  const [disabled, setDisabled] = useState(false);
  const handleClickMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleClickOpenDelete = () => {
    setOpenBox(true);
    navigate(-1);
  };

  const handleCloseDelete = (event, reason) => {
    if (reason !== "backdropClick") {
      setOpenBox(false);
      navigate(-1);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleClickOpen = () => () => {
    setOpen(true);
  };

  const handleSubmit = (e, postId) => {
    e.preventDefault();
    let payload = {};
    payload["postId"] = postId;
    payload["name"] = comment.name;
    payload["body"] = comment.body;
    payload["email"] = comment.email;
    payload["id"] = commentObj.id;
    if (comment.name && comment.body && comment.email) {
      setTimeout(() => {
        dispatch(updateComment(payload));
      }, 500);
      setTimeout(() => {
        setDisabled(true);
        setComment({ body: "" });
        setError("Succesfully updated");
      }, 1000);
      setTimeout(() => {
        window.location.reload();
      }, 3000);
    } else {
      setError("Comment is not updated");
    }
  };
  const handleDelete = (id) => {
    if (id) {
      setTimeout(() => {
        dispatch(deleteComment(id));
      }, 2000);

      setTimeout(() => {
        setError("Succesfully Deleted");
      }, 2000);
    } else {
      setError("Comment is not deleted");
    }
  };

  function handleChange(e) {
    setComment({ ...comment, [e.target.name]: e.target.value });
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
              <Link to={`edit/${commentObj.id}`}>
                <Button
                  variant="contained"
                  color="success"
                  onClick={handleClickOpen("paper")}
                  sx={{ float: "right", padding: "0" }}
                >
                  Edit
                </Button>{" "}
              </Link>
            </MenuItem>
            <MenuItem>
              <Link to={`delete/${commentObj.id}`}>
                {" "}
                <Button
                  variant="contained"
                  color="error"
                  onClick={handleClickOpenDelete}
                  sx={{ float: "right", padding: "0" }}
                >
                  delete
                </Button>
              </Link>
            </MenuItem>
          </Menu>
        </div>

        <div>
          <Dialog
            disableEscapeKeyDown
            open={openBox}
            onClose={handleCloseDelete}
          >
            <DialogTitle>Delete Comment</DialogTitle>
            <Divider />
            <DialogContent>
              <Box component="form" sx={{ display: "flex", flexWrap: "wrap" }}>
                <Typography>
                  {" "}
                  would you like to delete this comment?{" "}
                </Typography>
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
              maxHeight: 350,
            },
          }}
        >
          <DialogTitle id="scroll-dialog-title" sx={{ color: "black" }}>
            Update comment
          </DialogTitle>
          <DialogContent dividers={scroll === "paper"}>
            <form
              className="login-form"
              onSubmit={(e) => handleSubmit(e, postId)}
            >
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
                  value={comment.body}
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
                <Box sx={{ width: "80%", margin: "0px 0px 0px 70px" }}>
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
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
}
