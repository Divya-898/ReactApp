import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import AlarmIcon from '@mui/icons-material/Alarm';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Link } from '@mui/material';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
const buttons = [
  <Button key="one">One</Button>,
  <Button key="two">Two</Button>,
  <Button key="three">Three</Button>,
];
export default function BasicButtons() {
  return (
    <>
    <h1>Basic button</h1>
    {/* <Stack spacing={2} direction="row">
      <Button variant="contained" id="text-buttons">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
      
    </Stack>
    <h1>Contained button</h1>
    <div>
    <Button>Primary</Button>
<Button disabled>Disabled</Button>
<Button href="#text-buttons">Link</Button>
    </div>
    <h1>Outlined button</h1>
    <Stack spacing={2} direction="row">
    <Button variant="contained" color="error">Contained</Button>
<Button variant="contained" color="success">
  Disabled
</Button>
<Button variant="contained" href="#contained-buttons">
  Link
</Button>
 </Stack>
 <div>Handlong link
 <Button
  onClick={() => {
    alert('clicked');
  }}
>
  Click me
</Button>
 </div>
 <div> <h1>upload flies</h1>
 <Button variant="contained" component="div">
  Upload
  <input  accept="image/*" multiple type="file" />
</Button>
<IconButton color="primary" aria-label="upload picture">
  <input accept="image/*" type="file" />
  <PhotoCamera />
</IconButton>
 </div>
 <div>Buttons with icons and label
 <Button variant="outlined" startIcon={<DeleteIcon />}>
  Delete
</Button>
<Button variant="contained" endIcon={<SendIcon />}>
  Send
</Button>
 </div>
 <div>Icon button

 <IconButton aria-label="delete">
  <DeleteIcon />
</IconButton>
<IconButton aria-label="delete" disabled color="primary">
  <DeleteIcon />
</IconButton>
<IconButton color="secondary" aria-label="add an alarm">
  <AlarmIcon />
</IconButton>
<IconButton color="primary" aria-label="add to shopping cart">
  <AddShoppingCartIcon />
</IconButton>
 </div>
 <div>
 <span style={{ cursor: 'not-allowed' }}>
  <Button  sx={{ marginLeft: "300px" }} component={Link} disabled>
    disabled
  </Button>
</span> */}

{/* <ButtonGroup variant="contained" aria-label="outlined primary button group">
  <Button>One</Button>
  <Button>Two</Button>
  <Button>Three</Button>
</ButtonGroup>
<ButtonGroup variant="text">
  <Button>One</Button>
  <Button>Two</Button>
  <Button>Three</Button>
</ButtonGroup> */}
return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
          m: 1,
        },
      }}
    >
      <ButtonGroup size="small" aria-label="small button group">
        {buttons}
      </ButtonGroup>
      <ButtonGroup color="secondary" aria-label="medium secondary button group">
        {buttons}
      </ButtonGroup>
      <ButtonGroup size="large" aria-label="large button group">
        {buttons}
      </ButtonGroup>
    </Box>
    <div>
      <Checkbox  />
      <Checkbox {...label} />
      <Checkbox {...label} disabled />
      <Checkbox {...label} disabled checked />
    </div>
  );
    </>
  );
}