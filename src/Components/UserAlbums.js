import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import UserPhoto from "./UserAlbumsPhoto";
import UserAlbumsPhoto from "./UserAlbumsPhoto";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  Button,
  ImageList,
  ImageListItem,
  ImageListItemBar,
} from "@mui/material";

import AddCircleIcon from "@mui/icons-material/AddCircle";
import { useDispatch } from "react-redux";
import { deleteAlbums } from "../mainRedux/features/AlbumSlice";
import EditAlbums from "./EditAlbums";
import DialogModal from "./SucDialog";
import DeleteDialog from "./DeleteDialog";
import CreateAlbum from "./CreateAlbum";

function UserAlbums({ commonList }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    navigate(-1);
  };
  const [error, setError] = useState("");
  const [openEdit, setOpenEdit] = React.useState(false);
  const [albumEdit, setAlbumEdit] = useState();
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [deleteData, setDeleteData] = useState(false);
  const handleDeleteOpen = (data) => {
    setDeleteOpen(true);
    setDeleteData(data);
  };
  const handleDeleteClose = () => {
    setDeleteOpen(false);
    navigate(-1)
  };

  const handleOpenEdit = (data) => {
    setOpenEdit(true);
    setAlbumEdit(data);
  };
  const handleCloseEdit = (data) => {
    setOpenEdit(false);
  };
  const handleDelete = (id) => {
    if (id) {
      setTimeout(() => {
        dispatch(deleteAlbums(id));
      }, 2000);

      setTimeout(() => {
        setError("Succesfully Deleted");
      }, 2000);
    } else {
      setError("Album is not deleted");
    }
  };
  const edit = (
    <EditAlbums albumEdit={albumEdit} handleClose={handleCloseEdit} />
  );
  const create = <CreateAlbum handleClose={handleClose} />;

  return (
    <div>
      {albumEdit ? (
        <DialogModal
          open={openEdit}
          handleClose={handleCloseEdit}
          temp={edit}
          name="Update Albums"
        />
      ) : (
        <DialogModal
          open={open}
          handleClose={handleClose}
          temp={create}
          name="Create Album"
        />
      )}
      {deleteData ? (
        <DeleteDialog
          handleDeleteClose={handleDeleteClose}
          handleDelete={handleDelete}
          deleteData={deleteData}
          handleDeleteOpen={deleteOpen}
          error={error}
          content="would you like to delete this Album ?"
          title="Delete Album"
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
          sx={{ width: "422px", height: "500px", borderRadius: "10px" }}
        >
          <div style={{ display: "flex" }}>
            <h1 style={{ padding: "10px", width: "390px" }}>Albums</h1>
            <Link to={`album`}>
            <Button
              onClick={handleOpen}
              sx={{
                "&:hover": {
                  backgroundColor: "#FFF",
                },
              }}
            >
              <AddCircleIcon sx={{ marginTop: "30px" }}/>
            </Button>
            </Link>
          </div>
          {commonList ? (
            <ImageList
              sx={{ height: 370, padding: "0 8px" }}
              cols={3}
              gap={8}
              key={commonList}
            >
              {commonList &&
                commonList.map((items) => {
                  var str = "";
                  if (items.photos) {
                    str = items.photos[0];
                  } else {
                    str = {
                      thumbnailUrl:
                        "https://upload.wikimedia.org/wikipedia/commons/f/fd/Pink_flower.jpg",
                    };
                  }
                  return (
                    <span key={items.id}>
                      <div
                        style={{
                          position: "relative",
                          top: "6px",
                          zIndex: "1",
                          left: "10px",
                        }}
                      >
                        <Link to={`album/${items.id}`}>
                          <Button
                            onClick={() => handleOpenEdit(items)}
                            sx={{ float: "right", padding: "0" }}
                          >
                            <ModeEditIcon color="success" />
                          </Button>{" "}
                        </Link>
                        <Link to={`album/${items.id}/delete`}>
                          <Button
                            onClick={() => handleDeleteOpen(items)}
                            sx={{ float: "right", padding: "0" }}
                          >
                            <DeleteIcon
                              color="error"
                              sx={{
                                position: "relative",
                                zIndex: "1",
                                left: "40px",
                              }}
                            />
                          </Button>
                        </Link>
                      </div>
                      <ImageListItem sx={{ height: "150px" }}>
                        <UserAlbumsPhoto
                          albumId={str}
                          key={items.id}
                          albumWidth={"130px"}
                          albumHeight={"100px"}
                          items={items}
                        ></UserAlbumsPhoto>
                        <ImageListItemBar
                          title={items.title}
                          sx={{ width: "130px" }}
                        />
                      </ImageListItem>
                    </span>
                  );
                })}
            </ImageList>
          ) : (
            ""
          )}
        </Paper>
      </Box>
    </div>
  );
}

export default UserAlbums;
