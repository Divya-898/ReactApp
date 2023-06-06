
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import BadgeIcon from '@mui/icons-material/Badge';
import { Divider, Icon, IconButton, LinearProgress, ListItem, ListItemText, Typography } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import DraftsIcon from '@mui/icons-material/Drafts';
import CloudSyncIcon from '@mui/icons-material/CloudSync';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import FactoryIcon from '@mui/icons-material/Factory';
import React, { useEffect, useRef, useState } from "react";
import ModeEditIcon from '@mui/icons-material/ModeEdit';

import axios from 'axios';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, InputLabel, TextField } from "@mui/material";
import { useParams } from "react-router-dom";
function UserIntro({user}) {
  console.log(user.id)
  let u =[];
    const cityref= useRef("");
     const streetref=useRef("");
    const emailref=useRef("");
    const nameref=useRef("");
    const phoneref=useRef("");
    const websiteref=useRef("");
   const comNameref= useRef("");
    const zipcoderef=useRef("");
    const suiteref=useRef("");
    const catchPhraseref=useRef("");
    const bsref=useRef("");
    // const name=useRef("");
    // const name=useRef("");

  const { userId } = useParams();
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState("paper");
  const [values, setValue] = useState(user);
  const [loading, setLoading] = useState(false);
  const [loading1, setLoading1] = useState(true);
  const [progress, setProgress] = useState(0);
  const [buffer, setBuffer] = useState(10);
  const [error, setError] = useState("");
  const [disabled, setDisabled] = useState(false);
  // ({
  //   name: "", // required
  //   email: "",
  //   phone:"",
  //   website:"",
  //   address:{street:"",
  //   city:"",
  //   zipcode:"",
  //   suite: "",
  // },
    // company: {
    //   name: "",
      
    // }
    // required
  // });
  // let tempData=[]
  // let te=["address"]
  // tempData.push(te)
  console.log(values)
 const handleClose = () => {
  setOpen(false);
};
const handleClickOpen = (scrollType) => () => {
  setOpen(true);
};
// useEffect(()=>{
//   axios.get(`http://localhost:3500/users/${user.id}`)
//   .then(response =>{setValue(response.data)})
//   //.then((result) => setValue(result))
//   .catch((error) => console.log("error", error));
// },[])

const handleSubmit = (e) => {
  e.preventDefault();
  console.log("postId", userId);
  let payload = {};
  payload["name"] =nameref.current.value
  payload["email"] = emailref.current.value
  payload["phone"] =phoneref.current.value;
  payload["website"]=websiteref.current.value;
  payload["address"] ={
          "street":streetref.current.value,
          "city":cityref.current.value,
          "suite":suiteref.current.value,
          "zipcode":zipcoderef.current.value
        }
        payload["company"]={
          "catchPhrase":catchPhraseref.current.value,
          "bs":bsref.current.value,
          "name":comNameref.current.value
        }
//   payload["name"] = name.current.value;
//   payload["email"] = email.current.value;
//   payload["phone"] =phone.current.value;
//   payload["address"] ={
//     "city":cityref.current.value
//     payload["address"] ={
//       "stree":cityref.current.value
//     // // "street":values.address.street,
//     // // "suite":values.address.suite,
//     // "zipcode":values.address.zipcode
// };
//   console.log(cityref.current.value)
//    payload["website"]=values.website
  // payload["street"] =values.address.street;
  // payload["suite"] =values.address.suite;
  // payload["zipcode"] =values.address.zipcode;
  // payload["company"] =values.company.name;
  // payload["title"] = values.title;
  if(values){
    setLoading(true)
  axios.put(`http://localhost:3500/users/${user.id}`, payload).
  then(res =>{})
  setDisabled(true)
    setTimeout(() => {
      setLoading(false);
      setError("Succesfully updated");

      window.location.reload();
    }, 2000);
}
else{
  setError("Todo is not Submitted")
}
}
function handleChange(e) {
  setValue({ ...values, [e.target.name]: e.target.value });
}

  return (
    <div>
    
      <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: "422px",
          height: "490px",
          backgroundColor:"#ffffff",
          borderRadius:"10px"
        },
      }}
    >
      <Paper elevation={3} > 
      <div style={{display:"flex"}}>
          <h1 style={{ padding: "20px",width:"390px" }} className='profileName'>Intro</h1>
          <Button onClick={handleClickOpen('paper')}  sx={{ "&:hover": {
        backgroundColor: "#FFF"
    }}}><ModeEditIcon/></Button>
          </div>
      <div>
    {/* <Button onClick={handleClickOpen('paper')} sx={{float:"right"}}>Edit</Button>  */}
   
    <Dialog
      open={open}
      onClose={handleClose}
      scroll={scroll}
      aria-labelledby="scroll-dialog-title"
      aria-describedby="scroll-dialog-description"
      PaperProps={{
        sx: {
          width: "50%",
          // height:"500px",
          maxHeight: 640,
        },
      }}
    >
      <DialogTitle
        id="scroll-dialog-title"
        sx={{ color: "black" }}
      >
        Update User
      </DialogTitle>
      <DialogContent dividers={scroll === "paper"}>
        <form
          className="login-form"
           onSubmit={(e) => handleSubmit(e)}
        >
          <div style={{ display: "flex" }}>
            <InputLabel
              sx={{
                padding: "10px",
              }}
            >
              Title
            </InputLabel>
            <div style={{marginLeft:"64px"}}>
            <TextField
             disabled={disabled}
              sx={{
                paddingTop: "10px",
                marginLeft: "5px",
              }}
              InputProps={{ sx: { height: 25 } }}
              type="text"
              // name="name"
              inputProps={{readOnly:false}}
              inputRef={nameref}
               defaultValue={values.name}
              // onChange={e => handleChange(e)}
            />
            </div>
          </div>

          <div style={{ display: "flex" }}>
            <InputLabel
              sx={{
                padding: "10px",
              }}
            >
              Email
            </InputLabel>
            {/* <input type="text" name="body"
              value={values.body}
              onChange={e => setValue(e.target.value)}/> */}
              <div style={{marginLeft:"58px"}}>
            <TextField
             disabled={disabled}
              sx={{
                paddingTop: "10px",
              }}
              InputProps={{ sx: { height: 25 } }}
              type="text"
              inputProps={{readOnly:false}}
              inputRef={emailref}
               defaultValue={values.email}
              onChange={e => handleChange(e)}
            />
            </div>
          </div>
          <div style={{ display: "flex" }}>
            <InputLabel
              sx={{
                padding: "10px",
              }}
            >
              Street
            </InputLabel>
            {/* <input type="text" name="body"
              value={values.body}
              onChange={e => setValue(e.target.value)}/> */}
              <div style={{marginLeft:"55px"}}>
            <TextField
             disabled={disabled}
              sx={{
                paddingTop: "10px",
              }}
              InputProps={{ sx: { height: 25 } }}
              type="text"
              inputRef={streetref}
              defaultValue={values.address.street}
              // onChange={e => handleChange(e)}
            />
            </div>
          </div>
          <div style={{ display: "flex" }}>
            <InputLabel
              sx={{
                padding: "10px",
              }}
            >
              City
            </InputLabel>
            {/* <input type="text" name="body"
              value={values.body}
              onChange={e => setValue(e.target.value)}/> */}
              <div style={{marginLeft:"70px"}}>
            <TextField
             disabled={disabled}
              sx={{
                paddingTop: "10px",
              }}
              InputProps={{ sx: { height: 25 } }}
              type="text"
              // name="city"
              inputProps={{readOnly:false}}
              inputRef={cityref}
              defaultValue={values.address.city}
              // onChange={e => handleChange(e)}
            />
            </div>
          </div>
          <div style={{ display: "flex" }}>
            <InputLabel
              sx={{
                padding: "10px",
              }}
            >
              Suite
            </InputLabel>
            {/* <input type="text" name="body"
              value={values.body}
              onChange={e => setValue(e.target.value)}/> */}
              <div style={{marginLeft:"60px"}}>
            <TextField
             disabled={disabled}
              sx={{
                paddingTop: "10px",
              }}
              InputProps={{ sx: { height: 25 } }}
              type="text"
              inputProps={{readOnly:false}}
              inputRef={suiteref}
              defaultValue={values.address.suite}
            />
            </div>
          </div>
          <div style={{ display: "flex" }}>
            <InputLabel
              sx={{
                padding: "10px",
              }}
            >
              Zipcode
            </InputLabel>
            {/* <input type="text" name="body"
              value={values.body}
              onChange={e => setValue(e.target.value)}/> */}
              <div style={{marginLeft:"38px"}}>
            <TextField
             disabled={disabled}
              sx={{
                paddingTop: "10px",
              }}
              InputProps={{ sx: { height: 25 } }}
              type="text"
              inputProps={{readOnly:false}}
              inputRef={zipcoderef}
              defaultValue={values.address.zipcode}
              // onChange={e => handleChange(e)}
            />
            </div>
          </div>
          <div style={{ display: "flex" }}>
            <InputLabel
              sx={{
                padding: "10px",
              }}
            >
              Catch-Phrase
            </InputLabel>
            {/* <input type="text" name="body"
              value={values.body}
              onChange={e => setValue(e.target.value)}/> */}
              <div style={{marginLeft:"-3px"}}>
            <TextField
             disabled={disabled}
              sx={{
                paddingTop: "10px",
              }}
              InputProps={{ sx: { height: 25 } }}
              type="text"
              inputProps={{readOnly:false}}
              inputRef={catchPhraseref}
              defaultValue={values.company.catchPhrase}
              // onChange={e => handleChange(e)}
            />
            </div>
          </div>
          <div style={{ display: "flex" }}>
            <InputLabel
              sx={{
                padding: "10px",
              }}
            >
              Name
            </InputLabel>
            {/* <input type="text" name="body"
              value={values.body}
              onChange={e => setValue(e.target.value)}/> */}
              <div style={{marginLeft:"53px"}}>
            <TextField
             disabled={disabled}
              sx={{
                paddingTop: "10px",
              }}
              InputProps={{ sx: { height: 25 } }}
              type="text"
              inputProps={{readOnly:false}}
              inputRef={comNameref}
              defaultValue={values.company.name}
              // onChange={e => handleChange(e)}
            />
            </div>
          </div>
          <div style={{ display: "flex" }}>
            <InputLabel
              sx={{
                padding: "10px",
              }}
            >
              Services
            </InputLabel>
            <div style={{marginLeft:"33px"}}>
            <TextField
             disabled={disabled}
              sx={{
                paddingTop: "10px",
              }}
              InputProps={{ sx: { height: 25 } }}
              type="text"
              inputProps={{readOnly:false}}
              inputRef={bsref}
              defaultValue={values.company.bs}
              // onChange={e => handleChange(e)}
            />
            </div>
          </div>
          <div style={{ display: "flex" }}>
            <InputLabel
              sx={{
                padding: "10px",
              }}
            >
              Phone
            </InputLabel>
            <div style={{marginLeft:"50px"}}>
            <TextField
             disabled={disabled}
            sx={{
                paddingTop: "10px",
              }}
              InputProps={{ sx: { height: 25 } }}
              type="text"
              inputProps={{readOnly:false}}
              inputRef={phoneref}
               defaultValue={values.phone}
              onChange={e => handleChange(e)}
            />
            </div>
          </div>
          <div style={{ display: "flex" }}>
            <InputLabel
              sx={{
                padding: "10px",
              }}
            >
              Website
            </InputLabel>
            {/* <input type="text" name="body"
              value={values.body}
              onChange={e => setValue(e.target.value)}/> */}
              <div style={{marginLeft:"40px"}}>
            <TextField
             disabled={disabled}
              sx={{
                paddingTop: "10px",
              }}
              InputProps={{ sx: { height: 25 } }}
              type="text"
              inputProps={{readOnly:false}}
              inputRef={websiteref}
               defaultValue={values.website}
              onChange={e => handleChange(e)}
            />
            </div>
          </div>
          
          {/* <div style={{ display: "flex" }}>
            <InputLabel
              sx={{
                padding: "10px",
              }}
            >
              ComName
            </InputLabel>
            {/* <input type="text" name="body"
              value={values.body}
              onChange={e => setValue(e.target.value)}/> */}
            {/* <TextField
              sx={{
                paddingTop: "10px",
              }}
              InputProps={{ sx: { height: 25 } }}
              type="text"
              name="name"
              value={values.company.name}
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
          <Divider sx={{width:'610px',right:"30px",position:"relative",top:"10px"}}/>
         </div>
          <DialogActions dividers={scroll === "paper"}>
          <Box sx={{ width: "80%", margin:"-10px 0px 20px 70px" }}>
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
                            <Typography sx={{paddingTop:"10px", display:"flex", margin:"20px"}}>
                <Button onClick={handleClose}  color="error" sx={{marginRight:"10px"}}
                              variant="contained">Cancel</Button>
                <Button type="submit"  
                              color="success"
                              variant="contained">Update</Button>
                            </Typography>
          </DialogActions>
        </form>
      </DialogContent>
    </Dialog>
  </div>

      <Box sx={{paddingLeft:"10px", color:"rgb(5,5,5)",display: "block",
fontFamily: "system-ui, -apple-system,system-ui,SFNSText-Regular, sans-serif",
fontSize:"15px",
fontWeight: "400px",
height: "39.9688px"
}}>   

  { user ? 

     <div><IconButton sx={{"&:hover": {backgroundColor: "transparent"}}}><BadgeIcon></BadgeIcon><span style={{color:"rgb(5,5,5)",fontSize:"16px", padding:"10px 10px 5px"}}>{user.name}</span></IconButton>
       <br></br>
       <IconButton sx={{"&:hover": {backgroundColor: "transparent"}}}><EmailIcon></EmailIcon> <a href="mailto:name@email.com" style={{fontSize:"16px", padding:"10px 10px 5px"}}>{user.email}</a></IconButton>
       <br></br>
         <IconButton sx={{"&:hover": {backgroundColor: "transparent"}}}><AddLocationAltIcon></AddLocationAltIcon><span style={{color:"rgb(5,5,5)",fontSize:"16px", padding:"10px 6px 5px"}}>{user.address.street}, {user.address.suite}, {user.address.city},{user.address.zipcode}</span></IconButton>
       <br></br> 
       <IconButton sx={{"&:hover": {backgroundColor: "transparent"}}}><AddIcCallIcon/><span style={{color:"rgb(5,5,5)",fontSize:"16px", padding:"10px 10px 5px"}}>{user.phone}</span></IconButton>
       <br></br> 
       <IconButton sx={{"&:hover": {backgroundColor: "transparent"}}}><CloudSyncIcon/><span style={{color:"rgb(5,5,5)",fontSize:"16px", padding:"10px 10px 5px"}}>{user.website}</span></IconButton>
       <br></br>  
       <IconButton sx={{"&:hover": {backgroundColor: "transparent"}}}><FactoryIcon/><span style={{color:"rgb(5,5,5)",fontSize:"16px", padding:"10px 10px 5px"}}>{user.company.name}</span></IconButton>
       <br></br> 
       <IconButton sx={{"&:hover": {backgroundColor: "transparent"}}}><BadgeIcon></BadgeIcon><span style={{color:"rgb(5,5,5)",fontSize:"16px", padding:"10px 10px 5px"}}>{user.company.catchPhrase}</span></IconButton>
       <br></br> 
       <IconButton sx={{"&:hover": {backgroundColor: "transparent"}}}><AddBusinessIcon/><span style={{color:"rgb(5,5,5)",fontSize:"16px", padding:"10px 10px 5px"}}>{user.company.bs}</span></IconButton>
       <br></br>
       </div>:""}
  
      </Box>
      </Paper>
    </Box>
    </div>
  )
}

export default UserIntro
