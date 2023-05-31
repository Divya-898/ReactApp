import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { useParams } from 'react-router-dom';
import Checkbox from '@mui/material/Checkbox';
import {Button, Grid, TextField, Typography} from '@mui/material';
import { styled } from '@mui/material/styles';
import React, { useCallback, useEffect, useState } from 'react';
import Modal from '@mui/material/Modal';
import EditTodos from './EditTodos';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function Newtodos() {
    const [todos, setTodos] = useState();
  const [checked, setChecked] = React.useState(true);
//   const [formData, setformData] = useState({
//     title: '', // required
//     completed: '', // required
  
// })
    const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleChange = (event) => {
    setChecked(event.target.checked);
  }
  const {userId} = useParams();
  const getData = useCallback(() => {
    fetch(`http://localhost:3500/todos?userId=${userId}`)
      .then((response) => response.json())
      .then((result) => setTodos(result))
      .catch((error) => console.log("error", error));
    //console.log(match)
  });
  
useEffect(()=>{
    getData();
},[])

return (
  <div>
    <Box
    sx={{
      display: 'flex',
      flexWrap: 'wrap',
      '& > :not(style)': {
        m: 1,
        width: "422px",
        height: "1100px",
      },
    }}
  >
   <Paper elevation={3} sx={{borderRadius:"10px"}}> 
    {todos ? <> <h1 style={{padding:"10px"}}>Todos</h1>
    {/* <EditTodos commentId={post.id} postId={postId}></EditTodos> */}
    <Button onClick={handleOpen}>Open modal</Button>
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        
      </Box>
    </Modal>
  
  <Grid container rowSpacing={4} columnSpacing={{  sm: 1 }}>
     
     {todos && todos.map((data1) =>(
      <>
     
       <Grid item xs={10} sx={{ width:"150px"}}>
       <Item sx={{boxShadow:"none","text-align": "start",height:"10px",width:"380px" ,padding: "0px 0px 0px 20px"}}>{data1.title} 
         <Checkbox
    checked={data1.completed}
    onChange={handleChange}
    inputProps={{ 'aria-label': 'controlled' }}/>
     
    </Item>
   
     <EditTodos todos={data1}></EditTodos> 
    
       </Grid>
       
       </>

     ))} 
     </Grid></>:""}
    </Paper>
  </Box>
  </div>
)
}

export default Newtodos
