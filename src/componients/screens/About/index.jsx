import React from "react";


import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";
import Typography from "@mui/material/Typography";
import ProductDetail from "./productDetail";
import { Aboutdata } from "./mockupData";

const About = () => {

  return (
    <>
      <Typography variant="h2" sx={{ textAlign: "center" , paddingBottom : "40px"}}>
        About Us
      </Typography>



      <Container >
        <Grid container >
          {Aboutdata.map((val, i) => (
            <ProductDetail key={i} Aboutdata={val} index={i} />
          ))}
        </Grid>
      </Container>


   

      <br/>
    </>
  );
};

export default About;
