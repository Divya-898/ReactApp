import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
  InputLabel,
  LinearProgress,
  TextareaAutosize,
  Typography,
} from "@mui/material";
import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { useDispatch } from "react-redux";
import { createAlbums } from "../mainRedux/features/AlbumSlice";

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

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
function UserAlbums({ commonList }) {
  console.log(commonList)
  const dispatch = useDispatch();
  // const [albums,setAlbums ] = useState();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [scroll, setScroll] = React.useState("paper");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [loading1, setLoading1] = useState(true);
  const [progress, setProgress] = useState(0);
  const [buffer, setBuffer] = useState(10);
  const [disabled, setDisabled] = useState(false);
  // console.log("commonList" ,commonList[0].photos[0].thumbnailUrl)
  const { userId } = useParams();
  const [formData, setformData] = useState({
    title: "", // required
    // required
  });

  const handleChange = (e) => {
    setformData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e, userId) => {
    e.preventDefault();
    console.log("postId", userId);
    // payload["photos"]={ "thumbnail":streetref.current.value,}
    let payload = {};
    payload["userId"] = userId;
    // payload["name"] = user.name;
    // payload["email"] = user.email;
    payload["title"] = formData.title;

    // payload["completed"] = formData.completed;
    console.log(payload);
    if (formData.title) {
      dispatch(createAlbums(payload))
      // setTimeout(() => {
      //   setLoading1(false);
      // }, 5000);

      // setLoading(true);
      // fetch(`http://localhost:3500/albums`, {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify(payload),
      // }).then((res) => res.json());
      // setDisabled(true);
      // // setTimeout(() => {
      // //   setLoading(true);

      // // // }, 1000);
      // // setTimeout(() => {
      // //   setLoading(false);
      // //   setError("Successfully created");

      // //   // window.location.reload();
      // // }, 2000);
    } else {
      setError("Todo is not Submitted");
    }
    // .then((data) => setFormData(data));
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
          sx={{ width: "422px", height: "720px", borderRadius: "10px" }}
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
                        {error === "Successfully created" ? (
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
                      <Button type="submit" color="success" variant="contained">
                        Create
                      </Button>
                    </div>
                  </DialogActions>
                </form>
              </DialogContent>
            </Dialog>
          </div>
         {commonList ?
          <Grid
            container
            rowSpacing={4}
            columnSpacing={{ sm: 1 }}
            sx={{ padding: "0px 10px 10px 10px", width: "430px" }}
          >
            {commonList &&
              commonList.map((items) => {
                console.log(items);
                var str=""
                if(items.photos){
                 str = items.photos[0];
                console.log("obj",str)
              } else {
                  str = {
                    "thumbnailUrl":
                      "https://upload.wikimedia.org/wikipedia/commons/f/fd/Pink_flower.jpg",
                  };
                }
                str ? console.log("str",str):console.log("false");
                return (
                  <Grid item xs={4} sx={{ height: "150px", width: "100px" }}>
                    <Item
                      sx={{
                        height: "100px",
                        boxShadow: "none",
                        padding: "0px",
                        borderRadius: "10px",
                      }}
                    >
                      <UserAlbumsPhoto
                        albumId={
                         str
                        }
                        key={items.id}
                        albumWidth={"130px"}
                        albumHeight={"100px"}
                        items={items}
                      ></UserAlbumsPhoto>
                    </Item>
                    <Item
                      sx={{
                        width: "110px",
                        boxShadow: "none",
                        "letter-spacing": "0px",
                        textAlign: "start",
                        color: "black",
                        padding: "25px 0px 0px 10px"
                      }}
                    >
                      {items.title}
                    </Item>
                  </Grid>
                );
              })}
          </Grid>:""}
        </Paper>
        {/* {albums && albums.map((items) =>(
       <UserAlbumsPhoto albumId={items.id} key={items.id}/>

      ))} */}
      </Box>
    </div>
  );
}

export default UserAlbums;
