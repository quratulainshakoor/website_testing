import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const ProductDetail = ({ Aboutdata, index }) => {
  let name = Aboutdata?.name;
  let discription = Aboutdata?.description;
  let image = Aboutdata?.image;
  return (
    <>
      <Grid item>
        <Grid
          container
          sx={{ flexDirection: index % 2 === 0 ? "row-reverse" : "row" }}
        >
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
                marginLeft: "40px",
                marginTop: "100px",
              }}
            >
              {name}
            </Typography>

            <p
              style={{
                color: " grey",
                fontFamily: "Raleway",
                margin: "20px 40px",
                fontSize: "25px",
                // textAlign: "center",
              }}
            >
              {discription}
            </p>
          </Grid>
          <Grid item xs sx={{ textAlign: "center" }} 
          
          >
          <div 
                data-aos="fade-left"
                data-aos-offset="50"
                data-aos-delay="100"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false"
                data-aos-anchor-placement="top-center"
              >
               
            <img
              src={image}
              alt="about"
              style={{
                border: "5px solid #0B7289",
                borderRadius: "50%",
                height: "400px",
                width: "400px",
              }}
            />
              </div>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default ProductDetail;
