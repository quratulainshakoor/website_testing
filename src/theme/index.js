import { createTheme } from "@mui/material/styles";

const arcBlue = "#0B7289";
const arcOrange = "#FFBA60";

const theme = createTheme({
  palette: {
    common: {
      blue: `${arcBlue}`,
      orange: `${arcOrange}`,
    },


    primary: {
      main: `${arcBlue}`,
    },
    secondary: {
      main: `${arcOrange}`,
    },
  },
  
  typography : {
  
    h2: {
      marginTop: "200px",
      fontFamily: "Raleway",
      fontSize: "2.8rem",
      lineHeight :" 3.5rem",
      color:" #0B7289",
      fontWeight: 700,
    },

  },
  Typography: {
     tab: {
      fontFamily: "cursive",
      textTransform: "none",
      fontWeight: "bold",
      fontSize: "1rem",
      color: "black",
    },

    estimate: {
      fontFamily: "cursive",
      textTransform: "none",
      fontSize: "1rem",
    },

  },
});

export default theme;
