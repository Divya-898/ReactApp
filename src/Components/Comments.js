import { Avatar, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteIcon from "@mui/icons-material/Delete";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import LinearProgress from "@mui/material/LinearProgress";
import { Link, useNavigate} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  createComment,
  deleteComment,
  showComments,
} from "../mainRedux/features/CommentSlice";
import UserName from "./UserName";
import { useForm } from "react-hook-form";
import EditFormComments from "./EditFormComments";
import DialogModal from "./DialogModal";
import DeleteDialog from "./DeleteDialog";
function CommentPost({ postId, user }) {
  const navigate = useNavigate();
  const { register, reset } = useForm();
  const { userComments, loading, error } = useSelector((state) => state.userComments);
  const dispatch = useDispatch();
  const [disabled, setDisabled] = useState(false);
  const [comment, setComment] = useState({ body: "" });
  const [progress, setProgress] = React.useState(0);
  const [buffer, setBuffer] = React.useState(10);
  const [openEdit, setOpenEdit] = React.useState(false);
  const [commentEdit, setCommentEdit] = useState();
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [deleteData, setDeleteData] = useState(false);
  const handleDeleteOpen = (data) => {
    setDeleteOpen(true);
    setDeleteData(data);
  };
  const handleDeleteClose = () => {
    setDeleteOpen(false);
    navigate(-1);
    window.location.reload();
  };

  const handleOpenEdit = (data) => {
    setOpenEdit(true);
    setCommentEdit(data);
  };
  const handleCloseEdit = (data) => {
    setOpenEdit(false);
    navigate(-1);
    window.location.reload();
  };
  const edit = (
    <EditFormComments commentEdit={commentEdit} handleClose={handleCloseEdit} />
  );

  useEffect(() => {
    dispatch(showComments(postId));
  }, []);

  useEffect(() => {
    reset(comment);
  }, [comment]);
  const handleSubmit = (e, postId) => {
    e.preventDefault();
    console.log("postId", postId);
    let payload = {};
    payload["postId"] = postId;
    payload["name"] = user.name;
    payload["email"] = user.email;
    payload["body"] = comment.body;
    if (comment.body) {
        dispatch(createComment(payload));
        setDisabled(true)
    }
  };

  function handleChange(e) {
    setComment({ ...comment, [e.target.name]: e.target.value });
  }

  const handleDelete = (id) => {
    if (id) {
        dispatch(deleteComment(id));   
        setDisabled(true)
    } 
  };
  return (
    <>
      {commentEdit ? (
        <DialogModal
          open={openEdit}
          handleClose={handleCloseEdit}
          formData={edit}
          name="Update Post"
        />
      ) : (
        ""
      )}
      {deleteData ? (
        <DeleteDialog
          handleDeleteClose={handleDeleteClose}
          handleDelete={handleDelete}
          deleteData={deleteData}
          handleDeleteOpen={deleteOpen}
          error={error}
          content="would you like to delete this Comment ?"
          title="Delete Comment"
        />
      ) : (
        ""
      )}
      {userComments
        ? userComments.map((post) => {
            const mySentence = post.name;
            const words = post.name ? mySentence.split(" ").slice(0, 2) : "";
            for (let i = 0; i < words.length; i++) {
              words[i] = words[i][0] + words[i].substr(1);
            }
            const commentName = words.join(" ");

            return (
              <div key={post.id}>
                <div style={{ padding: 14 }} className="App">
                  <Grid
                    container
                    wrap="nowrap"
                    spacing={2}
                    sx={{ marginBottom: "-10px" }}
                  >
                    <Grid item>
                      <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
                        <p>
                          {post.name
                            ? post.name
                                .split("")
                                .slice(0, 2)
                                .map((w) => w[0])
                                .join("")
                                .toUpperCase()
                            : ""}
                        </p>
                      </Avatar>
                    </Grid>
                    <Grid justifyContent="left" item xs zeroMinWidth>
                      <Paper
                        sx={{
                          whiteSpace: "normal,color rgb(5, 5, 5)",
                          direction: "ltr",
                          borderRadius: "18px",
                          display: "block",
                          fontFamily:
                            "system-ui, -apple-system, system-ui, sans-serif",
                          fontSize: "12px",
                          lineHeight: "16.08px",
                          backgroundColor: "#f0f2f5",
                          boxShadow: "none",
                          padding: "10px 2px 10px 10px",
                          marginBottom: "-8px",
                        }}
                      >
                        <div style={{}}>
                          <Link to={`comment/${post.id}`}>
                            <Button
                              onClick={() => handleOpenEdit(post)}
                              sx={{ float: "right", padding: "0" }}
                            >
                              <ModeEditIcon color="success" />
                            </Button>{" "}
                          </Link>
                          <Link to={`comment/${post.id}/delete`}>
                            <DeleteIcon
                              color="error"
                              sx={{
                                float: "right",
                                position: "relative",
                                left: "20px",
                              }}
                              onClick={() => handleDeleteOpen(post)}
                            />
                          </Link>
                        </div>
                        <h4 style={{ margin: 0, textAlign: "left" }}>
                          {commentName}
                        </h4>
                        <span className="commentBody">{post.body}. </span>
                      </Paper>
                    </Grid>
                  </Grid>
                </div>
              </div>
            );
          })
        : ""}
      <div
        className="post-top"
        style={{ PaddingTop: "5px", marginLeft: "10px" }}
      >
        <Grid container wrap="nowrap">
          <Grid item>
            <Avatar sx={{ bgcolor: "red", margin: "15px 0px 0px 6px" }}>
              {UserName(user.name)}
            </Avatar>
          </Grid>

          <Grid justifyContent="left" item xs zeroMinWidth>
            <form
              className="login-form"
              onSubmit={(e) => handleSubmit(e, postId)}
            >
              <div style={{ display: "flex" }}>
                <>
                  <input
                    type="text"
                    placeholder="Write a comment...."
                    name="body"
                    {...register("body")}
                    disabled={disabled}
                    onChange={(e) => handleChange(e)}
                  />
                  <Button
                    className="commentBtn"
                    type="submit"
                    sx={{
                      marginTop: "15px",
                      "&:hover": { backgroundColor: "transparent" },
                    }}
                    onClick={() =>
                      reset({
                        body: "",
                      })
                    }
                  >
                    <PlayArrowIcon />
                  </Button>{" "}
                </>
              </div>
              <Box sx={{ width: "80%", margin: "5px 0px 0px 20px" }}>
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
                  {error === "Successfully Created" ? (
                    <p style={{ color: "green" }}>{error}</p>
                  ) : (
                    <p style={{ color: "red" }}>{error}</p>
                  )}
                </div>
              </Box>
            </form>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default CommentPost;
