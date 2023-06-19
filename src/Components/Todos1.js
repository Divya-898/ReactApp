import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Link, useNavigate, useParams } from "react-router-dom";
import Checkbox from "@mui/material/Checkbox";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  Button,
  Grid,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import React, { useEffect, useState } from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, showTodo } from "../mainRedux/features/TodoSlice";
import DialogModal from "./DialogModal";
import EditFormTodos from "./EditFormTodos";
import CreateFormTodos from "./CreateFormTodos";
import DeleteDialog from "./DeleteDialog";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
function UserTodos() {
  const navigate = useNavigate();
  const { userId } = useParams();
  const { todos,error } = useSelector((state) => state.app);
  const dispatch = useDispatch();
  const [checked, setChecked] = React.useState(false);
  const [openBox, setOpenBox] = React.useState(false);
  const [editTodo, setEditTodo] = useState();
  const [open, setOpen] = React.useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [deleteData, setDeleteData] = useState(false);
  const itemTitle = {
    boxShadow: "none",
    textAlign: "start",
    width: "250px",
    padding: "10px 0px 0px 20px",
  }
const btnEdit={
  float: "right",
  padding: "8px 0px 0px 0px",
  boxShadow: "none",
  position: "relative",
  left: "30px",
}
  //delete handler
  const handleDeleteOpen = (data) => {
    setDeleteOpen(true);
    setDeleteData(data);
  };
  const handleDeleteClose = () => {
    setDeleteOpen(false);
    
    window.location.reload();
    
  };

  const handleClickOpen = (data) => {
    setOpen(true);
    setEditTodo(data);
  };

  const handleCLoseCreate = () => {
    setOpenBox(false);
    navigate(-1);
    window.location.reload();
  };

  const handleOpen = () => {
    setOpenBox(true);
  };
  const handleClose = () => {
    setOpen(false);
    navigate(-1);
    window.location.reload();
  };

  const handleChange = (event, data) => {
    if (data) {
      setChecked(event.target.checked);
    }
  };
  const IsParsable = (data) => {
    try {
      JSON.parse(data);
    } catch (e) {
      return false;
    }
    return true;
  };
  const handleDelete = (id) => {
    if (id) {
        dispatch(deleteTodo(id));
    
    }
  };

  const temp = (
    <EditFormTodos
      handleClose={handleClose}
      editTodo={editTodo}
    ></EditFormTodos>
  );

  const create = (
    <CreateFormTodos handleClose={handleCLoseCreate}></CreateFormTodos>
  );
  useEffect(() => {
    dispatch(showTodo(userId));
  }, []);
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": {
            m: 1,
            width: "422px",
            maxHeight: 440,
            overflow: "auto",
          },
        }}
      >
        <Paper elevation={3} sx={{ borderRadius: "10px" }}>
          {todos ? (
            <>
              <div className="todoWrapper">
                <h1 className="todoTitle">Todos</h1>
                <Link to={`todos`}>
                  <Button
                    onClick={handleOpen}
                  >
                    <AddCircleIcon sx={{ marginTop: "30px" }} />
                  </Button>
                </Link>
              </div>
              <div></div>
              {todos.map((data1) => (
                  <Grid container columnSpacing={{ sm: 1 }} key={data1.id}>
                    <Grid>
                      <Item  sx={itemTitle}
                      >
                        {data1.title}
                      </Item>
                    </Grid>
                    <Grid>
                      <Item
                        sx={{
                          boxShadow: "none",
                        }}
                      >
                        <Checkbox
                          disableTouchRipple
                          sx={{ "&:hover": { backgroundColor: "transparent" } }}
                          checked={
                            IsParsable(data1.completed)
                              ? JSON.parse(data1.completed === true)
                              : false
                          }
                          onChange={(e) => handleChange(e, data1.completed)}
                        />
                      </Item>
                    </Grid>
                    <Grid
                      sx={{
                        boxShadow: "none",
                        width: "0px",
                      }}
                    >
                      <Item
                        sx={{
                          boxShadow: "none",
                        }}
                      >
                        <div className="todoEdit">
                          <Link to={`todos/${data1.id}`}>
                            <Button
                              onClick={() => handleClickOpen(data1)}
                              sx={btnEdit}
                            >
                              <ModeEditIcon sx={{}} />
                            </Button>{" "}
                          </Link>
                        </div>
                      </Item>
                    </Grid>
                    <Grid
                      sx={{
                        boxShadow: "none",
                        marginLeft: "22px",
                      }}
                    >
                      <Item
                        sx={{
                          boxShadow: "none",
                        }}
                      >
                        <Link to={`todos/${data1.id}/delete`}>
                          <Button
                            onClick={() => handleDeleteOpen(data1)}
                            sx={{}}
                          >
                            <DeleteIcon color="error" />
                          </Button>
                        </Link>
                      </Item>
                    </Grid>
                  </Grid>
                
))}
            </>
          ) : (
            ""
          )}
        </Paper>
        {editTodo ? (
          <DialogModal
            open={open}
            handleClose={handleClose}
            formData={temp}
            name="Update Todos"
          ></DialogModal>
        ) : (
          <DialogModal
            open={openBox}
            handleClose={handleCLoseCreate}
            formData={create}
            name="Create Todos"
          ></DialogModal>
        )}
      </Box>
      {deleteData ? (
        <DeleteDialog
          handleDeleteClose={handleDeleteClose}
          handleDelete={handleDelete}
          deleteData={deleteData}
          handleDeleteOpen={deleteOpen}
          error={error}
          content="would you like to delete this todo ?"
          title="Delete Todo"
        />
      ) : (
        ""
      )}
    </div>
  );
}

export default UserTodos;
