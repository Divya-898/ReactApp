import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  InputLabel,
  LinearProgress,
  Menu,
  MenuItem,
  TextareaAutosize,
  Typography,
} from "@mui/material";
import { Link, Outlet, useNavigate, useParams } from "react-router-dom";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { styled } from "@mui/material/styles";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo,updateTodo, } from "../mainRedux/features/TodoSlice";
import { useForm } from "react-hook-form";
import DialogModal from "./DialogModal";
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

export default function EditTodos({ data }) {
  const navigate = useNavigate();
  const { loading } = useSelector((state) => state.app);
  const { register, reset } = useForm();
  const { userId } = useParams();
  const [open, setOpen] = React.useState(false);
  const [openBox, setOpenBox] = React.useState(false);
  const [scroll, setScroll] = React.useState("paper");
  const [todos, setTodos] = useState(data);
  const [progress, setProgress] = useState(0);
  const [buffer, setBuffer] = useState(10);
  const [disabled, setDisabled] = useState(false);
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const menuOpen = Boolean(anchorEl);
  const handleClickMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleOpenDelete = () => {
    setOpenBox(true);
  };

  const handleCloseDelete = (event, reason) => {
    if (reason !== "backdropClick") {
      setOpenBox(false);
      navigate(-1);
    }
  };

  const handleClose = () => {
    setOpen(false);
    navigate(-1);
  };
  const handleClickOpen = () => () => {
    setOpen(true);
  };
 
  const handleSubmit = (e, id) => {
    e.preventDefault();
    let payload = {};
    payload["userId"] = userId;
    payload["title"] = todos.title;
    payload["completed"] = (todos.completed)
    payload["id"] = id;
    console.log(payload)
    if (todos.title && todos.completed) {
      setTimeout(() => {
        dispatch(updateTodo(payload));
      }, 500);
      setTimeout(() => {
        setDisabled(true);
        setTodos({title:"",completed:""})
        setError("Succesfully updated");
      }, 1000);
      setTimeout(()=>{
        // window.location.reload();
      },3000)
    } else {
      setError("Todo is not updated");
    }
  };
  // if(data){
  //   console.log(todos)
  // }
  const handleDelete = (id) => {
    if (id) {
      setTimeout(()=>{
        dispatch(deleteTodo(id));
      },2000)
     
      setTimeout(()=>{
        setError("Succesfully Deleted")
      },2000)
      } 
     else {
      setError("Todos is not deleted");
    }
  };

  function handleChange(e) {
    setTodos({ ...todos, [e.target.name]: e.target.value });
  }
  return (
    <>
      <div>
        
        <div>

          <Dialog
            disableEscapeKeyDown
            open={openBox}
            onClose={handleCloseDelete}
            PaperProps={{
              sx: {
                width: "30%",
                maxHeight: 300,
              },
            }}
          >
            <DialogTitle>Delete Todos</DialogTitle>
            <Divider />
            <DialogContent>
              <Box component="form" sx={{ display: "flex", flexWrap: "wrap" }}>
                <Typography> would you like to delete this todo ? </Typography>
              </Box>
            </DialogContent>
            <Typography>
              <Divider />
            </Typography>
            <DialogActions>
              <Box sx={{ width: "80%", margin: "-30px 0px 0px 70px" }}>
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
                  style={{ position: "relative", width: "100px" }}
                >
                  {error === "Succesfully Deleted" ? (
                    <p style={{ color: "green", width: "150px" }}>{error}</p>
                  ) : (
                    <p style={{ color: "red" }}>{error}</p>
                  )}
                </div>
              </Box>

              <Typography sx={{ display: "flex", marginTop: "30px" }}>
                <Button
                  onClick={handleCloseDelete}
                  variant="contained"
                  color="error"
                  sx={{ marginRight: "10px" }}
                >
                  Cancel
                </Button>
                <Button
                  variant="contained"
                  onClick={(e) => handleDelete(data.id)}
                  color="success"
                >
                  Delete
                </Button>
              </Typography>
            </DialogActions>
          </Dialog>
        </div>
      {/* <DialogTitle></DialogTitle> */}
      {data.title && data.completed ? <DialogModal open={open} handleClose={handleClose} scroll={scroll} data={data} error={error} 
      handleSubmit={handleSubmit} handleChange={handleChange} 
      loading={loading} buffer={buffer} progress={progress} 
      todos={todos}></DialogModal>:""}
              {/*  */}
        {/* {data ? (
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
            <DialogTitle id="scroll-dialog-title" sx={{ color: "black" }}>
              Update Todos
            </DialogTitle>
            <DialogContent dividers={scroll === "paper"}>
              <form
                className="login-form"
                onSubmit={(e) => handleSubmit(e, data.id)}
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
                    minRows={3}
                    type="checkbox"
                    disabled={disabled}
                    name="title"
                    value={todos.title}
                    {...register("title")}
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
                    value={todos.completed}
                    {...register("completed")}
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
                      style={{ position: "relative", left: "80px" }}
                    >
                      {error === "Succesfully updated" ? (
                        <p style={{ color: "green" }}>{error}</p>
                      ) : (
                        <p style={{ color: "red" }}>{error}</p>
                      )}
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
                    <Button type="submit" color="success" variant="contained"
                    onClick={() =>
                              reset({
                                title: "",
                                completed: "",
                              })
                            }
                    >
                      Update
                    </Button>
                  </div>
                </DialogActions>
              </form>
            </DialogContent>
          </Dialog>
        ) : (
          ""
        )} */}
       
      </div>
      <Outlet></Outlet>
    </>
  );
}
//edit api
// setTimeout(() => {
//   setLoading(true);
// }, 5000);
//     setLoading(true)
//   axios
//     .put(`http://localhost:3500/todos/${todos.id}`, payload)
//     .then((res) => {
//       console.log("hello");
//     });
//     // setTimeout(() => {
//     //   setLoading(true);

//     // }, 10000);
//     setDisabled(true);
//     setTimeout(() => {
//       setLoading(false);
//       setError("Succesfully updated");

//       window.location.reload();
//     }, 2000);
// }
// else{
//   setError("Todo is not Submitted")
// }
// setTimeout(()=>{
//     window.location.reload();
// }, 1000)
//delete api
// setTimeout(() => {
//   setLoading1(false);
// }, 5000);
// setLoading(true);
// axios.delete(`http://localhost:3500/todos/${data.id}`).then((res) => {
//   // window.location.reload();
// });
// // setTimeout(() => {
// //   setLoading(true);

// // }, 10000);
// setTimeout(() => {
//   setLoading(false);
//   setError("Succesfully Deleted");

//   window.location.reload();
// }, 1000);
