import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const UIDailog = ({ open, close, data }) => {
  let Icon = data?.icon;
  let Name = data?.name;
  let Description = data?.description;
  return (
    <Dialog open={open} onClose={close}>
      <DialogActions sx={{
        display: "flex",
        justifyContent: "center"
      }}>
        <Icon
          style={{
            borderRadius: "50%",
            backgroundColor: "#eee",
            fontSize: "60px",
            padding: "20px",
            color: " #0B7289",
            
          }}
        />
      </DialogActions>
      <DialogTitle
        id="responsive-dialog-title"
        sx={{
          color: " #D61355",
          fontFamily: "Raleway",
          fontSize: "30px",
          fontWeight: "bold",
        }}
      >
        {Name}
      </DialogTitle>
      <DialogContent>
        <DialogContentText
          sx={{
            fontFamily: "Raleway",
            fontSize: "20px",
            fontWeight: 'medium',
          }}
        >
          {Description}
        </DialogContentText>
      </DialogContent>

      <DialogActions 
      sx={{
        display: "flex",
        justifyContent: "center"
      }}
      >
        <Button
          variant="contained"
          style={{
          
            padding: "10px 40px",
            fontSize: "15px",
            backgroundColor: "#D61355",
            color: "eee",
          }}
          onClick={close}
        >
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default UIDailog;
