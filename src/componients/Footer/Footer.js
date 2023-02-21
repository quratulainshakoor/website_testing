import React from "react";
import { makeStyles } from "@mui/styles";
// import footerAdornment from "../assets/images/Footer Adornment.svg";
import facebook from "../assets/images/facebook.svg";
import instagram from "../assets/images/instagram.svg";
import twitter from "../assets/images/twitter.svg";
import Logo from "../assets/images/logoheader.png";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
const useStyles = makeStyles((theme) => ({
  footer: {
    // backgroundColor: theme.palette.common.orange,
    backgroundColor: "#0B7289",
    width: "100%",
    zIndex: 1302,
    position: "relative",
    color: "white",
    fontFamily: " Raleway",
    fontWeight: "bold",
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

  // curveBg: {
  //   position: "relative",

  //   "&:before": {
  //     position: "absolute",
  //     content: '""',
  //     top: 0,
  //     left: 0,
  //     height: "100%",
  //     width: "100%",
  //     backgroundImage:
  //       "linear-gradient(110deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 50%, rgba(0,0,0,0) 100%)",
  //     filter: "blur(.8px)",
  //   },
  // },

  logo: {
    width: "300px",
    marginTop: "40px",
marginLeft:'20px'
  },

  icon: {
    height: "2em",
    width: " 3em",
  },
  socailContainer: {
    paddingRight: "20px",
  },
}));
const Footer = () => {
  const classes = useStyles();

  return (
    <>
      <footer className={classes.footer}>
        <Box>
          <Grid
            container
            sx={{
              display: { xs: "flex", md: "flex", sm: "flex" },
              justifyContent: { xs: "center", md: "left", sm: "center" },
              alignItem: { xs: "center", md: "left", sm: "center" },
            }}
          >
            {/* <Grid
            item
            xs={3}
            sx={{
              padding: 20,
              display:{xs:'none' ,md:'flex'}
            }}
            className={classes.curveBg}
          >
           
          </Grid> */}

            <Grid item xs={12}>
              <img alt="Logo" src={Logo} className={classes.logo} />
            </Grid>
            <Grid
              lg={12}
              item
              container
              spacing={2}
              sx={{
                display: { xs: "flex", md: "flex", sm: "flex" },
                margin: "20px 40px",
                "& p": {
                  textAlign: { xs: "center", md: "left" },
                },
              }}
            >
              <Grid item lg={2} xs={12}>
                <p>Home</p>
              </Grid>
              <Grid item lg={2} xs={12}>
                <p>Portfolio</p>
                <p>Designs</p>
                <p>Projects</p>
              </Grid>
              <Grid item lg={2} xs={12}>
                <p>Services</p>
                <p>App Development</p>
                <p>Website Development</p>
                <p>Anroid Development</p>
              </Grid>
              <Grid item lg={2} xs={12}>
                <p>About Us</p>
                <p>Vision</p>
                <p>Mision</p>
              </Grid>
              <Grid item lg={2} xs={12}>
                <p>Contact Us</p>
              </Grid>
              <Grid item lg={2} xs={12}>
                <p>Faqs</p>
              </Grid>
            </Grid>

            <Grid
              lg={12}
              container
              sx={{
                display: { xs: "flex", md: "flex", sm: "flex" },
                justifyContent: { xs: "center", md: "right", sm: "center" },
                alignItem: { xs: "center", sm: "center", md: "right" },
                marginBottom: "20px",
              }}
              // justifyContent={"right"}
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

          <Grid item sx={{ textAlign: "center", color: "white" }}>
            © 2020 Copyright:
            <a
              href="https://google.com/"
              style={{ color: "#fff", marginLeft: "10px" }}
            >
              www.houseparty.com
            </a>
          </Grid>
        </Box>
      </footer>
    </>
  );
};

export default Footer;
