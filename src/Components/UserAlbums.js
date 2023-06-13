import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import UserPhoto from "./UserAlbumsPhoto";
import UserAlbumsPhoto from "./UserAlbumsPhoto";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  InputLabel,
  LinearProgress,
  TextareaAutosize,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { useDispatch, useSelector } from "react-redux";
import { createAlbums } from "../mainRedux/features/AlbumSlice";
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
function UserAlbums({ commonList }) {
  const navigate = useNavigate();
  const { register, reset } = useForm();
  const { loading } = useSelector((state) => state.userAlbums);
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {setOpen(false)
    navigate(-1);
  }
  const [scroll, setScroll] = React.useState("paper");
  const [error, setError] = useState("");
  const [progress, setProgress] = useState(0);
  const [buffer, setBuffer] = useState(10);
  const [disabled, setDisabled] = useState(false);
  const { userId } = useParams();
  const [album, setAlbum] = useState({
    title: "", // required
  });

  const handleChange = (e) => {
    setAlbum({ ...album, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e, userId) => {
    e.preventDefault();
    let payload = {};
    payload["userId"] = userId;
    payload["title"] = album.title;
    if (album.title) {
      setTimeout(() => {
        dispatch(createAlbums(payload));
      }, 500);
      setTimeout(() => {
        setDisabled(true);
        setError("Succesfully created");
      }, 1000);
    } else {
      setError("Album is not Created");
    }
  };
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
          sx={{ width: "422px", height: "500px", borderRadius: "10px" }}
        >
          <div style={{ display: "flex" }}>
            <h1 style={{ padding: "10px", width: "390px" }}>Albums</h1>
            <Button
              onClick={handleOpen}
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
                Create Albums
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
                        margin: "5px 15px 0px 0px",
                      }}
                    >
                      Title
                    </InputLabel>

                    <StyledTextarea
                      disabled={disabled}
                      minRows={3}
                      type="text"
                      name="title"
                      {...register("title")}
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
          {commonList ? (
            <ImageList sx={{ height: 370, padding: "0 8px" }} cols={3} gap={8} key={commonList}>
              {commonList &&
                commonList.map((items) => {
                  var str = "";
                  if (items.photos) {
                    str = items.photos[0];
                  } else {
                    str = {
                      thumbnailUrl:
                        "https://upload.wikimedia.org/wikipedia/commons/f/fd/Pink_flower.jpg",
                    };
                  }
                  return (
                    <span key={items.id}>
                    <ImageListItem sx={{ height: "150px" }}>
                      <span style={{ marginTop: "-25px" }}></span>
                      <UserAlbumsPhoto
                        albumId={str}
                        key={items.id}
                        albumWidth={"130px"}
                        albumHeight={"100px"}
                        items={items}
                      ></UserAlbumsPhoto>
                      <ImageListItemBar title={items.title} />
                    </ImageListItem>
                    </span>
                  );
                })}
            </ImageList>
          ) : (
            ""
          )}
        </Paper>
      </Box>
    </div>
  );
}

export default UserAlbums;
