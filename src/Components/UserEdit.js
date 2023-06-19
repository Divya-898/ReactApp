import {
  Box,
  Button,
  DialogActions,
  Divider,
  InputLabel,
  LinearProgress,
  TextField,
  Typography,
} from "@mui/material";
import React, { useRef, useState } from "react";
import { updateUser } from "../mainRedux/features/UserSlice";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function UserEdit({ user, handleClose }) {
  const dispatch = useDispatch();
  const { loading,error } = useSelector((state) => state.userIntro);
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
  const [scroll, setScroll] = React.useState("paper");
  const [values, setValue] = useState(user);
  const [progress, setProgress] = useState(0);
  const [buffer, setBuffer] = useState(10);
  const [disabled, setDisabled] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
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
        dispatch(updateUser(payload));
       setDisabled(true)
    } 
  };
  function handleChange(e) {
    setValue({ ...values, [e.target.name]: e.target.value });
  }

  return (
    <div>
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
                width: "650px",
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
                {error === "Succesfully Updated" ? (
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
    </div>
  );
}

export default UserEdit;
