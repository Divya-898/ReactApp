import * as React from 'react';
// import Button from '@mui/material/Button';
// import Dialog from '@mui/material/Dialog';
// import DialogActions from '@mui/material/DialogActions';
// import DialogContent from '@mui/material/DialogContent';

// import DialogTitle from '@mui/material/DialogTitle';
// import { InputLabel, TextField } from '@mui/material';

// export default function ScrollDialog() {
//   const [open, setOpen] = React.useState(false);
//   const [scroll, setScroll] = React.useState('paper');

//   const handleClickOpen = (scrollType) => () => {
//     setOpen(true);
   
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

 
//   return (
//     <div style={{height:"400px",width:"400px"}}>
//       <Button onClick={handleClickOpen('paper')}>scroll=paper</Button>
//       <Button onClick={handleClickOpen('body')}>scroll=body</Button>
//       <Dialog
//         open={open}
//         onClose={handleClose}
//         scroll={scroll}
//         aria-labelledby="scroll-dialog-title"
//         aria-describedby="scroll-dialog-description"
//         PaperProps={{
//     sx: {
//       width: "50%",
//       maxHeight: 300
//     }}}
// >
//         <DialogTitle id="scroll-dialog-title">Subscribe</DialogTitle>
//         <DialogContent dividers={scroll === 'paper'}>
         
//             <form
//                           className="login-form">
//                         {/* //   onSubmit={(e) => handleSubmit(e, userId)} */}
                        
//                           <div style={{ display: "flex" }}>
//                             <InputLabel
//                               sx={{
//                                 padding:"10px"
                               
//                               }}
//                             >
//                               Title
//                             </InputLabel>
//                             <TextField sx={{
//         paddingTop:"10px",
//         marginLeft:"5px"
//     }}
//     InputProps={{ sx: { height: 25 } }}
//                               type="text"
                              
//                               name="title"
//                             //   onChange={(e) => handleTodosChange(e)}
//                             />{" "}
//                           </div> 

//                           <div style={{ display: "flex" }}>
//                             <InputLabel
//                               sx={{
//                                 padding:"10px"
                                
//                               }}
//                             >
//                               Body
//                             </InputLabel>
//                             <TextField sx={{
//         paddingTop:"10px"
//     }}
//     InputProps={{ sx: { height: 25 } }}
//                               type="text"
                             
//                               name="body"
//                             //   onChange={(e) => handleTodosChange(e)}
//                             />
//                           </div>
//                           <button
//                             className="login-btn"
//                             type="submit"
//                             style={{ float: "right" }}
//                           >
//                             Submit
//                           </button>
//                           <DialogActions dividers={scroll === 'paper'}>
//           <Button onClick={handleClose}>Cancel</Button>
//           <Button onClick={handleClose}>Subscribe</Button>
//         </DialogActions>
//                         </form>
         
//         </DialogContent>
        
//       </Dialog>
//     </div>
//   );
// }