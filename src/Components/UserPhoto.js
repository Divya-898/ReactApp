import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import {useState } from "react";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  ImageList,
  ImageListItemBar,
} from "@mui/material";
import ImageListItem from "@mui/material/ImageListItem";
import { Button} from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";

import {
  LazyLoadImage,
  trackWindowScroll,
} from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useDispatch, useSelector } from "react-redux";
import {deletePhotos } from "../mainRedux/features/PhotoSlice";
import { Link, useNavigate } from "react-router-dom";
import CreatePhotos from "./CreatePhotos";
import DialogModal from "./DialogModal";
import PhotoEdit from "./PhotoEdit";
import DeleteDialog from "./DeleteDialog";
function UserPhoto({ photos, albums }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading,error } = useSelector((state) => state.userPhotos);
  const [open, setOpen] = useState(false);
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
    navigate(-1);
    window.location.reload();
  };

  const handleOpenEdit = (data) => {
    setOpenEdit(true);
    setPhotoEdit(data);
  };
  const handleCloseEdit = (data) => {
    setOpenEdit(false);
    navigate(-1);
    window.location.reload();
  };

  const handleClose = () => {
    setOpen(false);
    navigate(-1);
    window.location.reload();
  };
  const handleClickOpen = () => () => {
    setOpen(true);
  };

  const handleDelete = (id) => {
    if (id) {
        dispatch(deletePhotos(id));
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
          formData={edit}
          name="Update Photos"
        />
      ) : (
        <DialogModal
          open={open}
          handleClose={handleClose}
          formData={create}
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
