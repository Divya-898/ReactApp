import React, { useState } from "react";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  InputLabel,
  LinearProgress,
  TextareaAutosize,
} from "@mui/material";
import { useParams } from "react-router-dom";
import { styled } from "@mui/material/styles";
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

export default function EditInfo({ data }) {
  console.log("data", data);
  const { userId } = useParams();
  const { id } = useParams();
  console.log(id);
  const [open, setOpen] = React.useState(false);
  const [openBox, setOpenBox] = React.useState(false);
  const [scroll, setScroll] = React.useState("paper");
  const [values, setValue] = useState(data);
  const [progress, setProgress] = useState(0);
  const [buffer, setBuffer] = useState(10);
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [error, setError] = useState("");

  const handleClose = () => {
    setOpen(false);
  };
  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
  };
  function handleChange(e) {
    setValue({ ...values, [e.target.name]: e.target.value });
  }

  const handleSubmit = (e, id) => {
    e.preventDefault();
    console.log("comments");
    console.log("value", values.title);
    let payload = {};
    payload["userId"] = userId;
    payload["title"] = values.title;
    payload["completed"] = values.completed;
    payload["id"] = id;
  };
  return (
    <>
      <h1>hello</h1>
      <Button
        variant="contained"
        color="success"
        onClick={handleClickOpen("paper")}
        sx={{ float: "right", padding: "0" }}
      >
        Edit
      </Button>
      <div>
        <Dialog
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
                  disabled={disabled}
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
                  disabled={disabled}
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
                    {error === "Succesfully updated" ? (
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
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
}
