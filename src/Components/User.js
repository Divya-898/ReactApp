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
import { useCallback, useEffect, useState } from "react";
import { Button, Container } from "@mui/material";
import CommentPost from "./Comments";
import { Link, useNavigate, useParams } from "react-router-dom";
import Profile from "./Profile";
import UserIntro from "./UserIntro";
import UserAlbums from "./UserAlbums";
import UserPhoto from "./UserPhoto";
import PrimarySearchAppBar from "./Navbar";
import UserTodos from "./Todos1";
import { useDispatch, useSelector } from "react-redux";
import { showUser } from "../mainRedux/features/UserSlice";
import { showPhotos } from "../mainRedux/features/PhotoSlice";
import { showAlbums } from "../mainRedux/features/AlbumSlice";
import DialogModal from "./DialogModal";
import PostCreateForm from "./PostCreateForm";
import PostEditForm2 from "./PostEditForm2";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteIcon from "@mui/icons-material/Delete";
import DeleteDialog from "./DeleteDialog";
import { deletePost, showPost } from "../mainRedux/features/PostSlice";
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
  const { user } = useSelector((state) => state.userIntro);
  const [commonList, setCommonList] = useState("");
  const [common, setCommonPh] = useState("");
  const [com, setCom] = useState();
  const { error,loading, userPosts } = useSelector((state) => state.userPosts);
  const [expanded, setExpanded] = useState(false);
  // const [error, setError] = useState("");
  const { photos } = useSelector((state) => state.userPhotos);
  const { albums } = useSelector((state) => state.userAlbums);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [postEdit, setPostEdit] = useState();
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
    setPostEdit(data);
  };
  const handleCloseEdit = () => {
    setOpenEdit(false);
    navigate(-1);
    window.location.reload();
  };
  const handleClickOpen = () => () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    navigate(-1);
    window.location.reload();
  };

  //call edit post
  const temp = <PostCreateForm handleClose={handleClose} />;
  const edit = (
    <PostEditForm2 postEdit={postEdit} handleClose={handleCloseEdit} />
  );

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
  }, [str]);
  useEffect(() => {
    //  let isCanceled = false;
    // const controller = new AbortController();
    //   const signal = controller.signalconst 
    // const dispatchUser = 
   if(userId) {
    dispatch(showUser(userId))
   }
   
    // dispatch(showAlbums(userId));
    // return()=>{
    //   isCanceled = true;
     
    //   //controller?.abort();
    // }
  }, [dispatch,userId]);
  useEffect(() => {
    dispatch(showPost(userId));
  }, []);

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

  const handleDelete = (id) => {
    if (id) {
        dispatch(deletePost(id));
    }
  };

  return (
    <>
      {postEdit ? (
        <DialogModal
          open={openEdit}
          handleClose={handleCloseEdit}
          formData={edit}
          name="Update Post"
        />
      ) : (
        <DialogModal
          open={open}
          handleClose={handleClose}
          formData={temp}
          name="Create Post"
        />
      )}

      {deleteData ? (
        <DeleteDialog
          handleDeleteClose={handleDeleteClose}
          loading={loading}
          handleDelete={handleDelete}
          deleteData={deleteData}
          handleDeleteOpen={deleteOpen}
          error={error}
          content="would you like to delete this Post ?"
          title="Delete Post"
        />
      ) : (
        ""
      )}
      {user ? (
        <>
          <PrimarySearchAppBar user={user}></PrimarySearchAppBar>
          <Profile user={user}></Profile>
          <Container
            style={{ maxWidth: "inherit", backgroundColor: "#f0f2f5" }}
          >
            <Container className="mainWrapper"style={{ display: "flex", width: "999px" }}>
              <Container className="userAddress">
                {user && user.address && user.company ? (
                  <UserIntro user={user}></UserIntro>
                ) : (
                  ""
                )}
                <UserAlbums commonList={commonList}></UserAlbums>
                <UserTodos></UserTodos>
                {/* <UserPhoto
                  photos={photos}
                  albums={albums}
                  sx={{ borderRadius: "0px" }}
                ></UserPhoto> */}
              </Container>

              <div className="cardWrapper">
                <Card className="userCard"
                >
                  <CardHeader
                    avatar={
                      user ? (
                        <Avatar sx={{ bgcolor: red[500] }}>
                          {UserName(user.name)}
                        </Avatar>
                      ) : (
                        ""
                      )
                    }
                  />
                  <Link to={`post`} style={{ width: "100%" }}>
                    <div style={{ width: "100%" }}>
                      <input
                        className="commentInput"
                        type="text"
                        placeholder="What's on you mind?"
                        onClick={handleClickOpen("paper")}
                      />
                    </div>
                  </Link>
                </Card>
                {userPosts &&
                  userPosts.map((items) => (
                    <Card className="editCard"
                      key={items.id}
                    >
                      <div className="editHandler"
                      >
                        <div>
                          <Link to={`post/${items.id}`}>
                            <Button 
                              onClick={() => handleOpenEdit(items)}
                              sx={{ float: "right", padding: "0" }}
                            >
                              <ModeEditIcon color="success" />
                            </Button>{" "}
                          </Link>
                        </div>
                        <div style={{ marginLeft: "40px" }}>
                          <Link to={`post/${items.id}/delete`}>
                            <DeleteIcon
                              color="error"
                              onClick={() => handleDeleteOpen(items)}
                              sx={{
                                float: "right",
                                padding: "0",
                                position: "relative",
                                left: "20px",
                              }}
                            />
                          </Link>
                        </div>
                      </div>
                      <CardHeader
                        sx={{ padding: "16px 9px 0px" }}
                        avatar={
                          <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
                            <p>{UserName(user.name)}</p>
                          </Avatar>
                        }
                        action={<IconButton aria-label="settings"></IconButton>}
                        title={user.name}
                        subheader={dateFormate}
                      />
                      <CardContent>
                        <Typography variant="body2">
                          <b>
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
