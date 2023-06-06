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
import { Link, Outlet, useParams } from "react-router-dom";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { styled } from "@mui/material/styles";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, updateUser } from "../mainRedux/features/TodoSlice";
import Edit from "./Edit";
import EditInfo from "./EditInfo";
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
  const { todos, loading } = useSelector((state) => state.app);
  const{id} = useParams();
  console.log(id)
  const temp=todos.find((ele)=>
                (ele.id === id ? id : ele)
               
                )
                console.log(temp.id)

  const { userId } = useParams();
  const [open, setOpen] = React.useState(false);
  const [openBox, setOpenBox] = React.useState(false);
  const [scroll, setScroll] = React.useState("paper");
  const [values, setValue] = useState(data);
  const [progress, setProgress] = useState(0);
  const [buffer, setBuffer] = useState(10);
  // const [loading, setLoading] = useState(false);
  const [loading1, setLoading1] = useState(true);
  const [disabled, setDisabled] = useState(false);
  const [error, setError] = useState("");
  const dispatch = useDispatch();
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
    console.log("value",values.title)
    let payload = {};
    payload["userId"] = userId;
    payload["title"] = values.title;
    payload["completed"] = values.completed;
      payload["id"]=id;
    console.log(payload)
      dispatch(updateUser(payload))
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
    
  };
  const handleDelete = (id) => {
    if (id) {
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
      dispatch(deleteUser(id))
  }
  else{
    setError("Todos is not deleted")
  }
    
  };
  const[click, setClick] = useState(false)
  const handleClickMenu2 =(id)=>{
     setClick(true)
  }
  // useEffect(() => {
  //   // getData();
  //  handleDelete();
  // }, [data]);
  function handleChange(e) {
    setValue({ ...values, [e.target.name]: e.target.value });
  }
  return (
    <>
      <div>
        <div>
        
          <Button
            // sx={{ position: "relative", left: "310px" }}
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
            sx={{width:"120px", height:"40"}}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem>
           
         {/* <Button onClick={()=> handleClickMenu2(data.id)}> edit3</Button> */}
             {/* <Link to={`/edit/${data.id}`} onClick={handleClickOpen("paper")}
             

             >button</Link> */}
             <Link to={`/edit/${data.id}`} className="card-link"  onClick={handleClickOpen("paper")}>
                    Edit
                  </Link>
              <Button variant="contained" color="success"
                onClick={handleClickOpen("paper")}
                sx={{ float: "right",padding:"0" }}
              >
              {/* <Link
  to={`edit/${data.id}`}>
  onClick={handleClickOpen("paper")}

  Edit
</Link> */}
                Edit
              </Button>{" "}
            </MenuItem>
            <MenuItem>
              {" "}
              <Button variant="contained" color="error" onClick={handleClickOpen1} sx={{ float: "right",padding:"0" }}>
                delete
              </Button>
            </MenuItem>
          </Menu>
        </div>

        <div>
          <Dialog disableEscapeKeyDown open={openBox} onClose={handleClose1}
          PaperProps={{
            sx: {
              width:"30%",
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
              <Divider/>
            </Typography>
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
                              <div className="message" style={{position:"relative",width:"100px"}}>
                              {error==="Succesfully Deleted" ? <p style={{color:"green",width:"150px"}}>{error}</p> : <p style={{color:"red"}}>{error}</p>}
                            </div>
                            </Box>
                              
               <Typography sx={{display:"flex", marginTop:"30px"}}>         
              <Button onClick={handleClose1} variant="contained" color="error" sx={{marginRight:"10px"}}>
                Cancel
              </Button>
              <Button
                //onClick={e=>handleDelete(commentId)}
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
       
       {data ? 
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
                //  disabled={disabled}
                  minRows={3}
                  type="text"
                  disabled={disabled}
                  name="title"
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
                              {error==="Succesfully updated" ? <p style={{color:"green"}}>{error}</p> : <p style={{color:"red"}}>{error}</p>}
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
                    Update
                  </Button>
                </div>
              </DialogActions>
            </form>
          </DialogContent>
        </Dialog>:""}
      </div>
      <Outlet></Outlet>
    </>
  );
}
