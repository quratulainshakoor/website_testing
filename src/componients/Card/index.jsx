import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";

import Typography from "@mui/material/Typography";
import { CardActionArea, Grid } from "@mui/material";
import { Box } from "@mui/system";
import UIDailog from "../Dailogbox";

export default function ServicesCard({ data, handleClick }) {
  let Icon = data.icon;
  return (
    <>
      <Grid item xs={12} md={4}>
        <Card>
          <CardActionArea
            sx={{
              height: "400px",
              overFlow: "hidden",
              padding: "30px",
              "&:hover": {
                backgroundColor: "#FFBA60",
              },
            }}
          >
            <Box sx={{ textAlign: "center" }}>
              <Icon
                sx={{
                  borderRadius: "50px",
                  backgroundColor: "#eee",
                  fontSize: "50px",
                  padding: "20px",
                  color: " #0B7289",
                  marginTop: "20px",
                }}
              />
            </Box>
            <CardContent>
              <Typography
                variant="h3"
                component="div"
                sx={{
                  color: " #D61355",
                  fontFamily: "Raleway",
                  fontSize: "27px",
                  fontWeight: "bold",
                  textAlign: "center",
                  paddingTop: "10px",
                }}
              >
                {data.name}
              </Typography>
              <Typography
                variant="body2"
                color="text.primary"
                sx={{
                  fontFamily: "Raleway",
                  fontSize: "20px",
                  paddingTop: "30px",
                  textAlign: "center",
                  color: "eee",
                }}
              >
                {data.description}
              </Typography>
            </CardContent>

            <Box sx={{ textAlign: "center" }}>
              <Button
                variant="outlined"
                style={{
                  border: "2px solid #0B7289",
                  padding: "10px 20px",
                  fontSize: "15px",

                  color: "eee",
                }}
                onClick={() => handleClick(data.id)}
              >
                Click Here
              </Button>
            </Box>
          </CardActionArea>
        </Card>
      </Grid>
      <UIDailog />
    </>
  );
}
