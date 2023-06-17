
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@mui/material";


export default function DialogModal({ open, handleClose, formData, name , isOpen}
   ) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
        fullScreen={fullScreen}
        PaperProps={{
          sx: {
            width: "50%",
          },
        }}
      >
        <DialogTitle id="scroll-dialog-title" sx={{ color: "black" }}>
          {name}
        </DialogTitle>
        <DialogContent dividers={isOpen}>
          {formData}

        </DialogContent>
      </Dialog>
    </>
  );
}
