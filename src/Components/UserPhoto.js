import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { useEffect, useState } from "react";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  Divider,
  ImageList,
  ImageListItemBar,
  LinearProgress,
} from "@mui/material";
import ImageListItem from "@mui/material/ImageListItem";
import { styled } from "@mui/material/styles";

import { Button, TextField } from "@mui/material";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";

import DialogTitle from "@mui/material/DialogTitle";
import AddCircleIcon from "@mui/icons-material/AddCircle";

import {
  LazyLoadImage,
  trackWindowScroll,
} from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";

import Select from "@mui/material/Select";

import Edit from "./Edit";
import { useDispatch, useSelector } from "react-redux";
import { createPhotos, deletePhotos } from "../mainRedux/features/PhotoSlice";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import CreatePhotos from "./CreatePhotos";
import DialogModal from "./SucDialog";
import PhotoEdit from "./PhotoEdit";
import DeleteDialog from "./DeleteDialog";
function UserPhoto({ photos, albums }) {
  const navigate = useNavigate();
  const { register, reset } = useForm();
  const dispatch = useDispatch();
  const [photoData, setPhotoData] = useState({
    thumbnailUrl: "", // required
    url: "",
    title: "", // required
  });
  const { loading } = useSelector((state) => state.userPhotos);
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState("paper");

  const [error, setError] = useState("");

  const [albumTitle, setAlbumTitle] = useState("");
  // const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [buffer, setBuffer] = useState(10);
  const [disabled, setDisabled] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [photoEdit, setPhotoEdit] = useState();
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [deleteData, setDeleteData] = useState(false);
  const handleDeleteOpen = (data) => {
    setDeleteOpen(true);
    setDeleteData(data);
  };
  const handleDeleteClose = () => {
    setDeleteOpen(false);
  };

  const handleOpenEdit = (data) => {
    setOpenEdit(true);
    setPhotoEdit(data);
  };
  const handleCloseEdit = (data) => {
    setOpenEdit(false);
  };

  const handleClose = () => {
    setOpen(false);
    navigate(-1);
  };
  const handleClickOpen = () => () => {
    setOpen(true);
  };

  const handleDelete = (id) => {
    if (id) {
      setTimeout(() => {
        dispatch(deletePhotos(id));
      }, 2000);

      setTimeout(() => {
        setError("Succesfully Deleted");
      }, 2000);
    } else {
      setError("Photo is not deleted");
    }
  };

  const create = (
    <CreatePhotos open={open} handleClose={handleClose} albums={albums} />
  );
  const edit = (
    <PhotoEdit
      open={openEdit}
      photoEdit={photoEdit}
      handleClose={handleCloseEdit}
    />
  );
  return (
    <div>
      {photoEdit ? (
        <DialogModal
          open={openEdit}
          handleClose={handleCloseEdit}
          temp={edit}
          name="Update Photos"
        />
      ) : (
        <DialogModal
          open={open}
          handleClose={handleClose}
          temp={create}
          name="Create Photo"
        />
      )}
      {deleteData ? (
        <DeleteDialog
          handleDeleteClose={handleDeleteClose}
          handleDelete={handleDelete}
          deleteData={deleteData}
          handleDeleteOpen={deleteOpen}
          error={error}
          content="would you like to delete this photo ?"
          title="Delete Photo"
        />
      ) : (
        ""
      )}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": {
            m: 1,
          },
        }}
      >
        <Paper
          elevation={3}
          sx={{ width: "422px", borderRadius: "10px", height: "500px" }}
        >
          <div style={{ display: "flex" }}>
            <h1 style={{ padding: "10px", width: "390px" }}>Photos</h1>
            <Link to={`photo`}>
              <Button
                onClick={handleClickOpen("paper")}
                sx={{
                  "&:hover": {
                    backgroundColor: "#FFF",
                  },
                }}
              >
                <AddCircleIcon sx={{ marginTop: "30px" }} />
              </Button>
            </Link>
          </div>
          <ImageList sx={{ height: 370, padding: "0 8px" }} cols={3} gap={8}>
            {photos &&
              photos.map((item) => (
                <ImageListItem sx={{ height: "150px" }} key={item.id}>
                  <span>
                    <div
                      style={{
                        position: "relative",
                        top: "30px",
                        zIndex: "1",
                        right: "15px",
                      }}
                    >
                      <Link to={`photo/${item.id}`}>
                        <ModeEditIcon
                          color="success"
                          onClick={() => handleOpenEdit(item)}
                          sx={{ float: "right" }}
                        />
                      </Link>
                      <Link to={`photo/${item.id}/delete`}>
                        <DeleteIcon
                          color="error"
                          onClick={() => handleDeleteOpen(item)}
                          sx={{
                            float: "right",
                            padding: "0",
                            position: "relative",
                            left: "35px",
                          }}
                        />
                      </Link>
                    </div>

                    <ImageListItemBar title={item.title} position="bottom" />
                    <LazyLoadImage
                      src={item.thumbnailUrl}
                      width="130px"
                      height="110px"
                      alt={item.title}
                    />
                  </span>
                </ImageListItem>
              ))}
          </ImageList>
        </Paper>
      </Box>
    </div>
  );
}

export default trackWindowScroll(UserPhoto);
