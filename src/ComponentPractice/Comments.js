import {
  Avatar,
  CardHeader,
  FormControl,
  Grid,
  IconButton,
  InputLabel,
  TextField,
} from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";
import { useQuery } from "react-query";
import Paper from "@mui/material/Paper";
import Input from "@mui/material/Input";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import LinearProgress from "@mui/material/LinearProgress";
import SendIcon from "@mui/icons-material/Send";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  Menu,
  MenuItem,
} from "@mui/material";
import { useParams } from "react-router-dom";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import EditComment from "./EditComments";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
function CommentPost({ postId, user }) {
  console.log(user);
  console.log(postId);
  const [disabled, setDisabled] = useState(false);
  const [comment, setComment] = useState();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [comments, setComments] = useState("");
  const [progress, setProgress] = React.useState(0);
  const [buffer, setBuffer] = React.useState(10);
  const [error, setError] = useState("");

  const progressRef = React.useRef(() => {});
  const { userId } = useParams();
  // const [open, setOpen] = React.useState(false);
  const [openBox, setOpenBox] = React.useState(false);
  const [loading, setLoading] = useState(false);
  const [loading1, setLoading1] = useState(true);
  const [scroll, setScroll] = React.useState("paper");
  const [values, setValue] = useState({
    title: "", // required
    body: "", // required
  });

  //  const handleClose = () => {
  //   setOpen(false);
  // };
  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
  };

  const getdata = () => {
    fetch(`http://localhost:3500/comments?postId=${postId}`)
      .then((response) => response.json())
      .then((result) => setComments(result))
      .catch((error) => console.log("error", error));
  };
  useEffect(() => {
    getdata();
  }, []);

  const handleSubmit = (e, postId) => {
    e.preventDefault();
    console.log("postId", postId);
    let payload = {};
    payload["postId"] = postId;
    payload["name"] = user.name;
    payload["email"] = user.email;
    payload["body"] = comment;
    if (comment) {
      setTimeout(() => {
        setLoading1(false);
      }, 5000);

      setLoading(true);

      fetch(`http://localhost:3500/comments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      }).then((res) => res.json());
      setDisabled(true);
      setTimeout(() => {
        setLoading(false);
           setError("Successfully created")
        window.location.reload();
      }, 10000);
    }
    else{
      setError("Comment is not created")
    }

      // progressRef.current = () => {

      //     const diff = Math.random() * 10;
      //     const diff2 = Math.random() * 10;
      //     setProgress(progress + diff);
      //     setBuffer(progress + diff + diff2);

      // };

      // const timer = setInterval(() => {
      //   progressRef.current();
      // }, 500);

      // return () => {
      //   clearInterval(timer);
      // };
    
    // .then((data) => setFormData(data));
  };
  // "postId": 2,
  // "name": "eligendi deleniti quidem qui sint nihil autem",
  // "email": "Mueller@myrl.com",
  // "body": "dolor at sed quis culpa deserunt consectetur qui praesentium\naccusamus fugiat dicta\nvoluptatem rerum ut voluptate autem\nvoluptatem repellendus aspernatur dolorem in"

  function handleChange(e) {
    setComment(e.target.value);
  }
  if (comment) {
    console.log(comment);
  }

  var nameparts = [];
  const x = user.name;
  // var nameparts = [];
  nameparts = x.split(" ");
  var initials =
    nameparts[0].charAt(0).toUpperCase() + nameparts[1].charAt(0).toUpperCase();
  return (
    <>
      {comments
        ? comments.map((post) => {
            //const x = post.name;
            const mySentence = post.name;
            const words = mySentence.split(" ").slice(0, 2);
            for (let i = 0; i < words.length; i++) {
              words[i] = words[i][0] + words[i].substr(1);
            }
            const commentName = words.join(" ");
            {
              /* {
          /* nameparts = x.split(" ");
  var initials =
    nameparts[0].toUpperCase() +
    nameparts[1].toUpperCase(); */
            }
            //console.log(v) */}
            return (
              <div style={{}}>
                <div style={{ padding: 14 }} className="App">
                  {/* <Paper style={{ padding: "40px 20px" }}> */}
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
                            .split("")
                            .slice(0, 2)
                            .map((w) => w[0])
                            .join("")
                            .toUpperCase()}
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
                          "-webkit-font-smoothing": "antialiased",
                          backgroundColor: "#f0f2f5",
                          boxShadow: "none",
                          padding: "10px 2px 10px 10px",
                          marginBottom: "-8px",
                        }}
                      >
                        <div style={{ float: "right" }}>
                          <EditComment
                            commentId={post.id}
                            postId={postId}
                            commentObj={post}
                          ></EditComment>
                        </div>
                        <h4 style={{ margin: 0, textAlign: "left" }}>
                          {commentName}
                        </h4>
                        <span className="commentBody">{post.body}. </span>
                        {/* </p> */}
                      </Paper>
                    </Grid>
                  </Grid>

                  {/* </Paper> */}
                </div>
              </div>
            );
          })
        : ""}

      {/* {comment ? <div style={{ padding: 14 }} className="App"></div> : ""} */}

      <div class="post-top" style={{ PaddingTop: "5px", marginLeft: "10px" }}>
        <Grid container wrap="nowrap">
          <Grid item>
            <Avatar sx={{ bgcolor: "red", margin: "15px 0px 0px 6px" }}>
              {initials}
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
                      // value={comment.body}
                      name="body"
                      disabled={disabled}
                      onChange={(e) => handleChange(e)}
                    />
                    <Button className="commentBtn" type="submit">
                      <PlayArrowIcon />
                    </Button>{" "}
                  </>
                
              </div>
              <Box sx={{ width: "80%", margin:"5px 0px 0px 20px"}}>
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
                {error==="Successfully created" ? <p style={{color:"green"}}>{error}</p> : <p style={{color:"red"}}>{error}</p>}
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
{
  /* <Button onClick={handleOpen}>Open modal</Button> */
}
{
  /* <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {/* <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography> 
          <FormControl>
          <InputLabel
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  
                }}
              >
                Title
              </InputLabel>
          <TextField
                required
                id="title"
                name="title"
                label="Title"
                fullWidth
                size="small"
                autoComplete="off"
                variant="outlined"
              />
   <TextField type="text" size='small' defaultValue="Normal" />
   <TextField type="text" size='small' defaultValue="Small" />
</FormControl>
        </Box>
      </Modal> */
}
{
  /* <IconButton sx={{ "&:hover": { backgroundColor: "transparent","align-items": "none"}}} key={post.id}>
              <CardHeader
                sx={{ padding: "0px",position: "relative",
  top: "-12px" }}
                avatar={
                  <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
                    <p>
                      {post.name
                        .split("")
                        .slice(0, 2)
                        .map((w) => w[0])
                        .join("").toUpperCase()}
                    </p>
                  </Avatar>
                }
              />
              {/* <span>Name:{post.name}</span> */
}
{
  /*<Paper
                sx={{
                  whiteSpace: "normal,color rgb(5, 5, 5)",
                  direction: "ltr",
                  borderRadius:"18px",
                  display: "block",
                  fontFamily: "system-ui, -apple-system, system-ui, sans-serif",
                  fontSize: "12px",
                  lineHeight: "16.08px",
                  overflowWrap: "break-word",
                  "-webkit-font-smoothing": "antialiased",
                  backgroundColor: "#f0f2f5",
                  boxShadow: "none",
                  padding: "10px 2px 10px 10px",
                  marginBottom:"-8px"
                }}
              >
                <span className="commentName">
                  <span>{commentName}</span>
                </span>
                <span className="commentBody"> {post.body}</span>
              </Paper>
            </IconButton> */
}
