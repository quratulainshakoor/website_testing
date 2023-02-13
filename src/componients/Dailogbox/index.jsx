import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const UIDailog = ({ open, close, data}) => {
  return (
    <Dialog open={open} onClose={close}>
      <DialogTitle id="responsive-dialog-title">
        {data?.name}
      </DialogTitle>
      <DialogContent>
        <DialogContentText>{data?.description}</DialogContentText>
      </DialogContent>
      <DialogContent>
        <DialogContentText>{data?.icon}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={close}>Cancel</Button>
      </DialogActions>
    </Dialog>
  );
};

export default UIDailog;
