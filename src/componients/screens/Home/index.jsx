import React from "react";
import HeroImage from "../../assets/images/hero animation.png";
//  import { makeStyles } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import ButtonArrow from "../ButtonArrow";
import Typography from "@mui/material/Typography";

//  const useStyles = makeStyles(theme => ({}));
const Home = () => {
  // const classes = useStyles();

  return (
    <>
      <Grid container direction="column">
        <Grid item>
          <Grid container direction="row">
            <Grid item sm>
              <Typography variant="h2" align="center">
              
                Bring West Coast Technology <br /> to the Midwest
              </Typography>
              <Grid container justifyContent="center">
                <Grid item>
                  <Button
                    variant="contained"
                    style={{
                      backgroundColor: "#D61355",
                      marginTop: "10px"
                    }}
                  >
                    Get Started
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined"
                    style={{
                    border: " 2px solid #FFBA60",
                    marginLeft: "6px",
                    color : "black",
                    marginTop: "10px",
                    borderRadius: "50px",
                    fontWeight: "bold"
                    }}
                  >
                    Learn More
                    <ButtonArrow width={"15"} height={"15"} fill="#D61355" />
                  </Button>
                </Grid>

              </Grid>
            </Grid>
            <Grid item xs sx={{ textAlign : "center"}}>
              <div
                data-aos="fade-left"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false"
                data-aos-anchor-placement="top-center"
              >
                <img
                  src={HeroImage}
                  alt="herowall"
       
                  width={"300px"}
                />
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
