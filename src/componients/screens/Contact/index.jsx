import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import background from "../../assets/images/background.jpg";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import SendIcon from "@mui/icons-material/Send";

import ButtonArrow from "../ButtonArrow";
import Input from "../../InputField";

const useStyles = makeStyles((theme) => ({
  background: {
    backgroundImage: `url(${background})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backGroundRepeat: "no-repeat",
    height: "50em",
    paddingLeft: "50px",
  },
}));

const Contact = () => {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  return (
    <>
      <Grid container direction="row" style={{ marginLeft: "25px" , }}>
        <Grid item container direction="column" lg={3}>
          <Grid item>
            <Typography variant="h2" style={{ lineHeight: " 1" }}>
              Contact Us
            </Typography>
            <Typography variant="body1">We are Waiting </Typography>
          </Grid>
          <Grid item container style={{ color: "#D61355" }}>
            <Grid item>
              <PhoneIcon />
            </Grid>

            <Grid item style={{ color: "black" }}>
              <Typography variant="body1">(555) 555-5555</Typography>
            </Grid>
          </Grid>

          <Grid item container style={{ color: "#D61355" }}>
            <Grid item>
              <EmailIcon />
            </Grid>

            <Grid item style={{ color: "black" }}>
              <Typography variant="body1">houseparty@gmail.com</Typography>
            </Grid>
          </Grid>

          <Grid item container>
            <Grid item>
              <Input
                label="Name"
                requied
                id="name"
                value={name}
                onChange={(event) => setName(event.target.value)}
                sx={{ marginBottom: "10px" }}
              />
            </Grid>
            <Grid item>
              <Input
               requied
                label="Email"
                id="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                sx={{ marginBottom: "10px" }}
              />
            </Grid>
            <Grid item>
              <Input
               requied
                label="Phone"
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
              />
            </Grid>
            <Grid item>
              <Input
                label="Enter a Text"
                value={message}
                multiline
                rows={5}
                onChange={(event) => setMessage(event.target.value)}
              />
            </Grid>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              style={{
                backgroundColor: " #D61355",
                fontWeight: "bold",
                marginTop: "20px",
              }}
            >
              Send Message
              <SendIcon />
            </Button>
          </Grid>
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
                <Typography variant="subtitle2" style={{ fontSize: "1.5rem", color: "white" }}>
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
