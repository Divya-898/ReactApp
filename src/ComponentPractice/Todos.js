import React, { useCallback, useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { useParams } from 'react-router-dom';
import Checkbox from '@mui/material/Checkbox';
import {Grid} from '@mui/material';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function Todos({user}) {
  console.log(user)
  const [todos, setTodos] = useState([]);
  const [checked, setChecked] = React.useState("true");

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
  if(todos){
   console.log((todos.title))
  }
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
         
        },
      }}
    >
     <Paper elevation={3} sx={{borderRadius:"10px"}}> 
      {todos ? <> <h1 style={{padding:"10px"}}>Todos</h1>
      
     
        {todos.map((items)=>(
        <>
       <span style={{padding: "15px"}}>{items.title}
       <Checkbox
      checked={items.completed}
      onChange={handleChange}
      inputProps={{ 'aria-label': 'controlled' }}
     
    /> </span> <br></br>
    </>
    ))} </> :""}   
    <Grid container rowSpacing={4} columnSpacing={{  sm: 1 }}>
       
        {/* {todos && todos.map((items) =>(
         <Grid item xs={8} sx={{ width:"150px"}}>
         <Item sx={{boxShadow:"none","text-align": "start",height:"15px",width:"380px" ,padding: "0px 0px 0px 20px"}}>{items.title} 
           <Checkbox
      checked={items.completed}
      onChange={handleChange}
      inputProps={{ 'aria-label': 'controlled' }}/>
      </Item>
         </Grid>
         
 
       ))} */}
       </Grid>
      </Paper>
    </Box>
    </div>
  )
}

export default Todos;


