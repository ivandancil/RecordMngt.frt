import { Box, Typography, useMediaQuery } from "@mui/material";
import Image from "../assets/odiongan.jpg"
import Navbar from "../components/Navbar";
import Logo from "../assets/region8Logo.png"


const LandingPage = () => {
  const isSmallScreen = useMediaQuery("(max-width:960px)");
  const NAVBAR_HEIGHT = 0;

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
        bgcolor: "black",
      }}
    >
   
    <Navbar />

      {/* Full Page Watermark */}
      <Box
        component="img"
         src={ Image }
          alt="DepEd Logo Background"
          sx={{
          position: "absolute",
          top: `${NAVBAR_HEIGHT}px`,
          left: 0,
          width: "100%",
          height: `calc(100vh - ${NAVBAR_HEIGHT}px)`,
          objectFit: "cover",
          opacity: 0.2,
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      {/* Centered & Enlarged Logo */}
      <Box
        component="img"
        src={ Logo }
        alt="DepEd Logo"
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: isSmallScreen ? "200px" : "480px",
          height:  { xs: "30%", sm: "35%", md: "50%" },
          zIndex: 1,
          opacity: 0.3,
        }}
      />

      {/* Title layered over logo */}
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
          zIndex: 2,
          maxWidth: "90%",
        }}
      >
      
    <Box sx={{ /* Your existing Box styles, if any, can go here */ }}>
      <Typography 
        variant="h3"
        component="p" 
          sx={{ 
            fontStyle: 'italic', 
            color: 'text.primary', 
            textShadow: "3px 2px 6px rgba(0, 0, 0, 0.8), 0px 0px 12px rgba(0, 0, 0, 0.2)", 
            mb: 0.5,
              fontSize: {
              xs: ".9rem", 
              sm: "1.4rem",
              md: "2.4rem",  
              
            },  
               whiteSpace: 'nowrap', // Keeps it on one line 
          }}
        >
        Comprehensive Student & Teacher
      </Typography>
      <Typography  
        variant="h3"
        component="p" 
          sx={{ 
            fontStyle: 'italic', 
            color: 'text.primary', 
            textShadow: "3px 2px 6px rgba(0, 0, 0, 0.8), 0px 0px 12px rgba(0, 0, 0, 0.2)", 
            mb: 0.5,
              fontSize: {
              xs: ".9rem", 
              sm: "1.4rem",
              md: "2.5rem",  
            
            },   
          }}
        >
        Records Management System
      </Typography>
      <Typography 
          variant="body1" 
           component="p" 
          sx={{ 
             textShadow: "3px 2px 6px rgba(0, 0, 0, 0.8), 0px 0px 12px rgba(0, 0, 0, 0.2)", 
            color: 'text.secondary', 
            mb: 0.5,
              fontSize: {
              xs: ".9rem", 
              sm: "1.4rem",
              md: "2rem",  
            
            },   
          }}
        >
        ( Odiongan Elementary School )
      </Typography>
    </Box>
      
      </Box>
    </Box>
  );
};

export default LandingPage;
