import React, { useEffect, useState } from "react";

import axios from 'axios';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Divider, InputLabel, LinearProgress, Menu, MenuItem, TextField, TextareaAutosize, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import styled from "@emotion/styled";

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
export default function EditPost({edit,postId}) {
  const { userId } = useParams();
    const [open, setOpen] = React.useState(false);
    const [openBox, setOpenBox] = React.useState(false);
    const [scroll, setScroll] = React.useState("paper");
    const [progress, setProgress] = useState(0);
    const [buffer, setBuffer] = useState(10);
    const [loading, setLoading] = useState(false);
    const [loading1, setLoading1] = useState(true);
    const [error, setError] = useState("");
    const [values, setValue] = useState(postId);
    const [disabled, setDisabled] = useState(false);
    //   {
    //   title: "", // required
    //   body: "", // required
    // }
    // );
    
    const [anchorEl, setAnchorEl] = React.useState(null);
    const menuOpen = Boolean(anchorEl);
    const handleClickMenu = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleCloseMenu = () => {
      setAnchorEl(null);
    };
  

  // const handleChange = (event) => {
  //   setAge(Number(event.target.value) || '');
  // };

  const handleClickOpen1 = () => {
    setOpenBox(true);
  };

  const handleClose1 = (event, reason) => {
    if (reason !== 'backdropClick') {
      setOpenBox(false);
    }
  };

   const handleClose = () => {
    setOpen(false);
  };
  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
  };
  // useEffect(()=>{
  //   axios.get(`http://localhost:3500/posts/${edit}`)
  //   .then(response =>{setValue(response.data)})
  //   //.then((result) => setValue(result))
  //   .catch((error) => console.log("error", error));
  // },[])

  const handleSubmit = (e,userId) => {
    e.preventDefault();
    console.log("postId", userId);
    let payload = {};
    payload["userId"] = userId;
    payload["title"] = values.title;
    payload["body"] = values.body;
    payload["title"] = values.title;
    if(values.title && values.body){
      // setTimeout(() => {
      //   setLoading1(false);
      // }, 5000);
      setLoading(true);
    axios.put(`http://localhost:3500/posts/${edit}`, payload).
    then(res => {console.log("successfully")})
    setDisabled(true);
    // setTimeout(() => {
    //   setLoading(true);

     
    // }, 10000);
    setTimeout(() => {
      setLoading(false);
      setError("Successfully update");

      window.location.reload();
    }, 2000);
}
else{
  setError("Todo is not Submitted")
}
    }
  
      // headers: { "Content-Type": "application/json" },
      // body: 
    
    
    // if(postData){
    //   console.log("post",postData)
    // }
  const handleDelete=(id)=>{
      // const confirm = window.confirm("would you like to delete?");
      if (id) {
        // setTimeout(() => {
        //   setLoading1(false);
        // }, 5000);
        // setTimeout(() => {
        //   setLoading(true);
  
         
        // }, 500);
        setLoading(true);
        axios.delete(`http://localhost:3500/posts/${id}`).then((res) => {
          // window.location.reload();
        });
        
        setTimeout(() => {
          setLoading(false);
          setError("Succesfully Deleted");
  
          window.location.reload();
        }, 2000);
    }
    else{
      setError("Post is not deleted")
    }
  }
 
  function handleChange(e) {
    setValue({ ...values, [e.target.name]: e.target.value });
  }
  return (
   <>
    

    <div>
    <div style={{float:"right"}}>
      <Button
        id="basic-button"
        aria-controls={menuOpen ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={menuOpen ? 'true' : undefined}
        onClick={handleClickMenu}
      >
       <MoreVertIcon/>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={menuOpen}
        onClose={handleCloseMenu}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem ><Button onClick={handleClickOpen('paper')} sx={{float:"right"}}>Edit</Button> </MenuItem>
        <MenuItem > <Button onClick={handleClickOpen1} sx={{float:"right"}}>delete</Button></MenuItem>
        
      </Menu>
    </div>
    
    {/* <Button onClick={e=>handleDelete(edit)} sx={{float:"right"}}>delete</Button>  */}
    {/* delet api
     */}

     <div>
     
      <Dialog disableEscapeKeyDown open={openBox} onClose={handleClose1}>
        <DialogTitle>Delete Post</DialogTitle>
        <Divider />
        <DialogContent>
        <Box component="form" sx={{ display: "flex", flexWrap: "wrap" }}>
                <Typography> would you like to delete this post ? </Typography>
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
                onClick={(e) => handleDelete(edit)}
                color="success"
              >
                Delete
              </Button>
              </Typography>   
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
          maxHeight: 500,
        },
      }}
    >
      <DialogTitle
        id="scroll-dialog-title"
        sx={{ color: "black" }}
      >
        Update Post
      </DialogTitle>
      <DialogContent dividers={scroll === "paper"}>
        <form
          className="login-form"
           onSubmit={(e) => handleSubmit(e,userId)}
        >
          <div style={{ display: "flex" }}>
                            <InputLabel
                              sx={{
                                padding: "8px",
                                margin: "5px",
                              }}
                            >
                              Title
                            </InputLabel>
                            {/* <TextField
                              sx={{
                                paddingTop: "10px",
                                marginLeft: "5px",
                              }}
                              InputProps={{ sx: { height: 25, width:330, border:"1px solid black" } }}
                              type="text"
                              name="title"
                              onChange={(e) => handleTodosChange(e)}
                            />{" "} */}
                            <StyledTextarea
                              // InputProps={{ sx: { height: 25, width:330, border:"1px solid black" } }}
                              disabled={disabled}
                              type="text"
                              name="title"
                              value={values.title}
                             onChange={e => handleChange(e)}
                            />
                          </div>

                          <div style={{ display: "flex" }}>
                            <InputLabel
                              sx={{
                                padding: "8px",
                                margin: "5px 0px 0px 1px",
                              }}
                            >
                              Desc
                            </InputLabel>
                            <StyledTextarea
                             disabled={disabled}
                              minRows={3}
                              type="text"
                              name="body"
                              value={values.body}
              onChange={e => handleChange(e)}
                            />
                          </div>

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
              Desc
            </InputLabel>
            {/* <input type="text" name="body"
              value={values.body}
              onChange={e => setValue(e.target.value)}/> 
            <TextField
              sx={{
                paddingTop: "10px",
              }}
              InputProps={{ sx: { height: 25 } }}
              type="text"
              name="body"
              value={values.body}
              onChange={e => handleChange(e)}
            />
          </div> */}
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
                              {error==="Successfully update" ? <p style={{color:"green"}}>{error}</p> : <p style={{color:"red"}}>{error}</p>}
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
    </Dialog>
  </div>
  </>
  );
}
