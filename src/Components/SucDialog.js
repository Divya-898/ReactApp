import React, { useState } from "react";

import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { Button } from "@mui/base";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateTodo } from "../mainRedux/features/TodoSlice";
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
import Form from "./EditFormTodos";

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

export default function DialogModal({ open, handleClose, temp, name }) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
        fullScreen={fullScreen}
        PaperProps={{
          sx: {
            width: "50%",
          },
        }}
      >
        <DialogTitle id="scroll-dialog-title" sx={{ color: "black" }}>
          {name}
        </DialogTitle>
        <DialogContent dividers={"true"}>
          {temp}
        </DialogContent>
      </Dialog>
    </>
  );
}
