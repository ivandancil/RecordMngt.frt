import { Box, IconButton, Typography, useTheme, useMediaQuery } from "@mui/material";
import { tokens } from "../../theme";
import { useState } from "react";
import { Link } from "react-router-dom";
// Ensure these imports are correct for react-pro-sidebar v1.x
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import Profile from "../../assets/profile-1.jpg"
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";

// Interface for Item props
interface ItemProps {
  title: string;
  to: string;
  icon: React.ReactNode;
  selected: string;
  setSelected: (title: string) => void;
}

// Helper Component for Menu Items
const Item = ({ title, to, icon, selected, setSelected }: ItemProps) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.grey[100],
      }}
      onClick={() => setSelected(title)}
      icon={icon}
      // The Link component from react-router-dom is rendered inside MenuItem
      // ensuring navigation works when the item is clicked.
      component={<Link to={to} />}
    >
      <Typography>{title}</Typography>
    </MenuItem>
  );
};

const SidebarComponent = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  // useMediaQuery to check if screen is larger than 'md' breakpoint
  const isNonMobile = useMediaQuery(theme.breakpoints.up("md"));

  // State for collapsing the sidebar on desktop
  const [isCollapsed, setIsCollapsed] = useState(false);
  // State for toggling (opening/closing) the sidebar on mobile
  // Initialized to `false`, meaning it will be hidden by default on mobile screens.
  const [toggled, setToggled] = useState(false);
  // State for tracking the currently selected menu item
  const [selected, setSelected] = useState("Dashboard");

  return (
    // Outer Box container for the sidebar, ensuring it takes full viewport height
    <Box
      sx={{
        height: "100vh", // Ensures the sidebar takes full viewport height
        display: 'flex', // Use flex to position the sidebar
        flexDirection: 'column', // Stack content vertically inside
        // Custom styles for react-pro-sidebar internal classes
        "& .ps-sidebar-container": {
          background: `${colors.primary[400]} !important`,
        },
        "& .ps-menu-button .ps-menu-icon": {
          backgroundColor: "transparent !important",
        },
        "& .ps-menu-button": {
          padding: "5px 35px 5px 20px !important",
          backgroundColor: "transparent !important",
          '&:hover': {
            color: `${colors.blueAccent[500]} !important`,
            backgroundColor: `${colors.primary[500]} !important`,
          },
        },
        "& .ps-menu-button.ps-active": {
          color: `${colors.greenAccent[500]} !important`,
          backgroundColor: `${colors.primary[500]} !important`,
        },
        "& .ps-menu-button.ps-active .ps-menu-label": {
          color: `${colors.greenAccent[500]} !important`,
        },
      }}
    >
      <Sidebar
        // `collapsed` prop now conditionally applies based on screen size
        // On desktop, `isCollapsed` state controls. On mobile, it's always collapsed.
        collapsed={isNonMobile ? isCollapsed : true}
        // `toggled` prop controls the open/close state on mobile
        toggled={toggled}
        // `onBackdropClick` closes the sidebar when the overlay is clicked on mobile
        onBackdropClick={() => setToggled(false)}
        // `breakPoint` defines when the sidebar switches to mobile mode
        breakPoint="md" // Sidebar will become responsive at Material-UI's 'md' breakpoint
        // Background color of the sidebar itself
        backgroundColor={colors.primary[400]}
        // Option to hide background image if you were using one
        // image="path/to/image.jpg"
      >
        <Menu>
          {/* LOGO AND MENU ICON */}
          <MenuItem
            // On desktop, this toggles `isCollapsed`. On mobile, it toggles `toggled`.
            onClick={() => (isNonMobile ? setIsCollapsed(!isCollapsed) : setToggled(!toggled))}
            // Logic for the MenuItem's icon:
            // Show MenuOutlinedIcon if on mobile, or if on desktop AND collapsed.
            icon={isNonMobile ? (isCollapsed ? <MenuOutlinedIcon /> : undefined) : <MenuOutlinedIcon />}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
          >
            {/* The Box containing ADMINS text and the IconButton.
                The ADMINS text will now hide when the sidebar is effectively collapsed (on mobile too). */}
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              ml="15px"
              sx={{ width: '100%' }} // Ensure the Box takes full width for spacing
            >
              {/* "ADMINS" text is visible only if the sidebar is NOT collapsed (desktop)
                  OR if it's mobile AND the sidebar is currently expanded (not collapsed). */}
              {/* This condition now ensures the text hides when sidebar is collapsed on mobile too */}
              {(!isCollapsed && isNonMobile) && (
                  <Typography variant="h3" color={colors.grey[100]}>
                    ADMINS
                  </Typography>
              )}
              {/* The IconButton for toggling is ALWAYS rendered within this Box. */}
              <IconButton onClick={() => (isNonMobile ? setIsCollapsed(!isCollapsed) : setToggled(!toggled))}>
                <MenuOutlinedIcon />
              </IconButton>
            </Box>
          </MenuItem>

          {/* USER SECTION - Only visible when not collapsed (desktop) and not collapsed on mobile */}
          {(!isCollapsed && isNonMobile) && (
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <img
                  alt="profile-user"
                  width="100px"
                  height="100px"
                  src={Profile}
                  style={{ cursor: "pointer", borderRadius: "50%"}}
                />
              </Box>

              <Box textAlign="center">
                <Typography
                  variant="h2"
                  color={colors.grey[100]}
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0"}}
                >
                  IvanDancil
                </Typography>
                <Typography
                  variant="h5"
                  color={colors.greenAccent[500]}
                >
                  School Admin
                </Typography>
              </Box>
            </Box>
          )}

          {/* MENU ITEMS */}
          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            <Item
              title="Dashboard"
              to="/"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Data
            </Typography>
            <Item
              title="Manage Team"
              to="/team"
              icon={<PeopleOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Contacts Information"
              to="/contacts"
              icon={<ContactsOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Invoices Balances"
              to="/invoices"
              icon={<ReceiptOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Pages
            </Typography>
            <Item
              title="Profile Form"
              to="/form"
              icon={<PersonOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Calendar"
              to="/calendar"
              icon={<CalendarTodayOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="FAQ Page"
              to="/faq"
              icon={<HelpOutlineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Charts
            </Typography>
            <Item
              title="Bar Chart"
              to="/bar"
              icon={<BarChartOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Pie Chart"
              to="/pie"
              icon={<PieChartOutlineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Line Chart"
              to="/line"
              icon={<TimelineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Geography Chart"
              to="/geography"
              icon={<MapOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
        </Menu>
      </Sidebar>
    </Box>
  );
};

export default SidebarComponent;