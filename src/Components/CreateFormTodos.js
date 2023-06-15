import { Box, Button, DialogActions, Divider, InputLabel, LinearProgress, TextareaAutosize } from '@mui/material'
import React, { useState } from 'react'
import { styled } from "@mui/material/styles";
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
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

function CreateFormTodos({handleClose, handleSubmit, 
  handleChange,error,}) {
    const { loading } = useSelector((state) => state.app);
    const [progress, setProgress] = useState(0);
const [buffer, setBuffer] = useState(10);
    const {userId} = useParams();
  return (
    <div>
       <form
                      className="login-form"
                      onSubmit={(e) => handleSubmit(e, userId)}
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
                          // disabled={disabled}
                          minRows={3}
                          type="text"
                          name="title"
                          // {...register("title")}
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
                          // disabled={disabled}
                          type="text"
                          name="completed"
                          // {...register("completed")}
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
                      <DialogActions dividers={true ? 1 : undefined}>
                        <Box
                          sx={{ width: "80%", margin: "-10px 0px 0px 70px" }}
                        >
                          {loading ? (
                            <LinearProgress
                              variant="buffer"
                              value={progress}
                              valueBuffer={buffer}
                            />
                          ) : (
                            ""
                          )}
                          <div
                            className="message"
                            style={{
                              position: "relative",
                              left: "80px",
                              color: "red",
                            }}
                          >
                            {error === "Succesfully created" ? (
                              <p style={{ color: "green" }}>{error}</p>
                            ) : (
                              <p style={{ color: "red" }}>{error}</p>
                            )}
                          </div>
                        </Box>

                        <div
                          style={{
                            margin: "40px 0px 0px 0px",
                            display: "flex",
                          }}
                        >
                          <Button
                            onClick={handleClose}
                            color="error"
                            variant="contained"
                            sx={{ marginRight: "10px" }}
                          >
                            Cancel
                          </Button>
                          <Button
                            type="submit"
                            color="success"
                            variant="contained"
                            // onClick={() =>
                            //   reset({
                            //     title: "",
                            //     completed: "",
                            //   })
                            // }
                          >
                            Create
                          </Button>
                        </div>
                      </DialogActions>
                    </form>
    </div>
  )
}

export default CreateFormTodos
