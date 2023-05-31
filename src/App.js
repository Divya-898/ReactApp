import logo from './logo.svg';
import './App.css';
import BasicButtons from './ComponentPractice/button';
import ButtonBases from './ComponentPractice/ButtonBases';
import RecipeReviewCard from './ComponentPractice/Card';
import IndeterminateCheckbox from './ComponentPractice/FormController';
import PrimarySearchAppBar from './ComponentPractice/Navbar';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import BasicPagination from './ComponentPractice/Pagination';
import { useState } from 'react';
import Paginate from './ComponentPractice/Pagination';
import PostNavbar from './ComponentPractice/PostNavbar';
import { Route, Routes } from 'react-router-dom';
import Post from './ComponentPractice/Post';
import { CardMedia } from '@mui/material';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}))

function App() {

  return (
    <>
    {/* <CardMedia
          component="img"
          height="194"
          image=""
          alt="Paella dish"
        /> */}

     
    <Routes>
     <Route path="/" exact element={<RecipeReviewCard/>} /> 
    <Route path="/user/:userId"  element={<Post/>} />
    </Routes>
    {/* <BasicPagination></BasicPagination>
    <PrimarySearchAppBar></PrimarySearchAppBar> 
    <RecipeReviewCard></RecipeReviewCard>  */}




    {/* */}
   {/* <BasicButtons></BasicButtons> */}
     {/* <ButtonBases></ButtonBases> */}
   {/* <RecipeReviewCard></RecipeReviewCard>  */}
   {/* <IndeterminateCheckbox></IndeterminateCheckbox> */}
   
   {/* <Grid container rowSpacing={1}>
  <Grid xs={5}>
    <div>1</div>
  </Grid>
  <Grid xs={5}>
    <Item>2</Item>
  </Grid>
  <Grid xs={5}>
    <Item>3</Item>
  </Grid>
  <Grid xs={5}>
    <Item>4</Item>
  </Grid>
</Grid> */}

    </>
    
  );
}

export default App;
