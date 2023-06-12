import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { useEffect, useState } from "react";
import {
  Divider,
  ImageList,
  ImageListItemBar,
  LinearProgress,
} from "@mui/material";
import ImageListItem from "@mui/material/ImageListItem";
import { styled } from "@mui/material/styles";

import { Button, TextField } from "@mui/material";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";

import DialogTitle from "@mui/material/DialogTitle";
import AddCircleIcon from "@mui/icons-material/AddCircle";

import { trackWindowScroll } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";

import Select from "@mui/material/Select";

import Edit from "./Edit";
import { useDispatch, useSelector } from "react-redux";
import { createPhotos } from "../mainRedux/features/PhotoSlice";
import { useForm } from "react-hook-form";
function UserPhoto({ photos, albums }) {
  const{register,reset} = useForm();
  const dispatch = useDispatch();
  const [photoData, setPhotoData] = useState({
    thumbnailUrl: "", // required
    url: "",
    title: "", // required
  });
const {loading} = useSelector((state)=>state.userPhotos)
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState("paper");

  const [error, setError] = useState("");

  const [albumTitle, setAlbumTitle] = useState("");
  // const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [buffer, setBuffer] = useState(10);
  const [disabled, setDisabled] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
  };
  const handleChange = (event) => {
    setAlbumTitle(event.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let payload = {};
    payload["albumId"] = albumTitle;
    payload["thumbnailUrl"] = photoData.thumbnailUrl;
    payload["url"] = photoData.url;
    payload["title"] = photoData.title;

    if (photoData.title && photoData.thumbnailUrl) {
      setTimeout(() => {
        dispatch(createPhotos(payload));
      }, 500);
      setTimeout(() => {
        setDisabled(true);
        setError("Succesfully created");
      }, 1000);
    } else {
      setError("Photo is not Created");
    }
  };
  function handleTodosChange(e) {
    setPhotoData({ ...photoData, [e.target.name]: e.target.value });
  }

  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": {
            m: 1,
          },
        }}
      >
        <Paper
          elevation={3}
          sx={{ width: "422px", borderRadius: "10px", height: "500px" }}
        >
          <div style={{ display: "flex" }}>
            <h1 style={{ padding: "10px", width: "390px" }}>Photos</h1>
            <Button
              onClick={handleClickOpen("paper")}
              sx={{
                "&:hover": {
                  backgroundColor: "#FFF",
                },
              }}
            >
              <AddCircleIcon />
            </Button>
          </div>
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
                  maxHeight: 400,
                },
              }}
            >
              <DialogTitle id="scroll-dialog-title" sx={{ color: "black" }}>
                Create Photo
              </DialogTitle>
              <DialogContent dividers={scroll === "paper"}>
                <form className="login-form" onSubmit={(e) => handleSubmit(e)}>
                  <div style={{ display: "flex" }}>
                    <InputLabel
                      sx={{
                        padding: "10px",
                      }}
                    >
                      Photo-Title
                    </InputLabel>
                    <TextField
                      sx={{
                        paddingTop: "10px",
                        marginLeft: "5px",
                      }}
                      InputProps={{ sx: { height: 25 } }}
                      type="text"
                      name="title"
                      {...register("title")}
                      onChange={(e) => handleTodosChange(e)}
                    />{" "}
                  </div>
                  <div style={{ display: "flex" }}>
                    <InputLabel
                      sx={{
                        padding: "10px",
                        margin: "0px 13px 0px 0px",
                      }}
                    >
                      Photo-Url
                    </InputLabel>
                    <TextField
                      sx={{
                        paddingTop: "10px",
                      }}
                      InputProps={{ sx: { height: 25 } }}
                      type="text"
                      name="url"
                      {...register("url")}
                      onChange={(e) => handleTodosChange(e)}
                    />{" "}
                  </div>

                  <div style={{ display: "flex" }}>
                    <InputLabel
                      sx={{
                        padding: "10px",
                        margin: "0px 6px 0px 0px",
                      }}
                    >
                      Thumb-Url
                    </InputLabel>
                    <TextField
                      sx={{
                        paddingTop: "10px",
                      }}
                      InputProps={{ sx: { height: 25 } }}
                      type="text"
                      name="thumbnailUrl"
                      {...register("thumbnailUrl")}
                      onChange={(e) => handleTodosChange(e)}
                    />
                  </div>
                  <div style={{ display: "flex" }}>
                    <InputLabel
                      sx={{
                        padding: "10px",
                      }}
                    >
                      Album-Title
                    </InputLabel>

                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      label="Title"
                      onChange={handleChange}
                    >
                      {albums &&
                        albums.map((items) => (
                          <MenuItem value={items.id}>{items.title}</MenuItem>
                        ))}
                    </Select>
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
                    <Box sx={{ width: "80%", margin: "10px 0px 0px 70px" }}>
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
                        style={{
                          position: "relative",
                          left: "80px",
                          color: "red",
                        }}
                      >
                        {error === "Succesfully created" ? (
                          <p style={{ color: "green" }}>{error}</p>
                        ) : (
                          <p style={{ color: "red" }}>{error}</p>
                        )}
                      </div>
                    </Box>

                    <div
                      style={{ margin: "40px 0px 0px 0px", display: "flex" }}
                    >
                      <Button
                        onClick={handleClose}
                        color="error"
                        variant="contained"
                        sx={{ marginRight: "10px" }}
                      >
                        Cancel
                      </Button>
                      <Button type="submit" color="success" variant="contained"
                       onClick={() =>
                              reset({
                                title: "",
                                thumbnailUrl:"",
                                url:"",
                                albumTitle:"",
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

          <ImageList sx={{ height: 370, padding: "0 8px" }} cols={3} gap={8}>
            {photos &&
              photos.map((item) => (
                <>
                  <ImageListItem key={item.img} sx={{ height: "150px" }}>
                    <span style={{ marginTop: "-25px" }}>
                      <Edit photoUrl={item}></Edit>
                    </span>
                    <ImageListItemBar title={item.title} position="bottom" />
                    <img
                      src={item.thumbnailUrl}
                      width="100px"
                      height="100px"
                      alt={item.title}
                      loading="lazy"
                    />
                  </ImageListItem>
                </>
              ))}
          </ImageList>
        </Paper>
      </Box>
    </div>
  );
}

export default trackWindowScroll(UserPhoto);

