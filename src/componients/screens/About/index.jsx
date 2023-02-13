import React from "react";
import About1 from "../../assets/images/about1.jpg";
import About2 from "../../assets/images/about2.jpg";
import About3 from "../../assets/images/about3.jpg";
import About4 from "../../assets/images/about4.jpg";

import Grid from "@mui/material/Grid";

import Typography from "@mui/material/Typography";

const About = () => {
  return (
    <>
      <Typography variant="h2" sx={{ textAlign: "center" , paddingBottom : "40px"}}>
        About Us
      </Typography>

      <Grid container direction="column">
        <Grid item>
          <Grid container direction="row">
            <Grid item sm>
              <Typography
                variant="h3"
                component="div"
                sx={{
                  color: " #D61355",
                  fontFamily: "Raleway",
                  fontSize: "40px",
                  fontWeight: "bold",
                  textAlign: "start",
                   marginLeft : "40px",
                   marginTop: "100px"
                  
                }}
              >
                     Mixture Coffee
               
              </Typography>

              <p
                style={{
                  color: " grey",
                  fontFamily: "Raleway",
                   margin: '20px 40px',
                   fontSize: "25px",
                  // textAlign: "center",
                
                }}
              >
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Voluptate possimus iure dignissimos. Pariatur porro magnam
                earum, voluptas cumque qui consequuntur? Quisquam dolore nostrum
                magnam rem a ab cumque neque voluptatem?
              </p>
             
            </Grid>
            <Grid item xs sx={{ textAlign: "center" }}>
              <img src={About1} alt="about" 
                  style={{
                    border: "5px solid #0B7289",
                    borderRadius: "50%",
                    height: "450px",
                    width : "450px"
                  }}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>




      <Grid container direction="column">
        <Grid item>
          
          <Grid container direction="row">
          <Grid item xs sx={{ textAlign: "center"  }}>
              <img src={About3} alt="about"   
              style={{
                border: "5px solid #0B7289",
                borderRadius: "50%",
                height: "450px",
                width : "450px"
              }}
               />
            </Grid>
            <Grid item sm>
              <Typography
                variant="h3"
                component="div"
                sx={{
                  color: " #D61355",
                  fontFamily: "Raleway",
                  fontSize: "40px",
                  fontWeight: "bold",
                  textAlign: "start",
                   marginLeft : "40px",
                   marginTop: "100px"
                  
                }}
              >
        Healthy Foods
              </Typography>

              <p
                style={{
                  color: " grey",
                  fontFamily: "Raleway",
                   margin: '20px 40px',
                   fontSize: "25px",
                  // textAlign: "center",
                
                }}
              >
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Voluptate possimus iure dignissimos. Pariatur porro magnam
                earum, voluptas cumque qui consequuntur? Quisquam dolore nostrum
                magnam rem a ab cumque neque voluptatem?
              </p>
             
            </Grid>
         
          </Grid>
        </Grid>
      </Grid>
      
      <Grid container direction="column">
        <Grid item>
          <Grid container direction="row">
            <Grid item sm>
              <Typography
                variant="h3"
                component="div"
                sx={{
                  color: " #D61355",
                  fontFamily: "Raleway",
                  fontSize: "40px",
                  fontWeight: "bold",
                  textAlign: "start",
                   marginLeft : "40px",
                   marginTop: "100px"
                  
                }}
              >
                    Diet Breakfast 
               
              </Typography>

              <p
                style={{
                  color: " grey",
                  fontFamily: "Raleway",
                   margin: '20px 40px',
                   fontSize: "25px",
                  // textAlign: "center",
                
                }}
              >
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Voluptate possimus iure dignissimos. Pariatur porro magnam
                earum, voluptas cumque qui consequuntur? Quisquam dolore nostrum
                magnam rem a ab cumque neque voluptatem?
              </p>
             
            </Grid>
            <Grid item xs sx={{ textAlign: "center" }}>
              <img src={About4} alt="about" 
                  style={{
                    border: "5px solid #0B7289",
                    borderRadius: "50%",
                    height: "450px",
                    width : "450px"
                  }}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>




      <Grid container direction="column">
        <Grid item>
          
          <Grid container direction="row">
          <Grid item xs sx={{ textAlign: "center"  }}>
              <img src={About2} alt="about"   
              style={{
                border: "5px solid #0B7289",
                borderRadius: "50%",
                height: "450px",
                width : "450px"
              }}
               />
            </Grid>
            <Grid item sm>
              <Typography
                variant="h3"
                component="div"
                sx={{
                  color: " #D61355",
                  fontFamily: "Raleway",
                  fontSize: "40px",
                  fontWeight: "bold",
                  textAlign: "start",
                   marginLeft : "40px",
                   marginTop: "100px"
                  
                }}
              >
            Breakfast Cafe 
              </Typography>

              <p
                style={{
                  color: " grey",
                  fontFamily: "Raleway",
                   margin: '20px 40px',
                   fontSize: "25px",
                  // textAlign: "center",
                
                }}
              >
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Voluptate possimus iure dignissimos. Pariatur porro magnam
                earum, voluptas cumque qui consequuntur? Quisquam dolore nostrum
                magnam rem a ab cumque neque voluptatem?
              </p>
             
            </Grid>
         
          </Grid>
        </Grid>
      </Grid>



      <br/>
    </>
  );
};

export default About;
