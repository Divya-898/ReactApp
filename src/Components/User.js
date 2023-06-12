import React, { useCallback } from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import UserName from "./UserName";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

import {
  Button,
  Container,
  Divider,
  InputLabel,
  LinearProgress,
} from "@mui/material";
import CommentPost from "./Comments";
import { useNavigate, useParams } from "react-router-dom";
import Profile from "./Profile";
import UserIntro from "./UserIntro";
import UserAlbums from "./UserAlbums";
import UserPhoto from "./UserPhoto";
import PrimarySearchAppBar from "./Navbar";
import UserTodos from "./Todos1";
import EditPost from "./EditPost";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import { useDispatch, useSelector } from "react-redux";
import { createPost, showPost } from "../mainRedux/features/PostSlice";
import { showUser } from "../mainRedux/features/UserSlice";
import { showPhotos } from "../mainRedux/features/PhotoSlice";
import { showAlbums } from "../mainRedux/features/AlbumSlice";
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

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));
function User() {
  const navigate = useNavigate();
  const { userId } = useParams();
  const { register, reset } = useForm()
  const { user} = useSelector((state) => state.userIntro);
  const { post, loading } = useSelector((state) => state.userPosts);
  const [expanded, setExpanded] = useState(false);
  const [error, setError] = useState("");
  const { userPosts } = useSelector((state) => state.userPosts);
  const { photos } = useSelector((state) => state.userPhotos);
  const { albums } = useSelector((state) => state.userAlbums);
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState("paper");
  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    navigate(-1);
  };
  const [progress, setProgress] = useState(0);
  const [buffer, setBuffer] = useState(10);
  const [commonList, setCommonList] = useState("");
  const [common, setCommonPh] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [com, setCom] = useState();
  const [postData, setPostData] = useState({
    title: "", // required
    body: "", // required
  });
  
  var options = { year: "numeric", month: "long", day: "numeric" };
  const currentDate = new Date();
  const dateFormate = currentDate.toLocaleDateString("en-US", options);
  const handleExpandClick = (itemid) => {
    setCom(itemid);
    setExpanded(true);
    if (com) {
      if (expanded === true) setExpanded(!expanded);
    }
  };
  let str = "";
  if (albums) {
    albums &&
      albums.map((data) => {
        const str1 = "albumId=" + data.id + "&";
        str += str1;
      });
    var sortStr = "_sort=id&_order=desc";
    str += sortStr;
  }
  useEffect(() => {
    if (str) {
      setCommonPh(str);
    }
    if (common) {
      dispatch(showPhotos(common));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [str, common]);

  useEffect(() => {
    if (userId) {
      dispatch(showUser(userId));
     
    }
    dispatch(showAlbums(userId));
  }, [dispatch, userId]);
  useEffect(()=>{
    dispatch(showPost(userId));
  },[])

  useEffect(() => {
    if (photos && albums && photos.length > 0 && albums.length > 0) {
      let photosObj = {};
      for (let i = 0; i < photos.length; i++) {
        let albumId = photos[i].albumId;
        if (photosObj[albumId] && photosObj[albumId].length > 0) {
          photosObj[albumId].push(photos[i]);
        } else {
          photosObj[albumId] = [];
          photosObj[albumId].push(photos[i]);
        }
      }
      var albumsObj = [];
      for (let j = 0; j < albums.length; j++) {
        let temp = {};
        temp["photos"] = photosObj[albums[j].id];
        temp["id"] = albums[j].id;
        temp["title"] = albums[j].title;
        albumsObj.push(temp);
      }
      setCommonList(albumsObj);
    }
  }, [albums, photos]);

  // useEffect(() => {
  //   reset(postData);
  // }, [postData]);
  const handleSubmit = (e, userId) => {
    e.preventDefault();
    let payload = {};
    payload["userId"] = userId;
    payload["title"] = postData.title;
    payload["body"] = postData.body;
    if (postData.body && postData.title) {
      
      setTimeout(() => {
        dispatch(createPost(payload));
      }, 500);
      setTimeout(() => {
        setDisabled(true);
        setError("Succesfully created");
      }, 1500);
      setTimeout(() => {
        window.location.reload();
       
      }, 3000);
    }
  };
  function handleTodosChange(e) {
    setPostData({ ...postData, [e.target.name]: e.target.value });
  }
  return (
    <>
      {user ? (
        <>
          <PrimarySearchAppBar user={user}></PrimarySearchAppBar>
          <Profile user={user}></Profile>
          <Container
            style={{ maxWidth: "inherit", backgroundColor: "#f0f2f5" }}
          >
            <Container style={{ display: "flex", width: "999px" }}>
              <Container
                style={{
                  height: "470px",
                  margin: "10px 0",
                  padding: "10px 15px",
                  "flex-basis": "38%",
                  "margin-right": "40px",
                }}
              >
                {user && user.address && user.company ? (
                  <UserIntro user={user}></UserIntro>
                ) : (
                  ""
                )}
                {/* <UserAlbums commonList={commonList}></UserAlbums>
                <UserTodos></UserTodos> */}
                <UserPhoto
                  photos={photos}
                  albums={albums}
                  sx={{ borderRadius: "0px" }}
                ></UserPhoto>
              </Container>

              <div className="cardWrapper">
                <Card
                  sx={{
                    width: "550px",
                    margin: "0px 40px 10px",
                    display: "flex",
                    borderRadius: "10px",
                  }}
                >
                  <CardHeader
                    avatar={
                      user ? (
                        <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                          {UserName(user.name)}
                        </Avatar>
                      ) : (
                        ""
                      )
                    }
                  />
                  <input
                    className="commentInput"
                    type="text"
                    placeholder="What's on you mind?"
                    onClick={handleClickOpen("paper")}
                  />
                  <div>
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
                      <DialogTitle
                        id="scroll-dialog-title"
                        sx={{ color: "black" }}
                      >
                        Create Post
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
                          <Box
                          sx={{ width: "80%", margin: "-10px 0px 0px 70px" }}
                        >
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
                      </DialogContent>
                    </Dialog>
                  </div>
                </Card>
                {userPosts &&
                  userPosts.map((items) => (
                    <>
                      <Card
                        sx={{
                          maxWidth: 554,
                          marginBottom: "15px",
                          marginLeft: "40px",
                          backgroundColor: "#ffffff",
                          borderRadius: "10px",
                        }}
                        key={items.id}
                      >
                        <EditPost postId={items}></EditPost>
                        <CardHeader
                          sx={{ padding: "16px 9px 0px" }}
                          avatar={
                            <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
                              <p>{UserName(user.name)}</p>
                            </Avatar>
                          }
                          action={
                            <IconButton aria-label="settings"></IconButton>
                          }
                          title={user.name}
                          subheader={dateFormate}
                        />
                        <CardContent>
                          <Typography variant="body2">
                            <b>
                              {/* {items.title} */}
                              {items.title != null
                                ? items.title.charAt(0).toUpperCase() +
                                  items.title.slice(1).toLowerCase()
                                : ""}
                            </b>
                          </Typography>
                          <Typography variant="body2">
                            {items.body != null
                              ? items.body.charAt(0).toUpperCase() +
                                items.body.slice(1).toLowerCase()
                              : ""}
                          </Typography>
                        </CardContent>

                        <div>
                          {commonList ? (
                            <img
                              src={commonList[0].photos[0].thumbnailUrl}
                              alt=""
                              width="550px"
                            ></img>
                          ) : (
                            ""
                          )}
                        </div>
                        <CardActions disableSpacing>
                          <Typography>Comments:</Typography>
                          <ExpandMore
                            onClick={() => handleExpandClick(items.id)}
                            aria-expanded={expanded}
                            aria-label="show more"
                          >
                            <ExpandMoreIcon />
                          </ExpandMore>
                        </CardActions>
                        {items.id === com ? (
                          <Collapse in={items.id === com}>
                            <CardContent sx={{ padding: "0px" }}>
                              <CommentPost
                                postId={items.id}
                                user={user}
                                items={items}
                              ></CommentPost>
                            </CardContent>
                          </Collapse>
                        ) : (
                          ""
                        )}
                      </Card>
                    </>
                  ))}
              </div>
            </Container>
          </Container>
        </>
      ) : (
        ""
      )}
    </>
  );
}

export default User;
