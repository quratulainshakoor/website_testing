import { Box } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";

const ErrorLayout = () => {
  return (
    <div>
 
      <Box sx={{ my: "150px" }}>
        <Outlet />
      </Box>
   
    </div>
  );
};

export default ErrorLayout;
