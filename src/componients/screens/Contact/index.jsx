import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import background from "../../assets/images/background.jpg";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import SendIcon from "@mui/icons-material/Send";
import Box from "@mui/material/Box";
import ButtonArrow from "../ButtonArrow";
// import Input from "../../InputField";
// import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const useStyles = makeStyles((theme) => ({
  background: {
    backgroundImage: `url(${background})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backGroundRepeat: "no-repeat",
    height: "60em",
    paddingLeft: "50px",
  },
}));

const Contact = () => {
  const classes = useStyles();
  const [name, setName] = useState("");

  const [email, setEmail] = useState("");
  const [emailHelper, setEmailHelper] = useState("");

  const [phone, setPhone] = useState("");
  const [phoneHelper, setPhoneHelper] = useState("");

  const [message, setMessage] = useState("");

  const handlerChange = (event) => {
    let valid;

    switch (event.target.id) {
      case "email":
        setEmail(event.target.value);
        valid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
          event.target.value
        );

        if (!valid) {
          setEmailHelper("Invalid email");
        } else {
          setEmailHelper("");
        }
        break;
      case "phone":
        setPhone(event.target.value);
        valid = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(
          event.target.value
        );

        if (!valid) {
          setPhoneHelper("Invalid phone");
        } else {
          setPhoneHelper("");
        }
        break;
      default:
        break;
    }
  };


 
  const MySwal = withReactContent(Swal);

  function showMessage() {
  
    
   MySwal.fire({
  position: 'center',
  icon: 'success',
  title: 'Contact Form  Submit',
  showConfirmButton: false,
  timer: 1500
})
  }
 

  const onSubmit = (e) => {
    e.preventDefault()
    console.log(name,email,phone,message);
  };
  return (
    <>
      <Grid container direction="row" style={{ marginLeft: "30px" }}>
        <Grid item container direction="column" lg={3}>
          <Box>
          <Grid item>
            <Typography variant="h2">Contact Us</Typography>
            </Grid>
            <Grid item>
            <Typography variant="body1" sx={{fontSize:'20px', color: "#D61355"}}>We are Waiting </Typography>

            </Grid>
    
          <Grid item container style={{ color: "#D61355", marginTop: "20px" }}>
            <Grid item>
              <PhoneIcon />
            </Grid>

            <Grid item style={{ color: "black" }}>
              <Typography variant="body1">
                <a
                  href="tel:5555555555"
                  style={{ textDecoration: "none", color: "inherit", marginLeft:"20px" }}
                >
                  (555) 555-5555
                </a>
              </Typography>
            </Grid>
          </Grid>

          <Grid item container style={{ color: "#D61355" }}>
            <Grid item>
              <EmailIcon />
            </Grid>

            <Grid item sx={{ color: "black" }}>
              <Typography variant="body1">
                <a
                  href="mailto:houseparty@gmail.com"
                  style={{ textDecoration: "none", color: "inherit",  marginLeft:"20px"  }}
                >
                  zachary@gmail.com
                </a>
              </Typography>
            </Grid>
          </Grid>

          <form onSubmit={onSubmit}>
            <Grid item container >
              <Grid item sx={{ marginBottom: "0.5em", marginTop: "1em" }}>
                <TextField
                  label="Name"
                  id="name"
                  fullWidth
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                />
              </Grid>

              <Grid item sx={{ marginBottom: "0.5em", marginTop: "1em" }}>
                <TextField
                  label="Email"
                  error={emailHelper.length !== 0}
                  helperText={emailHelper}
                  id="email"
                  fullWidth
                  value={email}
                  onChange={handlerChange}
                />
              </Grid>

              <Grid item sx={{ marginBottom: "0.5em", marginTop: "1em" }}>
                <TextField
                  label="Phone"
                  helperText={phoneHelper}
                  error={phoneHelper.length !== 0}
                  id="phone"
                  fullWidth
                  value={phone}
                  onChange={handlerChange}
                />
              </Grid>

              <Grid item sx={{ marginBottom: "0.5em", marginTop: "1em" }}>
                <TextField
                  InputProps={{ disableUnderline: true }}
                  value={message}
                  label="Enter a message"
                  className={classes.message}
                  multiline
                  fullWidth
                  rows={8}
                  id="message"
                  onChange={(event) => setMessage(event.target.value)}
                />
              </Grid>
            </Grid>

            <Button
              variant="contained"
              type='submit'
              onClick={showMessage}
              style={{
                backgroundColor: " #D61355",
                fontWeight: "bold",
                borderRadius: "50px",
               padding: '15px, 30px'
              }}
            >
              Send Message
              <SendIcon />
            </Button>
          </form>
          </Box>
        
        </Grid>

        <Grid item container className={classes.background} lg={9}>
          <Grid item>
            <Grid container direction="column">
              <Grid item>
                <Typography variant="h2">
                  Simple Software.
                  <br />
                  Revolutionary Results.
                </Typography>
                <Typography
                  variant="subtitle2"
                  style={{ fontSize: "1.5rem", color: "white" }}
                >
                  Take advantage of the 21st Century.
                </Typography>
                <Button
                  variant="contained"
                  style={{
                    backgroundColor: "#D61355",
                    marginTop: "10px",
                    marginLeft: "10px",
                  }}
                >
                  Free Estimated
                </Button>
                <Button
                  variant="outlined"
                  style={{
                    border: " 2px solid #FFBA60",
                    marginLeft: "6px",
                    color: "white",
                    marginTop: "10px",

                    fontWeight: "bold",
                  }}
                >
                  Learn More
                  <ButtonArrow width={"15"} height={"15"} fill="#D61355" />
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Contact;
