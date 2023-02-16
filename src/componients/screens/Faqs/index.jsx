import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";
const Accordion = styled((props) => (
  
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  
  },
  "&:before": {
    display: "none",
    
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "2rem" ,   color: "#eee" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: "#D61355",
  color: "eee",
  flexDirection: "row",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(2),
    display: 'flex',
    justifyContent: "center"
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(6),
  borderTop: "6px solid #eee",
}));

export default function CustomizedAccordions() {
  
  const [expanded, setExpanded] = useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <>
      <Typography variant="h2" style={{ textAlign: "center" }}>
        FAQ'S
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
        Faqs Us pages are where you showcase your history, <br />
        what is unique Faqs your work, your company's values, and who you serve.
      </p>

      <Container sx={{ marginBottom: "40px" }}>
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <Typography sx={{ color: "#eee", fontWeight: 'bold', fontSize: "25px", }}>Mixture Coffee</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ color: "#0B7289", fontWeight: 'bold', fontSize: "20px", }}>
              In some countries, such as Portugal, Spain, and India, instant
              coffee is commonly mixed with hot milk instead of boiling water.
              In other countries, such as South Korea, instant coffee commonly
              comes pre-mixed with non-dairy creamer and sugar and is called
              "coffee mix".
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
            <Typography sx={{ color: "#eee", fontWeight: 'bold', fontSize: "25px", }}>Healthy Foods</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ color: "#0B7289", fontWeight: 'bold', fontSize: "20px", }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
        >
          <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
            <Typography sx={{ color: "#eee", fontWeight: 'bold', fontSize: "25px", }}>Diet Breakfast</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ color: "#0B7289", fontWeight: 'bold', fontSize: "20px", }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel4"}
          onChange={handleChange("panel4")}
        >
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <Typography sx={{ color: "#eee", fontWeight: 'bold', fontSize: "25px", }}>Breakfast Cafe</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ color: "#0B7289", fontWeight: 'bold', fontSize: "20px", }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Container>
    </>
  );
}
