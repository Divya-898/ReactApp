import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Link, useParams } from "react-router-dom";
import Checkbox, { checkboxClasses } from "@mui/material/Checkbox";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  Grid,
  InputLabel,
  LinearProgress,
  TextField,
  TextareaAutosize,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import React, { useCallback, useEffect, useState } from "react";
import Modal from "@mui/material/Modal";
import EditTodos from "./EditTodos";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { displayPartsToString } from "typescript";
import { useDispatch, useSelector } from "react-redux";
import { createUser, showTodo } from "../mainRedux/features/TodoSlice";
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

function UserTodos() {
  const { userId } = useParams();
  console.log("userID", userId);
  const { todos, loading } = useSelector((state) => state.app);
  //  const{loading, todos} = useSelector((state) => state.app));
  // console.log("todos", todos);
  const dispatch = useDispatch();
  //   console.log(user)
  // const [todos, setTodos] = useState();
  const [checked, setChecked] = React.useState(true);
  // const [loading, setLoading] = useState(false);
  // const [loading1, setLoading1] = useState(true);
  const [progress, setProgress] = useState(0);
  const [buffer, setBuffer] = useState(10);
  const [disabled, setDisabled] = useState(false);
  const [formData, setformData] = useState({
    title: "", // required
    completed: "", // required
  });
  //   const [comment, setComment] = useState();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [scroll, setScroll] = React.useState("paper");
  const [error, setError] = useState("");
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const IsParsable = (data) => {
    try {
      JSON.parse(data);
    } catch (e) {
      return false;
    }
    return true;
  };

  // const getData = useCallback(() => {
  //   fetch(`http://localhost:3500/todos?userId=${userId}`)
  //     .then((response) => response.json())
  //     .then((result) => setTodos(result))
  //     .catch((error) => console.log("error", error));
  //   //console.log(match)
  // });
  const handle = () => {};
  // if(todos){
  //  console.log(typeof(todos[1].completed))
  // }
  const handleSubmit = (e, userId) => {
    e.preventDefault();
    console.log("postId", userId);
    // payload["photos"]={ "thumbnail":streetref.current.value,}
    let payload = {};
    payload["userId"] = userId;
    // payload["name"] = user.name;
    // payload["email"] = user.email;
    payload["title"] = formData.title;
    payload["completed"] = formData.completed;
    if (formData.title && formData.completed) {
      dispatch(createUser(payload));
      // setTimeout(() => {
      //   setLoading1(false);
      // }, 5000);

      // setLoading(true);
      //   fetch(`http://localhost:3500/todos`, {
      //     method: "POST",
      //     headers: {'Content-Type' : 'application/json'},
      //     body: JSON.stringify(payload),
      //   })
      //     .then((res) => res.json())
      //     setDisabled(true)
      //     // setTimeout(() => {
      //     //   setLoading(true);

      //     // }, 1000);
      //     setTimeout(() => {
      //       // setLoading(false);
      //       setError("Successfully created");

      //       window.location.reload();
      //     }, 2000);
      // }
      // else{
      //   setError("Todo is not Submitted")
      // }
    } // .then((data) => setFormData(data));
  };
  function handleTodosChange(e) {
    setformData({ ...formData, [e.target.name]: e.target.value });
  }
  useEffect(() => {
    // getData();
    dispatch(showTodo(userId));
  }, []);
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": {
            m: 1,
            width: "422px",
            height: "600px",
          },
        }}
      >
        <Paper elevation={3} sx={{ borderRadius: "10px" }}>
          {todos ? (
            <>
              <div style={{ display: "flex" }}>
                <h1 style={{ padding: "10px", width: "390px" }}>Todos</h1>
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
                    Create Todos
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
                          Status
                        </InputLabel>
                        <StyledTextarea
                          disabled={disabled}
                          type="text"
                          name="completed"
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
                          >
                            Create
                          </Button>
                        </div>
                      </DialogActions>
                    </form>
                  </DialogContent>
                </Dialog>
              </div>

              <Grid container columnSpacing={{ sm: 1 }}>
                {todos.map((data1) => (
                  <>
                    <Grid item>
                      <Item
                        sx={{
                          boxShadow: "none",
                          "text-align": "start",
                          width: "250px",
                          padding: "10px 0px 0px 20px",
                        }}
                      >
                        {data1.title}
                      </Item>
                    </Grid>
                    <Grid item>
                      <item>
                        <Checkbox
                          disableTouchRipple
                          Default
                          Read-Only
                          sx={{ "&:hover": { backgroundColor: "transparent" } }}
                          checked={
                            IsParsable(data1.completed)
                              ? JSON.parse(data1.completed)
                              : ""
                          }
                          onChange={handleChange}
                        />
                      </item>
                    </Grid>
                    <Grid item>
                      <item>
                      
                        <EditTodos data={data1}></EditTodos>
                      </item>
                    </Grid>
                  </>
                ))}
              </Grid>
            </>
          ) : (
            ""
          )}
        </Paper>
      </Box>
    </div>
  );
}

export default UserTodos;
