import React, { useState } from 'react';
import './landingPage.css';
import { Link } from 'react-router-dom';
import { Navbar } from '../../components';
import ai from '../../assets/gif2.gif';
import Sidebar from './Pages/scenes/global/Sidebar'; // Import the Sidebar component
import Topbar from './Pages/scenes/global/Topbar';
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./Pages/theme";
import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";

const LandingPage = () => {
    const [theme, colorMode] = useMode();
    const [isSidebar, setIsSidebar] = useState(true);
    
  
  return (
    <ColorModeContext.Provider value={colorMode}>
    <ThemeProvider theme={theme}>
    <CssBaseline />
    <Sidebar/>
            <Topbar  />
    <div >
       <div className="blog__gpt3-heading">
        <h1 className="gradient__text"  >Choose your model, Start Using!</h1>
      </div>
      <input type="text" placeholder="Search For Model" />
      <div className="gpt3__header-image" style={{ height: '500px' }}>
      <img src={ai} />
    </div>
   
    </div>
    </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default LandingPage;
