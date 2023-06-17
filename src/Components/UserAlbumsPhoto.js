import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteIcon from "@mui/icons-material/Delete";
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
  Typography,
} from "@mui/material";
import axios from "axios";
import { styled } from "@mui/material/styles";
import { useDispatch, useSelector } from "react-redux";
import { deleteAlbums, updateAlbums } from "../mainRedux/features/AlbumSlice";
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
export default function UserAlbumsPhoto({
  albumId,
  albumWidth,
  albumHeight,
  items,
}) {
  const navigate = useNavigate();
   const{loading} = useSelector((state)=> state.userAlbums)
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const [openBox, setOpenBox] = React.useState(false);
  const [scroll, setScroll] = React.useState("paper");
  const [album, setAlbum] = useState(items);
  const [progress, setProgress] = useState(0);
  const [buffer, setBuffer] = useState(10);
  const [disabled, setDisabled] = useState(false);
  const [error, setError] = useState("");
  const { userId } = useParams();
  const handleClose = () => {
    setOpen(false);
    navigate(-1);
  };

  const handleOpenDelete = () => {
    setOpenBox(true);
  };
  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
  };
  const handleCloseDelete = (event, reason) => {
    if (reason !== "backdropClick") {
      setOpenBox(false);
      navigate(-1);
    }
  };
  function handleChange(e) {
    setAlbum({ ...album, [e.target.name]: e.target.value });
  }

  const handleSubmit = (e, id) => {
    e.preventDefault();
    let payload = {};
    payload["userId"] = id;
    payload["title"] = album.title;
    payload["completed"] = album.completed;
    payload["id"]=items.id
    if (album.title) {
      setTimeout(() => {
        dispatch(updateAlbums(payload));
      }, 500);
      setTimeout(() => {
        setDisabled(true);
        setAlbum({title:"",})
        setError("Succesfully updated");
      }, 1000);
      setTimeout(()=>{
        window.location.reload();
      },3000)
    }
    else{
      setError("albums is not updated")
    }
    
  };

  const handleDelete = (id) => {
    if (id) {
      setTimeout(()=>{
        dispatch(deleteAlbums(id));
      },2000)
     
      setTimeout(()=>{
        setError("Succesfully Deleted")
      },2000)
      } 
     else {
      setError("Album is not deleted");
    }
  };

  return (
    <>
      
       {/*<div
          style={{
            display: "flex",
            position: "relative",
            top: "60px",
            left: "75px",
          }}
        >
          <Link to={`edit/${items.id}`}>
          <ModeEditIcon color="success" onClick={handleClickOpen("paper")}></ModeEditIcon></Link>
          <Link to={`delete/${items.id}`}><DeleteIcon color="error" onClick={handleOpenDelete}></DeleteIcon></Link>
        {/* </div> */}
        
        <img 
          src={albumId.thumbnailUrl}
          alt=""
          width={albumWidth}
          height={albumHeight}
          style={{ borderRadius: "10px" }}
        ></img>
      
        
        </>
  )}


  
