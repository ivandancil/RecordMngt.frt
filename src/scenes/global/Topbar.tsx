import { Box, IconButton, InputBase, useTheme, useMediaQuery } from "@mui/material";
import { ColorModeContext, tokens } from "../../theme";
import { useContext, useState } from "react";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu"; // Import MenuIcon for hamburger
import CloseIcon from "@mui/icons-material/Close"; // Import CloseIcon for mobile menu toggle

const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  // State to manage the visibility of the mobile menu
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  // useMediaQuery hook to determine if the screen is medium or larger
  const isAboveMediumScreens = useMediaQuery(theme.breakpoints.up("md"));

  return (
    // Main container for the top bar
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      p={2}
      position="relative" // Needed for absolute positioning of mobile menu
    >
      {/* Search Bar Section */}
      <Box
        display="flex"
        backgroundColor={colors.primary[400]}
        borderRadius="8px"
      >
        {/* Input field for search */}
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
        {/* Search icon button */}
        <IconButton type="button" sx={{ p: 1 }}>
          <SearchIcon />
        </IconButton>
      </Box>

      {/* Right Section: Icons and Mobile Menu Toggle */}
      <Box display="flex" alignItems="center">
        {/* Hamburger/Close Icon - Visible only on small screens */}
        {!isAboveMediumScreens && (
          <IconButton onClick={() => setOpenMobileMenu(!openMobileMenu)}>
            {/* Toggle between MenuIcon and CloseIcon based on menu state */}
            {openMobileMenu ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
        )}

        {/* Regular Icons Container */}
        {/* Display as row on medium and larger screens */}
        {/* Display as column, absolutely positioned, on small screens when open */}
        <Box
          display={isAboveMediumScreens || openMobileMenu ? "flex" : "none"}
          flexDirection={isAboveMediumScreens ? "row" : "column"}
          sx={{
            // Styles for desktop (always visible, row layout)
            [theme.breakpoints.up("md")]: {
              position: 'static', // Reset position for desktop
              gap: 1, // Space between icons
            },
            // Styles for mobile (hidden by default, appears as absolute column when open)
            ...(!isAboveMediumScreens && openMobileMenu && {
              position: 'absolute',
              top: '70px', // Adjust based on your topbar height
              right: '16px',
              p: 2,
              borderRadius: '8px',
              boxShadow: theme.shadows[3],
              backgroundColor: colors.primary[400],
              zIndex: 50,
              gap: 1, // Space between icons in column
            }),
          }}
        >
          {/* Theme Mode Toggle Button */}
          <IconButton onClick={colorMode.toggleColorMode}>
            {theme.palette.mode === "dark" ? (
              <DarkModeOutlinedIcon />
            ) : (
              <LightModeOutlinedIcon />
            )}
          </IconButton>
          {/* Notifications Icon */}
          <IconButton>
            <NotificationsOutlinedIcon />
          </IconButton>
          {/* Settings Icon */}
          <IconButton>
            <SettingsOutlinedIcon />
          </IconButton>
          {/* Person Profile Icon */}
          <IconButton>
            <PersonOutlinedIcon />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default Topbar;
