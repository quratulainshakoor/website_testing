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
// import Box from "@mui/material/Box";
import ButtonArrow from "../ButtonArrow";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { Box, Container } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  background: {
    backgroundImage: `url(${background})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backGroundRepeat: "no-repeat",
    // height: "60em",
    width: " 100%",
    height: "60rem",
    paddingLeft: "50px",
    marginTop: "20px",
    order: " 2",
  },
}));

const Contact = () => {
  const classes = useStyles();
  const [username, setName] = useState("");

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

  const onSubmit = (e) => {
    e.preventDefault();



    if (username === "") {
      alert("please enter name");
    } else if (email === "") {
      alert("please enter email");
    } else if (phone === "") {
      alert("please enter phone number");
    } else {
      MySwal.fire({
        position: "center",
        icon: "success",
        title: "Contact Form  Submit",
        showConfirmButton: false,
        timer: 1500,
      });
      alert(username, email, phone, message);
    }
  };
  return (
    <>
      <Grid
        container
        sx={{ flexDirection: { xs: "column-reverse", md: "row" } }}
      >
        <Grid item lg={3}>
          <Grid container>
            <Grid item>
              <Container>
                <Typography variant="h2">Contact Us</Typography>
                <Typography
                  variant="body1"
                  sx={{ fontSize: "20px", color: "#D61355" }}
                >
                  We are Waiting
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    mb: "20px",
                    mt: "20px",
                  }}
                >
                  <PhoneIcon sx={{ color: "#D61355" }} />
                  <Typography variant="body1">
                    <a
                      href="tel:5555555555"
                      style={{
                        textDecoration: "none",
                        color: "inherit",
                        marginLeft: "20px",
                      }}
                    >
                      (555) 555-5555
                    </a>
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", mb: "20px" }}>
                  <EmailIcon sx={{ color: "#D61355" }} />
                  <Typography variant="body1">
                    <a
                      href="mailto:houseparty@gmail.com"
                      style={{
                        textDecoration: "none",
                        color: "inherit",
                        marginLeft: "20px",
                      }}
                    >
                      houseparty@gmail.com
                    </a>
                  </Typography>
                </Box>

                <form onSubmit={onSubmit}>
                  <TextField
                    label="Name"
                    id="username"
                    fullWidth
                    value={username}
                    onChange={(event) => setName(event.target.value)}
                    sx={{ mb: "10px" }}
                  />

                  <TextField
                    label="Email"
                    error={emailHelper.length !== 0}
                    helperText={emailHelper}
                    id="email"
                    fullWidth
                    value={email}
                    onChange={handlerChange}
                    sx={{ mb: "10px" }}
                  />

                  <TextField
                    label="Phone"
                    helperText={phoneHelper}
                    error={phoneHelper.length !== 0}
                    id="phone"
                    fullWidth
                    value={phone}
                    onChange={handlerChange}
                    sx={{ mb: "10px" }}
                  />

                  <TextField
                    InputProps={{ disableUnderline: true }}
                    value={message}
                    label="Enter a message....."
                    className={classes.message}
                    multiline
                    fullWidth
                    rows={8}
                    id="message"
                    onChange={(event) => setMessage(event.target.value)}
                    sx={{ mb: "10px" }}
                  />

                  <Button
                    variant="contained"
                    type="submit"
                    fullWidth
                    endIcon={<SendIcon />}
                    style={{
                      backgroundColor: " #D61355",
                      fontWeight: "bold",
                      borderRadius: "50px",
                      padding: "15px, 30px",
                    }}
                  >
                    Send Message
                  </Button>
                </form>
              </Container>
            </Grid>
          </Grid>
        </Grid>

        <Grid container className={classes.background} lg={9}>
          <Grid item>
            <Grid container>
              <Container>
                <Box>
                  <Typography variant="h2" sx={{ color: "#D61355" }}>
                    Simple Software.
                    <br />
                    Revolutionary Results.
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    style={{ fontSize: "1.8rem", color: "white" }}
                  >
                    Take advantage of the 21st Century.
                  </Typography>

                  <Button
                    variant="contained"
                    style={{
                      backgroundColor: "#FFBA60",
                      marginTop: "20px",

                      color: "#D61355",
                      fontWeight: "bold",
                    }}
                  >
                    Free Estimated
                  </Button>
                  <Button
                    variant="outlined"
                    endIcon={
                      <ButtonArrow width={"15"} height={"15"} fill="#D61355" />
                    }
                    style={{
                      border: " 2px solid #D61355 ",
                      marginLeft: "6px",
                      color: "white",
                      marginTop: "20px",

                      fontWeight: "bold",
                    }}
                  >
                    Learn More
                  </Button>
                </Box>
              </Container>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Contact;
