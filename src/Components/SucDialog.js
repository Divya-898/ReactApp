import React, { useState } from 'react'


import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { Button } from '@mui/base';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { updateTodo } from '../mainRedux/features/TodoSlice';
import { styled } from "@mui/material/styles";
import {
  Box,
 
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  InputLabel,
  LinearProgress,
  TextareaAutosize,
  Typography,
} from "@mui/material";
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

export default function DialogModal({open, handleClose, scroll, data, footer}) {
   const dispatch = useDispatch()
  const{userId} = useParams();
  const [values, setValue] = useState(data);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  const handleSubmit = (e, id) => {
    e.preventDefault();
    console.log("comments");
    console.log("value", values.title);
    let payload = {};
    payload["userId"] = userId;
    payload["title"] = values.title;
    payload["completed"] = values.completed;
    payload["id"] = id;
    dispatch(updateTodo(payload));
  };
  // const handleDelete = (id) => {
  //   if (id) {
  //     dispatch(deleteTodo(id));
  //   } else {
  //     setError("Todos is not deleted");
  //   }
  // };
  function handleChange(e) {
    setValue({ ...values, [e.target.name]: e.target.value });
  }

  return (
    <>


{/* <Dialog
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
                    minRows={3}
                    type="text"
                    // disabled={disabled}
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
                    // disabled={disabled}
                    name="completed"
                    value={values.completed}
                    onChange={(e) => handleChange(e)}
                  />
                </div>
                <div>
                  <Divider
                    sx={{
                      width: "610px",
                      right: "30px",
                      position: "relative",
                      top: "20px",
                    }}
                  />
                </div>
                <DialogActions dividers={scroll === "paper"}>
                  <Box sx={{ width: "80%", margin: "-10px 0px 0px 70px" }}>
                    {/* {loading ? (
                      <LinearProgress
                        variant="buffer"
                        value={progress}
                        valueBuffer={buffer}
                      />
                    ) : (
                      ""
                    )} */}
                    {/* <div
                      className="message"
                      style={{ position: "relative", left: "80px" }}
                    > */}
                      {/* {error === "Succesfully updated" ? (
                        <p style={{ color: "green" }}>{error}</p>
                      ) : (
                        <p style={{ color: "red" }}>{error}</p>
                      )} */}
                    {/* </div>
                  </Box> */}
                  {/* <div style={{ margin: "40px 0px 0px 0px", display: "flex" }}>
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
          </Dialog> */}
      {/* <Dialog
        fullScreen={fullScreen}
        open={modalOpen}
        onClose={modalClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title" variant='h6'>
          {header}
        </DialogTitle>
        <Divider />
        <DialogContent
          sx={{ width: "520px" }}
        >
          {body}
        </DialogContent>
        <Divider />
        <DialogActions>
          {footer}
        </DialogActions>
      </Dialog> */} 
    </>
  )
}

