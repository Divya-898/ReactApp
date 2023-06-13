import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import BadgeIcon from "@mui/icons-material/Badge";
import {
  DialogTitle,
  Divider,
  Icon,
  IconButton,
  LinearProgress,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";
import DraftsIcon from "@mui/icons-material/Drafts";
import CloudSyncIcon from "@mui/icons-material/CloudSync";
import AddBusinessIcon from "@mui/icons-material/AddBusiness";
import FactoryIcon from "@mui/icons-material/Factory";
import React, { useEffect, useRef, useState } from "react";
import ModeEditIcon from "@mui/icons-material/ModeEdit";

import axios from "axios";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  InputLabel,
  TextField,
} from "@mui/material";
import { Link, useParams } from "react-router-dom";
import { useDispatch} from "react-redux";
import { showUser, updateUser } from "../mainRedux/features/UserSlice";
function UserIntro({ user }) {
  const dispatch = useDispatch();
  const cityref = useRef("");
  const streetref = useRef("");
  const emailref = useRef("");
  const nameref = useRef("");
  const phoneref = useRef("");
  const websiteref = useRef("");
  const comNameref = useRef("");
  const zipcoderef = useRef("");
  const suiteref = useRef("");
  const catchPhraseref = useRef("");
  const bsref = useRef("");
  const { userId } = useParams();
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState("paper");
  const [values, setValue] = useState(user);
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [buffer, setBuffer] = useState(10);
  const [error, setError] = useState("");
  const [disabled, setDisabled] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
  };
  
  const handleSubmit = (e) => {
    e.preventdefault();
    console.log("postId", userId);
    let payload = {};
    payload["id"] = user.id;
    payload["name"] = nameref.current.value;
    payload["email"] = emailref.current.value;
    payload["phone"] = phoneref.current.value;
    payload["website"] = websiteref.current.value;
    payload["address"] = {
      street: streetref.current.value,
      city: cityref.current.value,
      suite: suiteref.current.value,
      zipcode: zipcoderef.current.value,
    };
    payload["company"] = {
      catchPhrase: catchPhraseref.current.value,
      bs: bsref.current.value,
      name: comNameref.current.value,
    };
    if (values) {
      setTimeout(() => {
        dispatch(updateUser(payload));
      }, 500);
      setTimeout(() => {
        setDisabled(true);
        emailref.current.value="";
        nameref.current.value=""
        phoneref.current.value=""
        websiteref.current.value=""
        streetref.current.value=""
        streetref.current.value=""
        cityref.current.value=""
        suiteref.current.value=""
        zipcoderef.current.value=""
        catchPhraseref.current.value=""
        bsref.current.value=""
        comNameref.current.value=""
        setError("Succesfully created");
      }, 1000);
    } else {
      setError("User is not Updated");
    }
  };
  function handleChange(e) {
    setValue({ ...values, [e.target.name]: e.target.value });
  }

  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": {
            m: 1,
            width: "422px",
            height: "490px",
            backgroundColor: "#ffffff",
            borderRadius: "10px",
          },
        }}
      >
        <Paper elevation={3}>
          <div style={{ display: "flex" }}>
            <h1
              style={{ padding: "20px", width: "390px" }}
              className="profileName"
            >
              Intro
            </h1>
            <Link to={`edit/${user.id}`}>
            <Button
              onClick={handleClickOpen("paper")}
              sx={{
                "&:hover": {
                  backgroundColor: "#FFF",
                },
              }}
            >
              <ModeEditIcon />
            </Button>
            </Link>
          </div>
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
                  maxHeight: 640,
                },
              }}
            >
              <DialogTitle id="scroll-dialog-title" sx={{ color: "black" }}>
                Update User
              </DialogTitle>
              <DialogContent dividers={scroll === "paper"}>
                <form className="login-form" onSubmit={(e) => handleSubmit(e)}>
                  <div style={{ display: "flex" }}>
                    <InputLabel
                      sx={{
                        padding: "10px",
                      }}
                    >
                      Title
                    </InputLabel>
                    <div style={{ marginLeft: "64px" }}>
                      <TextField
                        disabled={disabled}
                        sx={{
                          paddingTop: "10px",
                          marginLeft: "5px",
                        }}
                        InputProps={{ sx: { height: 25 } }}
                        type="text"
                        inputProps={{ readOnly: false }}
                        inputRef={nameref}
                        defaultValue={values.name}
                      />
                    </div>
                  </div>

                  <div style={{ display: "flex" }}>
                    <InputLabel
                      sx={{
                        padding: "10px",
                      }}
                    >
                      Email
                    </InputLabel>
                    <div style={{ marginLeft: "58px" }}>
                      <TextField
                        disabled={disabled}
                        sx={{
                          paddingTop: "10px",
                        }}
                        InputProps={{ sx: { height: 25 } }}
                        type="text"
                        inputProps={{ readOnly: false }}
                        inputRef={emailref}
                        defaultValue={values.email}
                        onChange={(e) => handleChange(e)}
                      />
                    </div>
                  </div>
                  <div style={{ display: "flex" }}>
                    <InputLabel
                      sx={{
                        padding: "10px",
                      }}
                    >
                      Street
                    </InputLabel>
                    <div style={{ marginLeft: "55px" }}>
                      <TextField
                        disabled={disabled}
                        sx={{
                          paddingTop: "10px",
                        }}
                        InputProps={{ sx: { height: 25 } }}
                        type="text"
                        inputRef={streetref}
                        defaultValue={values.address.street}
                      />
                    </div>
                  </div>
                  <div style={{ display: "flex" }}>
                    <InputLabel
                      sx={{
                        padding: "10px",
                      }}
                    >
                      City
                    </InputLabel>
                    <div style={{ marginLeft: "70px" }}>
                      <TextField
                        disabled={disabled}
                        sx={{
                          paddingTop: "10px",
                        }}
                        InputProps={{ sx: { height: 25 } }}
                        type="text"
                        inputProps={{ readOnly: false }}
                        inputRef={cityref}
                        defaultValue={values.address.city}
                      />
                    </div>
                  </div>
                  <div style={{ display: "flex" }}>
                    <InputLabel
                      sx={{
                        padding: "10px",
                      }}
                    >
                      Suite
                    </InputLabel>
                    {/* <input type="text" name="body"
              value={values.body}
              onChange={e => setValue(e.target.value)}/> */}
                    <div style={{ marginLeft: "60px" }}>
                      <TextField
                        disabled={disabled}
                        sx={{
                          paddingTop: "10px",
                        }}
                        InputProps={{ sx: { height: 25 } }}
                        type="text"
                        inputProps={{ readOnly: false }}
                        inputRef={suiteref}
                        defaultValue={values.address.suite}
                      />
                    </div>
                  </div>
                  <div style={{ display: "flex" }}>
                    <InputLabel
                      sx={{
                        padding: "10px",
                      }}
                    >
                      Zipcode
                    </InputLabel>
                    <div style={{ marginLeft: "38px" }}>
                      <TextField
                        disabled={disabled}
                        sx={{
                          paddingTop: "10px",
                        }}
                        InputProps={{ sx: { height: 25 } }}
                        type="text"
                        inputProps={{ readOnly: false }}
                        inputRef={zipcoderef}
                        defaultValue={values.address.zipcode}
                      />
                    </div>
                  </div>
                  <div style={{ display: "flex" }}>
                    <InputLabel
                      sx={{
                        padding: "10px",
                      }}
                    >
                      Catch-Phrase
                    </InputLabel>
                    <div style={{ marginLeft: "-3px" }}>
                      <TextField
                        disabled={disabled}
                        sx={{
                          paddingTop: "10px",
                        }}
                        InputProps={{ sx: { height: 25 } }}
                        type="text"
                        inputProps={{ readOnly: false }}
                        inputRef={catchPhraseref}
                        defaultValue={values.company.catchPhrase}
                      />
                    </div>
                  </div>
                  <div style={{ display: "flex" }}>
                    <InputLabel
                      sx={{
                        padding: "10px",
                      }}
                    >
                      Name
                    </InputLabel>
                    <div style={{ marginLeft: "53px" }}>
                      <TextField
                        disabled={disabled}
                        sx={{
                          paddingTop: "10px",
                        }}
                        InputProps={{ sx: { height: 25 } }}
                        type="text"
                        inputProps={{ readOnly: false }}
                        inputRef={comNameref}
                        defaultValue={values.company.name}
                      />
                    </div>
                  </div>
                  <div style={{ display: "flex" }}>
                    <InputLabel
                      sx={{
                        padding: "10px",
                      }}
                    >
                      Services
                    </InputLabel>
                    <div style={{ marginLeft: "33px" }}>
                      <TextField
                        disabled={disabled}
                        sx={{
                          paddingTop: "10px",
                        }}
                        InputProps={{ sx: { height: 25 } }}
                        type="text"
                        inputProps={{ readOnly: false }}
                        inputRef={bsref}
                        defaultValue={values.company.bs}
                      />
                    </div>
                  </div>
                  <div style={{ display: "flex" }}>
                    <InputLabel
                      sx={{
                        padding: "10px",
                      }}
                    >
                      Phone
                    </InputLabel>
                    <div style={{ marginLeft: "50px" }}>
                      <TextField
                        disabled={disabled}
                        sx={{
                          paddingTop: "10px",
                        }}
                        InputProps={{ sx: { height: 25 } }}
                        type="text"
                        inputProps={{ readOnly: false }}
                        inputRef={phoneref}
                        defaultValue={values.phone}
                        onChange={(e) => handleChange(e)}
                      />
                    </div>
                  </div>
                  <div style={{ display: "flex" }}>
                    <InputLabel
                      sx={{
                        padding: "10px",
                      }}
                    >
                      Website
                    </InputLabel>
                    <div style={{ marginLeft: "40px" }}>
                      <TextField
                        disabled={disabled}
                        sx={{
                          paddingTop: "10px",
                        }}
                        InputProps={{ sx: { height: 25 } }}
                        type="text"
                        inputProps={{ readOnly: false }}
                        inputRef={websiteref}
                        defaultValue={values.website}
                        onChange={(e) => handleChange(e)}
                      />
                    </div>
                  </div>
                  <div>
                    <Divider
                      sx={{
                        width: "610px",
                        right: "30px",
                        position: "relative",
                        top: "10px",
                      }}
                    />
                  </div>
                  <DialogActions dividers={scroll === "paper"}>
                    <Box sx={{ width: "80%", margin: "-10px 0px 20px 70px" }}>
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
                        {error === "Succesfully created" ? (
                          <p style={{ color: "green" }}>{error}</p>
                        ) : (
                          <p style={{ color: "red" }}>{error}</p>
                        )}
                      </div>
                    </Box>
                    <Typography
                      sx={{
                        paddingTop: "10px",
                        display: "flex",
                        margin: "20px",
                      }}
                    >
                      <Button
                        onClick={handleClose}
                        color="error"
                        sx={{ marginRight: "10px" }}
                        variant="contained"
                      >
                        Cancel
                      </Button>
                      <Button type="submit" color="success" variant="contained">
                        Update
                      </Button>
                    </Typography>
                  </DialogActions>
                </form>
              </DialogContent>
            </Dialog>
          </div>
          {user ? (
            <Box
              sx={{
                paddingLeft: "10px",
                color: "rgb(5,5,5)",
                display: "block",
                fontFamily:
                  "system-ui, -apple-system,system-ui,SFNSText-Regular, sans-serif",
                fontSize: "15px",
                fontWeight: "400px",
                height: "39.9688px",
              }}
            >
              <div>
                <IconButton
                  sx={{ "&:hover": { backgroundColor: "transparent" } }}
                >
                  <BadgeIcon></BadgeIcon>
                  <span
                    style={{
                      color: "rgb(5,5,5)",
                      fontSize: "16px",
                      padding: "10px 10px 5px",
                    }}
                  >
                    {user.name}
                  </span>
                </IconButton>
                <br></br>
                <IconButton
                  sx={{ "&:hover": { backgroundColor: "transparent" } }}
                >
                  <EmailIcon></EmailIcon>{" "}
                  <a
                    href="mailto:name@email.com"
                    style={{ fontSize: "16px", padding: "10px 10px 5px" }}
                  >
                    {user.email}
                  </a>
                </IconButton>
                <br></br>
                {user.address ? (
                  <IconButton
                    sx={{ "&:hover": { backgroundColor: "transparent" } }}
                  >
                    <AddLocationAltIcon></AddLocationAltIcon>
                    <span
                      style={{
                        color: "rgb(5,5,5)",
                        fontSize: "16px",
                        padding: "10px 6px 5px",
                      }}
                    >
                      {user.address.street}, {user.address.suite},{" "}
                      {user.address.city},{user.address.zipcode}
                    </span>
                  </IconButton>
                ) : (
                  ""
                )}
                <br></br>
                <IconButton
                  sx={{ "&:hover": { backgroundColor: "transparent" } }}
                >
                  <AddIcCallIcon />
                  <span
                    style={{
                      color: "rgb(5,5,5)",
                      fontSize: "16px",
                      padding: "10px 10px 5px",
                    }}
                  >
                    {user.phone}
                  </span>
                </IconButton>
                <br></br>
                {user.company ? (
                  <>
                    {" "}
                    <IconButton
                      sx={{ "&:hover": { backgroundColor: "transparent" } }}
                    >
                      <CloudSyncIcon />
                      <span
                        style={{
                          color: "rgb(5,5,5)",
                          fontSize: "16px",
                          padding: "10px 10px 5px",
                        }}
                      >
                        {user.website}
                      </span>
                    </IconButton>
                    <br></br>
                    <IconButton
                      sx={{ "&:hover": { backgroundColor: "transparent" } }}
                    >
                      <FactoryIcon />
                      <span
                        style={{
                          color: "rgb(5,5,5)",
                          fontSize: "16px",
                          padding: "10px 10px 5px",
                        }}
                      >
                        {user.company.name}
                      </span>
                    </IconButton>
                    <br></br>
                    <IconButton
                      sx={{ "&:hover": { backgroundColor: "transparent" } }}
                    >
                      <BadgeIcon></BadgeIcon>
                      <span
                        style={{
                          color: "rgb(5,5,5)",
                          fontSize: "16px",
                          padding: "10px 10px 5px",
                        }}
                      >
                        {user.company.catchPhrase}
                      </span>
                    </IconButton>
                    <br></br>
                    <IconButton
                      sx={{ "&:hover": { backgroundColor: "transparent" } }}
                    >
                      <AddBusinessIcon />
                      <span
                        style={{
                          color: "rgb(5,5,5)",
                          fontSize: "16px",
                          padding: "10px 10px 5px",
                        }}
                      >
                        {user.company.bs}
                      </span>
                    </IconButton>
                    <br></br>
                  </>
                ) : (
                  ""
                )}
              </div>
            </Box>
          ) : (
            ""
          )}
        </Paper>
      </Box>
    </div>
  );
}

export default UserIntro;
