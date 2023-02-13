import React from "react";
import Typography from "@mui/material/Typography";
import Image from "../../assets/images/error.png";
import Box from "@mui/material/Box";

const Error = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: { xs: "column", md: "row" },
          minHeight: " 100vh",
        }}
      >
        <img
          src={Image}
          alt="error"
          style={{ height: "300px", width: "300px", objectFit: "contain" }}
        />
        <Box>
          <Typography
            variant="h2"
            sx={{
              fontFamily: "raleway",
              fontWeight: "bold",
              fontSize: { xs: "60px", md: "100px"  },
            }}
          >
            404 Error
          </Typography>
          <p
            style={{
              color: "#FFBA60",
              fontFamily: "raleway",
              fontWeight: "bold",
              fontSize: "50px",
            }}
          >
            Page not found
          </p>
        </Box>
      </Box>
    </>
  );
};

export default Error;
