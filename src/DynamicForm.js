import { Box, Container, Paper, Grid, TextField, IconButton, Button } from '@mui/material'
import React, { useState } from 'react'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
function DynamicForm() {
    const userTemplates = {name:"", email:"", phone:"", address:""};
    const [user, setUser] = useState([userTemplates]);
    const addUser = ()=>{
      setUser([...user, userTemplates])
    }
    const onchange = (e, index)=>{
      const updatedUsers = user.map((users, i)=> index === i ? Object.assign(users,{[e.target.name]:e.target.value}):users)
     setUser(updatedUsers) 
   }
   const removeUser = (index)=>{
        const filterUsers = [...user];
        filterUsers.splice(index, 1);
        setUser(filterUsers)
   }
  return (
    <Container>
    <Paper component={Box} p={4} mx="auto">
    {user.map((user, index)=>(
    
        <Grid container  spacing={3} key={index}>
        <Grid item md={3} sx={{marginBottom:"10px"}}>
           <TextField  
            label="Name"
            placeholder="Enter your full name"
            variant='outlined'
            name="name"
            onChange={e => onchange(e,index)}
            value={user.name}
            fullWidth
           />
        </Grid>
        <Grid item md={3} sx={{marginBottom:"10px"}}>
           <TextField  
            label="Email"
            placeholder="Enter your Email address"
            name="email"
            onChange={e => onchange(e,index)}
            variant='outlined'
             value={user.email}
            fullWidth
           />
        </Grid>
        <Grid item md={2} sx={{marginBottom:"10px"}}>
           <TextField  
            label="Phone"
            placeholder="Enter your phone number"
            variant='outlined'
            name="phone"
            onChange={e => onchange(e,index)}
            value={user.phone}
            fullWidth
           />
        </Grid>
        <Grid item md={3} sx={{marginBottom:"10px"}}>
           <TextField  
            label="Address"
            placeholder="Enter your full address"
            variant='outlined'
            name="address"
            onChange={e => onchange(e,index)}
            value={user.address}
            fullWidth
           />
        </Grid>
        <Grid item md={1}sx={{marginBottom:"10px"}}>
        <IconButton color="secondary" onClick={()=>removeUser(index)}>
            <DeleteOutlineIcon/>
        </IconButton>
          
        </Grid>
    </Grid>
    ))}
   <Button variant='contained' color="primary" onClick={addUser}>Add More</Button>
    </Paper>
       </Container>

  )
}

export default DynamicForm
