import React from "react";
import { Box, Container } from "@mui/system";
import { Avatar } from "@mui/material";
import UserName from "./UserName";

function Profile({user}) {
// let name= user.name
let initialName = UserName(user.name)
  // if(user.name){
  // // const x = user.name;
  //   var nameparts = [];
  //   nameparts = x.split(" ");
  //   var initials =
  //     nameparts[0].charAt(0).toUpperCase() +
  //     nameparts[1].charAt(0).toUpperCase();
  // }
  //     const current = new Date();
  // var data = AlbumsData();
  // useEffect(()=>{
   
  // },[])
  
  return (
    <>
      <Container>
        <Box
          sx={{
            marginLeft:"50px"
          }}
        >
          <img
            src="/image/cover.png"
            alt="cover"
            style={{ height: "350px", width: "1050px",borderRadius:"10px" }}
          />
        </Box>

        <Box sx={{margin: "-35px 100px", display:"flex"}}>
          <Avatar
            alt="Remy Sharp"
            
            sx={{ width: 180, height: 180,border:5,borderColor:"white" ,bgcolor: "red",fontSize:"60px" }}
          >{initialName}</Avatar>
           <Box sx={{width: "300px", marginLeft:"15px", marginTop: "40px"}}><div><div><span><h1>{user.name}</h1></span></div></div></Box>
        </Box>
       
        {/* <div>
      <Box sx={{width: 180, marginLeft:45, marginTop: -12, marginBottom:12}}>
    <Typography
    >{user.name}</Typography>
    </Box>
    </div> */}
      </Container>
      <div style={{borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
marginTop: "60px"}}></div>
    </>
  );
}

export default Profile;
