import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";

import Grid from "@mui/material/Grid";
import ServicesCard from "../../Card";
import { data } from "../../Card/mockData";
import UIDailog from "../../Dailogbox";

const Services = () => {
  const [open, setOpen] = useState(false);
  const [filterData, setFilterData] = useState("");

  const handleOpen = (id) => {
    setOpen(true);
    console.log(id);

    let filterData = data.filter((val) => val.id === id);
    setFilterData(filterData);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Typography variant="h2" style={{ textAlign: "center" }}>
        Our Services
      </Typography>
      <p
        style={{
          paddingTop: "20px",
          color: "#FFBA60",
          fontFamily: "raleway",
          fontWeight: "bold",
          fontSize: "20px",
          textAlign: "center",
          paddingBottom: "30px",
        }}
      >
        In publishing and graphic design,visual form of a <br /> document or a
        typeface without relying on meaningful content.
      </p>

      <Container maxWidth="xl" sx={{ mb: "50px" }}>
        <Grid container spacing={2}>
          {data.map((val, i) => (
            <ServicesCard key={i} data={val} handleClick={handleOpen} />
          ))}
        </Grid>
      </Container>

      <UIDailog
        open={open}
        close={handleClose}
        data={filterData.length === 0 ? [] : filterData[0]}
      />
    </>
  );
};

export default Services;
