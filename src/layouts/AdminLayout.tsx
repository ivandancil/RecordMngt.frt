import { Box, useMediaQuery, useTheme } from "@mui/material";
import { Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import SidebarComponent from "../components/SidebarComponent";
import Topbar from "../components/Topbar";
import BackgroundImage from "../../src/assets/odiongan.jpg"; 

const AdminLayout = () => {
  const location = useLocation();
  const hideLayout = location.pathname === "/login" || location.pathname === "/register";
   const NAVBAR_HEIGHT = 0;

  const muiTheme = useTheme(); // Get the MUI theme to access breakpoints
  // Determine if the screen is large (e.g., desktop)
  const isDesktop = useMediaQuery(muiTheme.breakpoints.up("md")); // You can adjust "md" to "lg" if you prefer a larger breakpoint

  // Initialize isSidebarCollapsed based on whether it's a desktop screen.
  // If it's desktop, isSidebarCollapsed should be false (sidebar visible).
  // If it's not desktop, isSidebarCollapsed should be true (sidebar collapsed).
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(!isDesktop);

  // --- START: Add user role state ---
  // IMPORTANT: In a real application, replace this with actual authentication
  // logic to get the user's role (e.g., from a login API, context, or Redux store).
  const [userRole] = useState("admin"); // Default to "admin" for testing
  // You might fetch this from localStorage, a context, or an API call on mount
  useEffect(() => {
    // Example: Simulate fetching user role after login
    // const fetchedRole = localStorage.getItem('userRole') || 'student'; // Get role from storage
    // setUserRole(fetchedRole);
  }, []);
  // --- END: Add user role state ---


  // Use useEffect to update isSidebarCollapsed when the screen size changes
  useEffect(() => {
    setIsSidebarCollapsed(!isDesktop);
  }, [isDesktop]);

  const toggleSidebar = () => {
    setIsSidebarCollapsed(prev => !prev);
  };

  return (
     <Box
      sx={{
        display: 'flex',
        height: '100vh',
        width: '100vw', // Ensure it covers the full viewport width
        position: 'relative', // Necessary for positioning the absolute background overlay
        overflow: 'hidden', // Hides any overflow if the background image scales beyond boundaries
        bgcolor: "black"
      }}
    >

       <Box
        component="img"
        src={ BackgroundImage }
        alt="DepEd Logo Background"
        sx={{
          position: "absolute",
          top: `${NAVBAR_HEIGHT}px`,
          left: 0,
          width: "100%",
          height: `calc(100vh - ${NAVBAR_HEIGHT}px)`,
          objectFit: "fill",
          opacity: 0.2,
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

     <Box
        display="flex" // Enables flexbox for arranging sidebar and main content
        flexDirection="row" // Arranges children (Sidebar and main content) in a row
        height="100%" // Takes full height of the parent (which is 100vh)
        width="100%" // Takes full width to correctly layer on top of the background
        sx={{ zIndex: 0 }} // Ensures this content layer is above the background (-1 zIndex)
      >
      {/* Pass userRole to SidebarComponent */}
      {!hideLayout && (
        <SidebarComponent
          isCollapsed={isSidebarCollapsed}
          toggleSidebar={toggleSidebar}
          userRole={userRole} // <-- HERE: Pass the userRole prop
        />
      )}

      <Box flexGrow={1} sx={{ minHeight: "100vh", overflowY: "auto" }}>
        {!hideLayout && <Topbar toggleSidebar={toggleSidebar} />}

        <Box>
          <Outlet />
        </Box>
      </Box>
    </Box>
    </Box>
  );
};

export default AdminLayout;