import React, { useCallback } from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";

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


import { useParams, useSearchParams } from "react-router-dom";
import Profile from "./Profile";
import UserIntro from "./UserIntro";
import UserAlbums from "./UserAlbums";
import UserPhoto from "./UserPhoto";


import PrimarySearchAppBar from "./Navbar";

import UserTodos from "./Todos1";
import EditPost from "./EditPost";
import axios from "axios";
import TextareaAutosize from "@mui/base/TextareaAutosize";

import SelectedUserName from "./SelectedUser";
import { useDispatch, useSelector } from "react-redux";
import { createPost, showPost } from "../mainRedux/features/PostSlice";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  borderRadius: "10px",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

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
  const { userId } = useParams();
  // const [loading, setLoading] = useState(false);
  const [loading1, setLoading1] = useState(true);
  const [photos, setPhotos] = useState();
  const [expanded, setExpanded] = useState(false);
  const [post, setPosts] = useState([]);
  const [user, setUser] = useState();
  const [albums, setAlbums] = useState();
  const [error, setError] = useState("");
  const [value, setValue] = useState();
  // const {userPosts,loading}=useSelector((state)=>state.userPosts);
  const { userPosts, loading } = useSelector((state) => state.userPosts);
  console.log(userPosts)
  const dispatch = useDispatch();
  
  // const [open, setOpen] = React.useState(false);
  // const handleOpen = () => setOpen(true);
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState("paper");

  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
  };

  // const handleClose = () => {
  //   setOpen(false);
  // };
  const [progress, setProgress] = useState(0);
  const [buffer, setBuffer] = useState(10);
  const [commonList, setCommonList] = useState();
  const [createData, setCreateData] = useState();
  const [common, setCommonPh] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [postData, setPostData] = useState({
    title: "", // required
    body: "", // required
  });
  const[com, setCom]=useState()
  const handleClose = () => {
    setOpen(false);
  };

  //const [albums,setAlbums ] = useState();
  const current = new Date();
  // var data = AlbumsData();
  // useEffect(()=>{
  //   AlbumsData();
  // },[])
  // console.log(data)
  //const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
  //const date =current.getFullYear() + '-' + (current.getMonth() + 1) + '-' + current.getDate();
  const date = Date().toLocaleString();
  var options = { year: "numeric", month: "long", day: "numeric" };
  const currentDate = new Date();
  const dateFormate = currentDate.toLocaleDateString("en-US", options);
  const handleExpandClick = (itemid) => {
    // console.log(typeof(expanded))
  //  com ? setExpanded(!expanded) :
  setCom(itemid)
  if(com){
    if(expanded === false ){
      setExpanded(!expanded)
        // setCom("")
        
    }
    setExpanded(!expanded)
    setExpanded(!expanded)
    // else if(expanded === true ){
    //   setExpanded(!expanded)
    // }
    // else if(expanded===false){
    //   setExpanded(true)
    // }
    // }
    //  setExpanded(!expanded)
  }
  else{
    console.log(expanded)
    setExpanded(!expanded)
    // setExpanded(expanded)
  }
   
  };
  // const getData = useCallback(() => {
  //   fetch(`http://localhost:3500/posts?userId=${userId}`)
  //     .then((response) => response.json())
  //     .then((result) => setPosts(result))
  //     .catch((error) => console.log("error", error));
    
  // });
  if (post) {
    console.log("posttype",  post);
  }
  const getUserData = () => {
    fetch(`http://localhost:3500/users/${userId}`)
      .then((response) => response.json())
      .then((result) => setUser(result))
      .catch((error) => console.log("error", error));
  };
  const getAlbumData = () => {
    fetch(`http://localhost:3500/albums?userId=${userId}`)
      .then((response) => response.json())
      .then((result) => setAlbums(result))
      .catch((error) => console.log("error", error));
  };
  let str = "";
  if (albums) {
    console.log(albums);
    albums &&
      albums.map((data) => {
        // let st = data.id;
        // st2 +=st;
        const str1 = "albumId=" + data.id + "&";
        str += str1;
      });
    var sortStr = "_sort=id&_order=desc";
    str += sortStr;
  }
  useEffect(() => {
    if (str) {
      console.log("str", str);
      setCommonPh(str);
    }
    if (common) {
      getPhotosData();
    }
  }, [str, common]);

  const getPhotosData = () => {
    fetch(`http://localhost:3500/photos?${common}`)
      .then((response) => response.json())
      .then((result) => setPhotos(result))
      .catch((error) => console.log("error", error));
  };

  if (photos) {
    console.log(photos);
  }
  useEffect(() => {
    getUserData();
    getAlbumData();
  }, []);
  useEffect(() => {
    dispatch(showPost(userId))
    // getData();
  }, []);
  // var tempData
  useEffect(() => {
    let photosObj = {};
    if (photos && albums) {
      for (let i = 0; i < photos.length; i++) {
        let albumId = photos[i].albumId;
        if (photosObj[albumId] && photosObj[albumId].length > 0) {
          photosObj[albumId].push(photos[i]);
        } else {
          photosObj[albumId] = [];
          photosObj[albumId].push(photos[i]);
        }
      }
      let tempData = albums;
      for (let j = 0; j < albums.length; j++) {
        tempData[j]["photos"] = photosObj[albums[j].id];
        console.log("photosObj", tempData);
        setCommonList(tempData);
      }
    }
  }, [albums, photos]);
  if (commonList) {
    console.log("tempdata", commonList);
  }

  var initials;
  const handleSubmit = (e, userId) => {
    e.preventDefault();
    console.log("postId", userId);
    // payload["photos"]={ "thumbnail":streetref.current.value,}
    let payload = {};
    payload["userId"] = userId;
    // payload["name"] = user.name;
    // payload["email"] = user.email;
    payload["title"] = postData.title;
    payload["body"] = postData.body;
    
    
    if (postData.body && postData.title) {
      dispatch(createPost(payload));
      // setLoading(true);
    //   axios
    //     .post(`http://localhost:3500/posts`, payload)
    //     .then((res) => console.log("successfully"));
    //     setDisabled(true)
     
    //   setTimeout(() => {
    //     // setLoading(false);
    //     setError("Succesfully Created");

    //     window.location.reload();
    //   }, 2000);

    //   // window.location.reload();
    // } else {
    //   setError("not submitted");
    // }
    // // method: "POST",
    // // headers: { "Content-Type": "application/json" },
    // body: JSON.stringify(payload),
    // }).then((res) => {console.log(res)})
    // //  .then((data) => setPostData(data));
    // setError(err.response.data)
  };
}
  function handleTodosChange(e) {
    setPostData({ ...postData, [e.target.name]: e.target.value });
  }
  function editHandle(e, item) {
    console.log("item", item);
  }
  // // const handleClick = (e) => {
  // //   e.preventDefault();
  // //   if(postData){
  // //     alert("successfully")
  // //   }

  // }
  // const handleSubmitBtn=()=>{
  //   if(postData){
  //     alert("successfully")
  //   }
  // }

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
                <UserIntro user={user}></UserIntro>
                {commonList ? (
                  <UserAlbums commonList={commonList}></UserAlbums>
                ) : (
                  ""
                )}

                <UserTodos></UserTodos>
                {/* <Newtodos></Newtodos> */}

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
                          {initials}
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
                    {/* <Button onClick={handleClickOpen('paper')}>scroll=paper</Button> */}

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
                            {/* <TextField
                              sx={{
                                paddingTop: "10px",
                                marginLeft: "5px",
                              }}
                              InputProps={{ sx: { height: 25, width:330, border:"1px solid black" } }}
                              type="text"
                              name="title"
                              onChange={(e) => handleTodosChange(e)}
                            />{" "} */}
                            <StyledTextarea
                              // InputProps={{ sx: { height: 25, width:330, border:"1px solid black" } }}
                              disabled={disabled}
                              type="text"
                              name="title"
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
                              onChange={(e) => handleTodosChange(e)}
                            />
                          </div>
                            {/* <TextField
                              sx={{
                                paddingTop: "10px",
                              }}
                              InputProps={{ sx: { height: 25 } }}
                              type="text"
                              name="body"
                               onChange={(e) => handleTodosChange(e)}
                            /> */}
                         
                          {/* <button
                            className="login-btn"
                            type="submit"
                            style={{ float: "right" }}
                          >
                            Submit
                          </button>  */}
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
                              {error==="Succesfully Created" ? <p style={{color:"green"}}>{error}</p> : <p style={{color:"red"}}>{error}</p>}
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
                    Create
                  </Button>
                </div>
          </DialogActions>
                        </form>
                      </DialogContent>
                    </Dialog>
                  </div>
                </Card>
                {/* <div class="my-post">
          <div class="post-top">
            <img src="images/images/profile.png"/>
            <input type="text" placeholder="What's on you mind?"/>
          </div> 
        </div>*/}
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
                        <EditPost edit={items.id} postId={items}></EditPost>
                        <SelectedUserName user={user} />
                        <CardContent>
                          <Typography variant="body2">
                            <b>
                              {items.title}
                              {/* {items.title.charAt(0).toUpperCase() +
                              items.title.slice(1).toLowerCase()} */}
                            </b>
                          </Typography>
                          <Typography variant="body2">
                            {items.body}
                            {/* {items.body.charAt(0).toUpperCase() +
                            items.body.slice(1).toLowerCase()} */}
                          </Typography>
                        </CardContent>

                        <div>
                          {commonList ? (
                            <img
                              src={commonList[0].photos[0].thumbnailUrl}
                              alt="photo"
                              width="550px"
                            ></img>
                          ) : (
                            ""
                          )}
                        </div>
                        {/* <UserAlbumsPhoto
                            albumId={commonList[0].photos[0].thumbnailUrl}
                            albumWidth={"550px"}
                            albumHeight={"210p"}
                          sx={{borderRadius:"0px"}}></UserAlbumsPhoto> */}

                        {/* <UserAlbumsPhoto user={user}></UserAlbumsPhoto>  */}

                        {/* // component="img"
                  // height="194"
                  // image="https://upload.wikimedia.org/wikipedia/commons/f/fb/Breakfast%21.jpg"
                  // alt="Paella dish" */}

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
                       {(items.id === com) ? <Collapse in={expanded}>
                          <CardContent sx={{ padding: "0px" }}>
                            <CommentPost
                              postId={items.id}
                              user={user}
                              items={items}
                            ></CommentPost>
                          </CardContent>
                        </Collapse>:""}
                      </Card>
                    </>
                  ))}
                ;
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
