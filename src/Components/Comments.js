import { Avatar, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteIcon from "@mui/icons-material/Delete";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import LinearProgress from "@mui/material/LinearProgress";
import { Link, useNavigate, useParams } from "react-router-dom";
import EditComment from "./EditComments";
import { useDispatch, useSelector } from "react-redux";
import {
  createComment,
  deleteComment,
  showComments,
} from "../mainRedux/features/CommentSlice";
import UserName from "./UserName";
import { useForm } from "react-hook-form";
import EditFormComments from "./EditFormComments";
import DialogModal from "./SucDialog";
import DeleteDialog from "./DeleteDialog";
function CommentPost({ postId, user }) {
  const { register, reset } = useForm();
  const { userComments, loading } = useSelector((state) => state.userComments);
  const dispatch = useDispatch();
  const [disabled, setDisabled] = useState(false);
  const [comment, setComment] = useState({ body: "" });
  const [progress, setProgress] = React.useState(0);
  const [buffer, setBuffer] = React.useState(10);
  const [error, setError] = useState("");
  const [openEdit, setOpenEdit] = React.useState(false);
  const[commentEdit, setCommentEdit] = useState();
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [deleteData, setDeleteData]= useState(false)
  const handleDeleteOpen= (data) =>{
    setDeleteOpen(true);
    setDeleteData(data);
  }
  const handleDeleteClose = ()=>{
    setDeleteOpen(false);
  }

  const handleOpenEdit = (data)=>{
    setOpenEdit(true);
    setCommentEdit(data);
  }
  const handleCloseEdit = (data)=>{
    setOpenEdit(false);
    
  }
  const edit = (<EditFormComments commentEdit={commentEdit} handleClose={handleCloseEdit}/> )

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
      setTimeout(() => {
        dispatch(createComment(payload));
      }, 500);
      setTimeout(() => {
        setDisabled(true);
        setComment("");
        setError("Succesfully created");
      }, 1000);
      setTimeout(() => {
        setError("");
      }, 3000);
    } else {
      setError("Comment is not created");
    }
  };

  function handleChange(e) {
    setComment({ ...comment, [e.target.name]: e.target.value });
  }

  const handleDelete = (id) => {
    if (id) {
      setTimeout(()=>{
      dispatch(deleteComment(id));
    },2000)
    setTimeout(()=>{
      setError("Succesfully Deleted")
    },2000)
    } else {
      setError("Comment is not deleted");
    }
  };
  return (
    <>
    {commentEdit ? <DialogModal open={openEdit} handleClose={handleCloseEdit} 
      temp={edit} name="Update Post"/>:""}
      {deleteData ? <DeleteDialog handleDeleteClose={handleDeleteClose} 
      handleDelete={handleDelete} deleteData={deleteData}
      handleDeleteOpen={handleDeleteClose} error={error} title="would you like to delete this Comment ?"/>:""}
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
                          overflowWrap: "break-word",
                          WebkitFontSmoothing: "antialiased",
                          backgroundColor: "#f0f2f5",
                          boxShadow: "none",
                          padding: "10px 2px 10px 10px",
                          marginBottom: "-8px",
                        }}
                      >
                        <div style={{  }}>
                        <Link to={`post/${post.id}`}>
              <Button
                // variant="contained"
                
                onClick={()=>handleOpenEdit(post)}
                sx={{ float: "right", padding: "0" }}
              >
                {/* Edit */}
                <ModeEditIcon color="success"/>
              </Button>{" "}</Link>
              <Link to={`todos/${post.id}/delete`}> 
              {/* <Button
                
                onClick={() => handleDeleteOpen(post)}
                sx={{float:"right" , width:"100px"}}
              > */}
               <DeleteIcon color="error"  sx={{float:"right",position:"relative",left:"20px" }} onClick={() => handleDeleteOpen(post)}/>
               </Link>
              {/* </Button></Link> */}
                          {/* <EditComment
                            postId={postId}
                            commentObj={post}
                          ></EditComment> */}
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
                  {error === "Succesfully created" ? (
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
