import React, { useEffect, useState } from "react";

import axios from "axios";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  InputLabel,
  LinearProgress,
  Menu,
  MenuItem,
  TextField,
  TextareaAutosize,
  Typography,
} from "@mui/material";
import { useParams } from "react-router-dom";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { styled } from "@mui/material/styles";
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

export default function EditTodos({ todos }) {
  // console.log("comments",commentId);
  const { userId } = useParams();
  const [open, setOpen] = React.useState(false);
  const [openBox, setOpenBox] = React.useState(false);
  const [scroll, setScroll] = React.useState("paper");
  const [values, setValue] = useState(todos);
  const [progress, setProgress] = useState(0);
  const [buffer, setBuffer] = useState(10);
  const [loading, setLoading] = useState(false);
  const [loading1, setLoading1] = useState(true);
  const [disabled, setDisabled] = useState(false);
  const [error, setError] = useState("");
  // ({
  //   title: "", // required
  //   completed: "",

  // });
  const [anchorEl, setAnchorEl] = React.useState(null);
  const menuOpen = Boolean(anchorEl);
  const handleClickMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleClickOpen1 = () => {
    setOpenBox(true);
  };

  const handleClose1 = (event, reason) => {
    if (reason !== "backdropClick") {
      setOpenBox(false);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
  };
  // useEffect(() => {
  //   axios
  //     .get(`http://localhost:3500/todos/${todos.id}`)
  //     .then((response) => {
  //       setValue(response.data);
  //       console.log(response.data);
  //     })
  //     //.then((result) => setValue(result))
  //     .catch((error) => console.log("error", error));
  // }, []);

  const handleSubmit = (e, id) => {
    e.preventDefault();
    console.log("comments");
    let payload = {};
    payload["userId"] = id;
    payload["title"] = values.title;
    payload["completed"] = values.completed;

    if (values.title) {
        // setTimeout(() => {
        //   setLoading(true);
        // }, 5000);
        setLoading(true)
      axios
        .put(`http://localhost:3500/todos/${todos.id}`, payload)
        .then((res) => {
          console.log("hello");
        });
        // setTimeout(() => {
        //   setLoading(true);
  
         
        // }, 10000);
        setDisabled(true);
        setTimeout(() => {
          setLoading(false);
          setError("Succesfully updated");
  
          window.location.reload();
        }, 20000);
    }
    else{
      setError("Todo is not Submitted")
    }
      // setTimeout(()=>{
      //     window.location.reload();
      // }, 1000)
    
  };
  const handleDelete = (id) => {
    if (id) {
      setTimeout(() => {
        setLoading1(false);
      }, 5000);
      axios.delete(`http://localhost:3500/todos/${todos.id}`).then((res) => {
        // window.location.reload();
      });
      setTimeout(() => {
        setLoading(true);

       
      }, 10000);
      setTimeout(() => {
        setLoading(false);
        setError("Succesfully Deleted");

        window.location.reload();
      }, 20000);
  }
  else{
    setError("Todos is not deleted")
  }
    
  };

  function handleChange(e) {
    setValue({ ...values, [e.target.name]: e.target.value });
  }
  return (
    <>
      <div>
        <div>
          <Button
            sx={{ position: "relative", left: "310px" }}
            id="basic-button"
            aria-controls={menuOpen ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={menuOpen ? "true" : undefined}
            onClick={handleClickMenu}
          >
            <div>
              <MoreVertIcon sx={{ float: "right" }} />
            </div>
          </Button>

          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={menuOpen}
            onClose={handleCloseMenu}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem>
              <Button
                onClick={handleClickOpen("paper")}
                sx={{ float: "right" }}
              >
                Edit
              </Button>{" "}
            </MenuItem>
            <MenuItem>
              {" "}
              <Button onClick={handleClickOpen1} sx={{ float: "right" }}>
                delete
              </Button>
            </MenuItem>
          </Menu>
        </div>

        <div>
          <Dialog disableEscapeKeyDown open={openBox} onClose={handleClose1}>
            <DialogTitle>Delete Todos</DialogTitle>
            <Divider />
            <DialogContent>
              <Box component="form" sx={{ display: "flex", flexWrap: "wrap" }}>
                <Typography> would you like to delete this todo ? </Typography>
              </Box>
            </DialogContent>
          
            <DialogActions>
            <Box sx={{ width: "80%", margin:"-30px 0px 0px 70px" }}>
                              {loading ? (
                                <LinearProgress
                                  variant="buffer"
                                  value={progress}
                                  valueBuffer={buffer}
                                />
                              ) : (
                                ""
                              )}
                              <div className="message" style={{position:"relative"}}>
                              {error==="Succesfully Deleted" ? <p style={{color:"green"}}>{error}</p> : <p style={{color:"red"}}>{error}</p>}
                            </div>
                            </Box>
              <Button onClick={handleClose1} variant="contained" color="error">
                Cancel
              </Button>
              <Button
                //onClick={e=>handleDelete(commentId)}
                variant="contained"
                onClick={(e) => handleDelete(todos.id)}
                color="success"
              >
                Ok
              </Button>
            </DialogActions>
          </Dialog>
        </div>
        <Dialog
          open={open}
          onClose={handleClose}
          scroll={scroll}
          aria-labelledby="scroll-dialog-title"
          aria-describedby="scroll-dialog-description"
          PaperProps={{
            sx: {
              width: "50%",
              maxHeight: 300,
            },
          }}
        >
          <DialogTitle id="scroll-dialog-title" sx={{ color: "black" }}>
            Update Todos
          </DialogTitle>
          <DialogContent dividers={scroll === "paper"}>
            <form
              className="login-form"
              onSubmit={(e) => handleSubmit(e, userId)}
            >
              {/* <div style={{ display: "flex" }}>
            <InputLabel
              sx={{
                padding: "10px",
              }}
            >
              Title
            </InputLabel>
            <TextField
              sx={{
                paddingTop: "10px",
                marginLeft: "5px",
              }}
              InputProps={{ sx: { height: 25 } }}
              type="text"
              name="title"
               value={values.title}
              onChange={e => handleChange(e)}
            />
          </div>
          <div style={{ display: "flex" }}>
            <InputLabel
              sx={{
                padding: "10px",
              }}
            >
              Status
            </InputLabel>
            <TextField
              sx={{
                paddingTop: "10px",
                marginLeft: "5px",
              }}
              InputProps={{ sx: { height: 25 } }}
              type="text"
              name="completed"
               value={values.completed}
              onChange={e => handleChange(e)}
            />
          </div> */}
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
                  name="Title"
                  value={values.title}
                  onChange={(e) => handleChange(e)}
                />
              </div>

              <div style={{ display: "flex" }}>
                <InputLabel
                  sx={{
                    padding: "8px",
                    margin: "5px 0px 0px 1px",
                  }}
                >
                  Status
                </InputLabel>
                <StyledTextarea
                  type="text"
                  disabled={disabled}
                  name="completed"
                  value={values.completed}
                  onChange={(e) => handleChange(e)}
                />
              </div>

              {/* <button
            className="login-btn"
            type="submit"
            style={{ float: "right" }}
          >
            Submit
          </button>  */}
              <DialogActions dividers={scroll === "paper"}>
              <Box sx={{ width: "80%", margin:"-30px 0px 0px 70px" }}>
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
                              {error==="Succesfully updated" ? <p style={{color:"green"}}>{error}</p> : <p style={{color:"red"}}>{error}</p>}
                            </div>
                            </Box>
                <Button onClick={handleClose}  color="error"
                              variant="contained">Cancel</Button>
                <Button type="submit"  
                              color="success"
                              variant="contained">Submit</Button>
              </DialogActions>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
}
