import {
  Box,
  Button,
  DialogActions,
  Divider,
  InputLabel,
  LinearProgress,
  TextareaAutosize,
} from "@mui/material";
import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { updateComment } from "../mainRedux/features/CommentSlice";

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

function EditFormComments({ commentEdit, handleClose }) {
  const { loading } = useSelector((state) => state.userPosts);
  const dispatch = useDispatch();
  const [scroll, setScroll] = React.useState("paper");
  const [progress, setProgress] = useState(0);
  const [buffer, setBuffer] = useState(10);
  const [error, setError] = useState("");
  const [comment, setComment] = useState(commentEdit);
  const [disabled, setDisabled] = useState(false);
  const handleSubmit = (e, postId) => {
    e.preventDefault();
    let payload = {};
    payload["postId"] = postId;
    payload["name"] = comment.name;
    payload["body"] = comment.body;
    payload["email"] = comment.email;
    payload["id"] = commentEdit.id;
    if (comment.name && comment.body && comment.email) {
      dispatch(updateComment)
        setDisabled(true);
    }
  };
  function handleChange(e) {
    setComment({ ...comment, [e.target.name]: e.target.value });
  }
  return (
    <div>
      <form
        className="login-form"
        onSubmit={(e) => handleSubmit(e, commentEdit.postId)}
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
              {error === "Successfully Updated" ? (
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
  );
}

export default EditFormComments;
