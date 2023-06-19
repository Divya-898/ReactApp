import { Box, Button, DialogActions, DialogContent, Divider, InputLabel, LinearProgress, MenuItem, Select, TextField, TextareaAutosize } from '@mui/material'
import React, { useState } from 'react'
import { styled } from "@mui/material/styles";
import { useDispatch, useSelector } from 'react-redux';
import { createPost } from '../mainRedux/features/PostSlice';
import { useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { createAlbums } from '../mainRedux/features/AlbumSlice';
import { createPhotos } from '../mainRedux/features/PhotoSlice';
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

function CreatePhotos({handleClose,albums}) {
    const { register, reset } = useForm()
    const [albumTitle, setAlbumTitle] = useState("");
    const [photoData, setPhotoData] = useState({
        thumbnailUrl: "", // required
        url: "",
        title: "", // required
      }); 
      const [disabled, setDisabled] = useState(false);
      const { loading,error } = useSelector((state) => state.userPosts);
      const [scroll, setScroll] = React.useState("paper");
      const [progress, setProgress] = useState(0);
      const [buffer, setBuffer] = useState(10);
      const dispatch = useDispatch();
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
            dispatch(createPhotos(payload));
            disabled(true);
         }
      };
      function handleTodosChange(e) {
        setPhotoData({ ...photoData, [e.target.name]: e.target.value });
      }
  return (
    <div>
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
                      disabled={disabled}
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
                      disabled={disabled}
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
                      disabled={disabled}
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
                          <MenuItem value={items.id} key={items.id}>{items.title}</MenuItem>
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
                        {error === "Successfully Created" ? (
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
    </div>
  )
}

export default CreatePhotos
