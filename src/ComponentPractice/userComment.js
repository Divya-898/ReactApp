import { Avatar, Grid } from "@mui/material";
import React, { useState } from "react";

function UserComment({ postId, user }) {
  const [formData, setFormData] = useState({
    body: "",
  });

  const handleSubmit = (e, postId) => {
    e.preventDefault();
    console.log("postId", postId);
    fetch(`http://localhost:3500/comments?postId=${postId}`, {
      method: "POST",
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => setFormData(data));
  };

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }
  if (formData) {
    console.log(formData);
  }

  var nameparts = [];
  const x = user.name;
  // var nameparts = [];
  nameparts = x.split(" ");
  var initials =
    nameparts[0].charAt(0).toUpperCase() + nameparts[1].charAt(0).toUpperCase();

  return (
    <div>
      <div class="my-post">
        <div class="post-top" style={{ PaddingTop: "5px" }}>
          <Grid container wrap="nowrap">
            <Grid item>
              <Avatar sx={{ bgcolor: "red" }}>{initials}</Avatar>
            </Grid>
            <div>
              <Grid justifyContent="left" item xs zeroMinWidth>
                <form
                  className="login-form"
                  onSubmit={(e) => handleSubmit(e, postId)}
                >
                  <input
                    type="text"
                    placeholder="Write a comment...."
                    value={formData.body}
                    name="body"
                    onChange={(e) => handleChange(e)}
                  />
                  <button
                    className="login-btn"
                    type="submit"
                    style={{ textAlign: "left" }}
                  >
                    Sign Up
                  </button>
                </form>
              </Grid>
            </div>
          </Grid>
        </div>
      </div>
    </div>
  );
}

export default UserComment;
