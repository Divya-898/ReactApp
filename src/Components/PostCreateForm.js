import {
  Box,
  Button,
  DialogActions,
  DialogContent,
  Divider,
  InputLabel,
  LinearProgress,
  TextareaAutosize,
} from "@mui/material";
import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import { useDispatch, useSelector } from "react-redux";
import { createPost } from "../mainRedux/features/PostSlice";
import { useParams } from "react-router-dom";
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

function PostCreateForm({ handleClose }) {
  const { register, reset } = useForm();
  const { userId } = useParams();
  const [postData, setPostData] = useState({
    title: "", // required
    body: "", // required
  });
  const [disabled, setDisabled] = useState(false);
  const { loading,error } = useSelector((state) => state.userPosts);
  const [progress, setProgress] = useState(0);
  const [buffer, setBuffer] = useState(10);
  const dispatch = useDispatch();
  const handleSubmit = (e, userId) => {
    e.preventDefault();
    let payload = {};
    payload["userId"] = userId;
    payload["title"] = postData.title;
    payload["body"] = postData.body;
    if (postData.body && postData.title) {
        dispatch(createPost(payload));
        setDisabled(true);
    }
  };
  function handleTodosChange(e) {
    setPostData({ ...postData, [e.target.name]: e.target.value });
  }
  return (
    <div>
        <form className="login-form" onSubmit={(e) => handleSubmit(e, userId)}>
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
              {...register("title")}
              onChange={(e) => handleTodosChange(e)}
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
              {...register("body")}
              onChange={(e) => handleTodosChange(e)}
            />
          </div>
          <div className="bottomDivider">
            <Divider/>
          </div>
          <DialogActions>
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
            <div
              style={{
                margin: "40px 0px 0px 0px",
                display: "flex",
              }}
            >
              <Button
                onClick={handleClose}
                color="error"
                variant="contained"
                sx={{ marginRight: "10px" }}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                color="success"
                variant="contained"
                onClick={() =>
                  reset({
                    title: "",
                    body: "",
                  })
                }
              >
                Create
              </Button>
            </div>
          </DialogActions>
        </form>
      
    </div>
  );
}

export default PostCreateForm;
