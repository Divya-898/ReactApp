import {
  Box,
  Button,
  DialogActions,
  Divider,
  InputLabel,
  LinearProgress,
  TextareaAutosize,
} from "@mui/material";
import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { updateTodo } from "../mainRedux/features/TodoSlice";
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
function EditFormTodos({ handleClose, editTodo, isOpen}) {
  const { userId } = useParams();
  const [disabled, setDisabled] = useState(false);
  const [todos, setTodos] = useState(editTodo);
  const dispatch = useDispatch();
  const { loading,error } = useSelector((state) => state.app);
  const [progress, setProgress] = useState(0);
  const [buffer, setBuffer] = useState(10);
  const handleSubmit = (e, id) => {
    e.preventDefault();
    let payload = {};
    payload["userId"] = userId;
    payload["title"] = todos.title;
    payload["completed"] =Boolean(todos.completed)
    payload["id"] = id;
    if (todos.title && todos.completed) {
        dispatch(updateTodo(payload));
          setDisabled(true);
    } 
  };
  function handleChange(e) {
    setTodos({ ...todos, [e.target.name]: e.target.value });
  }
  return (
    <div>
      <form
        className="login-form"
        onSubmit={(e) => handleSubmit(e, editTodo.id)}
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
            type="checkbox"
            disabled={disabled}
            name="title"
            value={todos.title}
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
            name="completed"
            value={todos.completed}
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
        <DialogActions dividers={isOpen}>
          <Box sx={{ width: "80%", margin: "-10px 0px 0px 70px" }}>
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
              style={{ position: "relative", left: "80px" }}
            >
              {error === "Successfully Updated" ? (
                <p style={{ color: "green" }}>{error}</p>
              ) : (
                <p style={{ color: "red" }}>{error}</p>
              )}
            </div>
          </Box>
          <div style={{ margin: "40px 0px 0px 0px", display: "flex" }}>
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
    </div>
  );
}

export default EditFormTodos;
