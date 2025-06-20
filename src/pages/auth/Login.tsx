import { Box, Button, TextField, Typography, useTheme } from "@mui/material"
import Navbar from "../../components/Navbar"
import Image from "../../assets/odiongan.jpg"
import { Link } from "react-router-dom";


const Login = () => {
  const theme = useTheme();
  const NAVBAR_HEIGHT = 0;
   
  return (
   <Box 
      sx={{
        width:"100%", 
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
        bgcolor: "black"
        }}
      >
        <Navbar />
    
    <Box
      component="img"
      src={ Image }
      alt="School Background"
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
    <Box
      sx={{ 
        height: "calc(100vh - 90px)", 
        display: "flex", 
        justifyContent: "center", 
        alignItems: "center", 
        position: "relative", 
        zIndex: 2 
      }}
    >
    <Box
      sx={{
        maxWidth: 400,
        width: { xs: "70%", sm: "80%", md: "90%" } ,
        paddingLeft: 3,
        paddingRight: 3,
        pt: { xs: "4%", sm: "3%", md: "2%" },
        pb: 3,
        boxShadow: 5,
        borderRadius: 3,
        bgcolor: "rgba(255, 250, 250, 0.7)",
        color: theme.palette.text.primary,
        textAlign: "center",
        backdropFilter: "blur(3px)",
        border: "1px solid rgba(255, 255, 255, 0.3)",
      }}
    >
      <Typography 
        variant="h3" 
        textAlign="center" 
        mb={2} 
        fontWeight="" 
          sx={{ 
            fontSize: { xs: "1rem", sm: "1.3rem", md: "1.7rem" },
            textTransform: "uppercase", 
            letterSpacing: 1, 
            color: "black",
            mt: "1"
          }}
        >
         Login
      </Typography>
      <Typography 
        variant="body1" 
        textAlign="center" 
        mb={1}
        sx={{
           fontSize: { xs: ".7rem", sm: ".9rem", md: "1rem" },
           color: "black" 
        }}
      >
         Please enter your credentials to log in to your account.
      </Typography>
      <TextField
        variant="outlined"
        label="Email"
        type="email"
        fullWidth
        margin="normal"
        required
        autoComplete="off"
            sx={{
              "& .MuiInputLabel-root": {
                color: "black !important",
                  fontSize: { xs: ".7rem", sm: ".8rem", md: "1rem" },
                // Adjust label position for smaller height on xs screens
                [theme.breakpoints.down('sm')]: {
                  transform: 'translate(14px, 8px) scale(1) !important', // Default position on xs
                  '&.MuiInputLabel-shrink': {
                    transform: 'translate(14px, -9px) scale(0.75) !important', // Shrunk position on xs
                  },
                },
              },
              "& .MuiOutlinedInput-root fieldset": { borderColor: "black !important", borderWidth: 1 },
              "& .MuiInputBase-input": {
                color: "black",
                fontSize: { xs: ".7rem", sm: "1rem", md: "1.1rem" },
                // Reduce padding/height only on extra-small screens
                [theme.breakpoints.down('sm')]: {
                  paddingTop: '8px', // Smaller top padding for xs
                  paddingBottom: '8px', // Smaller bottom padding for xs
                  // If you use start/end adornments, adjust their padding too
                  '&.MuiInputBase-inputAdornedStart': {
                    paddingLeft: '8px',
                  },
                  '&.MuiInputBase-inputAdornedEnd': {
                    paddingRight: '8px',
                  },
                },
                // Default padding/height for sm and up (Material-UI default)
                [theme.breakpoints.up('sm')]: {
                  paddingTop: '16.5px', // Standard Material-UI padding-top
                  paddingBottom: '16.5px', // Standard Material-UI padding-bottom
                  height: 'auto', // Ensure height is flexible
                }
              },
            }}
      />
     <TextField
        variant="outlined"
        label="Password"
        fullWidth
        required
        autoComplete="current-password"
           sx={{
            marginTop: { xs: "4px", sm: "6px", md: "9px" },
              "& .MuiInputLabel-root": {
                color: "black !important",
                  fontSize: { xs: ".7rem", sm: ".8rem", md: "1rem" },
                // Adjust label position for smaller height on xs screens
                [theme.breakpoints.down('sm')]: {
                  transform: 'translate(14px, 8px) scale(1) !important', // Default position on xs
                  '&.MuiInputLabel-shrink': {
                    transform: 'translate(14px, -9px) scale(0.75) !important', // Shrunk position on xs
                  },
                },
              },
              "& .MuiOutlinedInput-root fieldset": { borderColor: "black !important", borderWidth: 1 },
              "& .MuiInputBase-input": {
                color: "black",
                  fontSize: { xs: ".7rem", sm: "1rem", md: "1.1rem" },
                // Reduce padding/height only on extra-small screens
                [theme.breakpoints.down('sm')]: {
                  paddingTop: '8px', // Smaller top padding for xs
                  paddingBottom: '8px', // Smaller bottom padding for xs
                  // If you use start/end adornments, adjust their padding too
                  '&.MuiInputBase-inputAdornedStart': {
                    paddingLeft: '8px',
                  },
                  '&.MuiInputBase-inputAdornedEnd': {
                    paddingRight: '8px',
                  },
                },
                // Default padding/height for sm and up (Material-UI default)
                [theme.breakpoints.up('sm')]: {
                  paddingTop: '16.5px', // Standard Material-UI padding-top
                  paddingBottom: '16.5px', // Standard Material-UI padding-bottom
                  height: 'auto', // Ensure height is flexible
                }
              },
            }}
      />

         <Button 
            type="submit" 
            variant="contained" 
            fullWidth 
              sx={{ 
                mt: 1.5, 
                backgroundColor: "black" ,
                fontSize: { xs: ".7rem", sm: ".8rem", md: "1rem" },
              }}
            >
              Login
          </Button>

          <Typography 
            textAlign="center" 
            mt={1} 
            color="black"
            sx={{
               fontSize: { xs: ".7rem", sm: ".9rem", md: "1rem" },
            }}
          >
            Don't have an account?{" "}
            <Link 
              to="/register" 
              style={{ 
                color: theme.palette.primary.dark, 
                fontWeight: "bold", 
                textDecoration: "none",
                
              }}
            >
              Register
            </Link>
          </Typography>
     

    </Box>

    </Box>

   
    </Box>
  )
}

export default Login