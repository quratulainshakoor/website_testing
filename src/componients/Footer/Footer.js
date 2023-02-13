import React from "react";
import { makeStyles } from "@mui/styles";
// import footerAdornment from "../assets/images/Footer Adornment.svg";
import facebook from "../assets/images/facebook.svg";
import instagram from "../assets/images/instagram.svg";
import twitter from "../assets/images/twitter.svg";
import Logo from "../assets/images/logoheader.png";
import Grid from "@mui/material/Grid";

const useStyles = makeStyles((theme) => ({
  footer: {
    // backgroundColor: theme.palette.common.orange,
    backgroundColor: "#FFBA60",
    width: "100%",
    zIndex: 1302,
    position: "relative",
    color: "white",
    fontFamily :' Raleway',
    fontWeight: "bold"
  },

  // adornment: {
  //   width: "35em",
  //   verticalAlign: "bottom",
  //   [theme.breakpoints.down("md")]: {
  //     width: "21em",
  //   },
  //   [theme.breakpoints.down("xs")]: {
  //     width: "15em",
  //   },
  // },

  curveBg: {
    position: "relative",

    "&:before": {
      position: "absolute",
      content: '""',
      top: 0,
      left: 0,
      height: "100%",
      width: "100%",
      backgroundImage:
        "linear-gradient(110deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 50%, rgba(0,0,0,0) 100%)",
      filter: "blur(.8px)",
    },
  },

  logo: {
    width: "200px",
    marginTop: "40px",
    marginBottom: "20px",
  },


  icon: {
    height: "2em",
    width: " 2em",
    
  },
  socailContainer:{
    paddingRight:"20px"
  },



}));
const Footer = () => {
  const classes = useStyles();

  return (
    <>
      <footer className={classes.footer}>
        <Grid container>
          <Grid
            item
            xs={3}
            sx={{
              padding: 20,
            }}
            className={classes.curveBg}
          >
            Home
          </Grid>

          <Grid item xs={9}>
            <Grid item>
              <img alt="Logo" src={Logo} className={classes.logo} />
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs>
                <p>Home</p>
              </Grid>
              <Grid item xs>
                <p>Portfolio</p>
                <p>Designs</p>
                <p>Projects</p>
              </Grid>
              <Grid item xs>
                <p>Services</p>
                <p>App Development</p>
                <p>Website Development</p>
                <p>Anroid Development</p>
              </Grid>
              <Grid item xs>
                <p>About Us</p>
                <p>Vision</p>
                <p>Mision</p>
              </Grid>
              <Grid item xs>
                <p>Contact Us</p>
              </Grid>
            </Grid>

            <Grid
              container
              justifyContent={"right"}
              spacing={2}
              className={classes.socailContainer}
            >
              <Grid
                item
                component={"a"}
                href="https://www.facebook.com/"
                rel="noopener noreferrer"
                target={"_blank"}
              >
                <img
                  alt="facebook logo"
                  src={facebook}
                  className={classes.icon}
                />
              </Grid>
              <Grid
                item
                component={"a"}
                href="https://www.instagram.com/"
                rel="noopener noreferrer"
                target={"_blank"}
              >
                <img
                  alt="instagram logo"
                  src={instagram}
                  className={classes.icon}
                />
              </Grid>
              <Grid
                item
                component={"a"}
                href="https://twitter.com/"
                rel="noopener noreferrer"
                target={"_blank"}
              >
                <img
                  alt="twiiter logo"
                  src={twitter}
                  className={classes.icon}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        
      </footer>
    </>
  );
};

export default Footer;
