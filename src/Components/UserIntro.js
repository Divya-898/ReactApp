import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import BadgeIcon from "@mui/icons-material/Badge";
import {
  IconButton,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";
import CloudSyncIcon from "@mui/icons-material/CloudSync";
import AddBusinessIcon from "@mui/icons-material/AddBusiness";
import FactoryIcon from "@mui/icons-material/Factory";
import ModeEditIcon from "@mui/icons-material/ModeEdit";

import {
  Button
} from "@mui/material";
import { Link, useNavigate} from "react-router-dom";
import UserEdit from "./UserEdit";
import DialogModal from "./SucDialog";
import { useState } from "react";
function UserIntro({ user }) {
  const navigate = useNavigate()
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
    navigate(-1)
  };
  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
  };
  
  const temp =(<UserEdit user={user} handleClose={handleClose}/>)
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
            <Link to={`edit`}>
            <Button
              onClick={handleClickOpen("paper")}
              sx={{
                "&:hover": {
                  backgroundColor: "#FFF",
                },
              }}
            >
              <ModeEditIcon sx={{ marginTop:"30px"}}/>
            </Button>
            </Link>
          </div>
          <DialogModal open={open}  handleClose={handleClose} name="User Update" temp={temp}/>
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
