import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Link, useNavigate, useParams } from "react-router-dom";
import Checkbox from "@mui/material/Checkbox";
import { useForm } from "react-hook-form";
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
  Menu,
  MenuItem,
  TextareaAutosize,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import React, { useEffect, useRef, useState } from "react";

import EditTodos from "./EditTodos";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { useDispatch, useSelector } from "react-redux";
import { createTodo, showTodo, updateTodo } from "../mainRedux/features/TodoSlice";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import DialogModal from "./SucDialog";
import { compose } from "redux";
import Form from "./EditFormTodos";
import EditFormTodos from "./EditFormTodos";
import CreateFormTodos from "./CreateFormTodos";
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
  const navigate = useNavigate();
  const { userId } = useParams();
  const { todos, loading } = useSelector((state) => state.app);
  const dispatch = useDispatch();
  const { register, reset } = useForm();
  const [checked, setChecked] = React.useState(false);
  const [progress, setProgress] = useState(0);
  const [buffer, setBuffer] = useState(10);
  const [disabled, setDisabled] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [openBox, setOpenBox] = React.useState(false);
  const [editTodo, setEditTodo] = useState();
  const [open, setOpen] = React.useState(false);
  const menuOpen = Boolean(anchorEl);
  const handleClickMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleClickOpen = (data) => {
    setOpen(true);
    setEditTodo(data)
  };
 
  const handleOpenDelete = () => {
    setOpenBox(true);
  };
  const [formData, setformData] = useState({
    title: "", // required
    completed: "", // required
  });
  
  const handleOpen = () => setOpenBox(true);
  const handleClose = () => {
    setOpen(false);
    window.location.reload();
  };
  
  const [scroll, setScroll] = React.useState("paper");
  const [error, setError] = useState("");
  const handleChange = (event, data) => {
    if(data)
    {
      setChecked(event.target.checked);
    }
  };
  const IsParsable = (data) => {
    try {
      JSON.parse(data);
    } catch (e) {
      return false;
    }
    return true;
  };

  // useEffect(() => {
  //   reset(formData);
  // }, [formData]);

  const handleSubmit1 = (e, userId) => {
    e.preventDefault();
    let payload = {};
    payload["userId"] = userId;
    payload["title"] = formData.title;
    payload["completed"] = formData.completed;
    if (formData.title && formData.completed) {
      setTimeout(() => {
        dispatch(createTodo(payload));
      }, 500);
      setTimeout(() => {
        setDisabled(true);
        setError("Succesfully created");
      }, 1000);
    }
  };

  const handleSubmit = (e, id) => {
    e.preventDefault();
    let payload = {};
    payload["userId"] = userId;
    payload["title"] = editTodo.title;
    payload["completed"] = (editTodo.completed)
    payload["id"] = id;
    console.log(payload)
    if (editTodo.title && editTodo.completed) {
      setTimeout(() => {
        dispatch(updateTodo(payload));
      }, 500);
      setTimeout(() => {
        setDisabled(true);
        // setTodos({title:"",completed:""})
        setError("Succesfully updated");
      }, 1000);
      setTimeout(()=>{
        window.location.reload();
      },3000)
    } else {
      setError("Todo is not updated");
    }
  };
  function handleChange2(e) {
    setEditTodo({ ...editTodo, [e.target.name]: e.target.value });
  }
  function handleTodosChange(e) {
    setformData({ ...formData, [e.target.name]: e.target.value });
  }

  const temp = (<EditFormTodos loading={loading} buffer={buffer} progress={progress}
    editTodo={editTodo} handleSubmit={handleSubmit} error={error} scroll={scroll} handleChange={handleChange2}></EditFormTodos>)

  const create = (<CreateFormTodos loading={loading} buffer={buffer} progress={progress}
    handleSubmit={handleSubmit1} error={error} scroll={scroll} handleChange={handleTodosChange}></CreateFormTodos>)
  useEffect(() => {
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
            maxHeight: 420,
            overflow: "auto",
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
                {/* <Dialog
                  open={open}
                  scroll={scroll}
                  aria-describedby="scroll-dialog-description"
                  PaperProps={{
                    sx: {
                      width: "50%",
                      maxHeight: 400,
                    },
                  }}
                  onClose={handleClose}
                >
                  <div
                    className="fixed inset-0 bg-black/30"
                    aria-hidden="true"
                  />
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
                          Status
                        </InputLabel>
                        <StyledTextarea
                          disabled={disabled}
                          type="text"
                          name="completed"
                          {...register("completed")}
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
                      <DialogActions dividers={true ? 1 : undefined}>
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
                                completed: "",
                              })
                            }
                          >
                            Create
                          </Button>
                        </div>
                      </DialogActions>
                    </form>
                  </DialogContent>
                </Dialog> */}
              </div>

              {todos.map((data1) => (
                <> 
                <Grid container columnSpacing={{ sm: 1 }} key={data1.id}>
                  <Grid>
                    <Item
                      sx={{
                        boxShadow: "none",
                        textAlign: "start",
                        width: "250px",
                        padding: "10px 0px 0px 20px",
                      }}
                    >
                      {data1.title}
                    </Item>
                  </Grid>
                  <Grid>
                    <Item
                      sx={{
                        boxShadow: "none",
                      }}
                    >
                      <Checkbox
                        disableTouchRipple
                        sx={{ "&:hover": { backgroundColor: "transparent" } }}
                        checked={ IsParsable(data1.completed)
                            ? (JSON.parse(data1.completed))
                            : ""}
                        onChange={(e) => handleChange(e, data1.completed)}
                      />
                    </Item>
                  </Grid>
                  <Grid>
                    <Item
                      sx={{
                        boxShadow: "none",
                      }}
                    >
                    <div>
          <Button
            // id="basic-button"
            // aria-controls={menuOpen ? "basic-menu" : undefined}
            // aria-haspopup="true"
            aria-expanded={menuOpen ? "true" : undefined}
            id="basic-menu"
            anchorEl={anchorEl}
            open={menuOpen}
            onClose={handleCloseMenu}
            sx={{ width: "120px", height: "40" }}
            // onClick={handleClickMenu}
          >
            <div>
              <MoreVertIcon sx={{ float: "right" }} />
            </div>
          </Button> 

          <Menu
          //  aria-expanded={menuOpen ? "true" : undefined}
          //   id="basic-menu"
          //   anchorEl={anchorEl}
          //   open={menuOpen}
          //   onClose={handleCloseMenu}
            sx={{ width: "120px", height: "40" }}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
           {/* <div>
              <MoreVertIcon sx={{ float: "right" }} />
            </div> */}
            <MenuItem>
            <Link to={`todos/${data1.id}`}>
              <Button
                variant="contained"
                color="success"
                onClick={() => handleClickOpen(data1)}
                sx={{ float: "right", padding: "0" }}
              >
                Edit
              </Button>{" "} </Link>
            </MenuItem>
             <MenuItem>     
            <Link to={`delete/${data1.id}`}> 
              <Button
                variant="contained"
                color="error"
                onClick={handleOpenDelete}
                sx={{ float: "right", padding: "0" }}
              >
                delete
              </Button></Link>
            </MenuItem>
          </Menu>
        </div>

                      {/* <EditTodos data={data1}></EditTodos> */}
                    </Item>
                  </Grid>
                </Grid>
                </>
              ))}
              {/* </Grid> */}
            </>
          ) : (
            ""
          )}
        </Paper>
        {editTodo ? <DialogModal open={true} handleClose={handleClose} scroll={scroll} 
      temp={temp} name="Update Todos"></DialogModal>:<DialogModal open={openBox} handleClose={handleClose} scroll={scroll} temp={create} name="Create Todos"></DialogModal>}
      {/* <DialogModal open={handleOpen} handleClose={handleClose} scroll={scroll} 
      temp={create}></DialogModal>} */}
      </Box>
    </div>
  );
}

export default UserTodos;
//get api for the post
// const getData = useCallback(() => {
//   fetch(`http://localhost:3500/todos?userId=${userId}`)
//     .then((response) => response.json())
//     .then((result) => setTodos(result))
//     .catch((error) => console.log("error", error));
//   //console.log(match)
// });

//post api for post request
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
// .then((data) => setFormData(data));
