import React, {useState, useEffect} from "react";
import { ThemeProvider } from "@mui/material/styles";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import theme from "./theme";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./componients/screens/Home/index";
import About from "./componients/screens/About/index";
import Services from "./componients/screens/Services/index";
import Contact from "./componients/screens/Contact/index";
import Error from "./componients/screens/Error/index";
import Portfolio from "./componients/screens/Portfolio/index";
import Apps from "./componients/screens/Services/menu/apps";
import Website from "./componients/screens/Services/menu/web";
import Anroid from "./componients/screens/Services/menu/anroid";
import AOS from "aos";
import Layout from "./layout";
import Faqs from "./componients/screens/Faqs/index";
// import { Triangle } from 'react-loader-spinner';
// import { Login, Signup } from "./screens";
import Box from "@mui/material/Box";



AOS.init();
function App() {
  const [loading, setLoading] = useState(false);


  useEffect (() => {
    setLoading(true);
    setTimeout(()=> {
      setLoading(false);
    }, 1000);
  }, [])
  return (
    <>


  {
    loading ? (

      <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
     
        minHeight: " 100vh",
      
      }}
    >
       <ClimbingBoxLoader   
   
    loading={loading}
    color={"#FFBA60"}
    size={30}
  />
    </Box>
     
    )
    : 
    (

      <ThemeProvider theme={theme}>

        <BrowserRouter>
        
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="portfolio" element={<Portfolio />} />
              <Route path="service" element={<Services />} />
              <Route path="contact" element={<Contact />} />
              <Route path="faqs" element={<Faqs />} />
              <Route path="service/web" element={<Website />} />
              <Route path="service/anroid" element={<Anroid />} />
              <Route path="service/apps" element={<Apps />} />
            </Route>
      
                  <Route path="*" element={<Error />} />
          </Routes>
        </BrowserRouter>
  
    
      </ThemeProvider>
    )

       }  

      

    </>
  );
}

export default App;
