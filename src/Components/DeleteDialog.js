import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Divider, LinearProgress, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useSelector } from 'react-redux';

function DeleteDialog({handleDeleteClose, handleDeleteOpen,loading, error,handleDelete,deleteData,title,content,modalKey}) {
      const [progress] = useState(0);
  const [buffer] = useState(10);
  return (
    <div>
          <Dialog
            open={handleDeleteOpen}
            onClose={handleDeleteClose}
            PaperProps={{
              sx: {
                width: "30%",
                maxHeight: 300,
              },
            }}
          >
            <DialogTitle>{title}</DialogTitle>
            <Divider />
            <DialogContent>
              <Box component="form" sx={{ display: "flex", flexWrap: "wrap" }}>
                <Typography> {content} </Typography>
              </Box>
            </DialogContent>
            <Typography>
              <Divider />
            </Typography>
            <DialogActions>
              <Box sx={{ width: "80%", margin: "-30px 0px 0px 70px" }}>
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
                  style={{ position: "relative", width: "100px" }}
                >
                  {error === "Successfully Deleted" ? (
                    <p style={{ color: "green", width: "200px" }}>{error}</p>
                  ) : (
                    <p style={{ color: "red" }}>{error}</p>
                  )}
                </div>
              </Box>

              <Typography sx={{ display: "flex", marginTop: "30px" }}>
                <Button
                  onClick={handleDeleteClose}
                  variant="contained"
                  color="error"
                  sx={{ marginRight: "10px" }}
                >
                  Cancel
                </Button>
                <div key={modalKey}>
                <Button
                  variant="contained"
                  onClick={(e) => handleDelete(deleteData.id)}
                  color="success"
                >
                  Delete
                </Button>
                </div>
              </Typography>
            </DialogActions>
          </Dialog>
        </div>
  )
}

export default DeleteDialog
