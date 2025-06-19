import React, { useState } from "react";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { Link } from "react-router-dom"; // Make sure Link is imported
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar'; // Assuming react-pro-sidebar
import Profile from "../assets/profile-1.jpg";
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
import { tokens } from "../theme";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

interface ItemProps {
  title: string;
  to: string;
  icon: React.ReactNode;
  selected: string;
  setSelected: (title: string) => void;
}

const Item = ({ title, to, icon, selected, setSelected }: ItemProps) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);


  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.grey[100],
      }}
      onClick={() => setSelected(title)} // Keep this to update the selected state
      icon={icon}
      component={<Link to={to} />} // <-- Crucial Change: Pass Link as the component
      // Note: react-pro-sidebar v1.0.0+ uses this component prop
      // For older versions, you might wrap <Typography> in <Link> or use Link's children
    >
      <Typography>{title}</Typography>
    </MenuItem>
  );
};

// ... (rest of your SidebarComponent remains the same)

interface SidebarComponentProps {
  isCollapsed: boolean;
  toggleSidebar: () => void;
}

const SidebarComponent: React.FC<SidebarComponentProps> = ({ isCollapsed, toggleSidebar }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [selected, setSelected] = useState("Dashboard");
    const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Box
      sx={{
        height: "100vh",
        "& .ps-sidebar-container": {
          background: `${colors.primary[400]} !important`,
        },
        "& .ps-menu-button .ps-menu-icon": {
          backgroundColor: "transparent !important",
        },
        "& .ps-menu-button": {
          padding: "5px 35px 5px 20px !important",
          backgroundColor: "transparent !important",
          "&:hover": {
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
        "& .ps-menu-button .MuiTypography-root": {
          fontSize: { xs: ".6rem", sm: ".8rem", md: "1rem" },
        },
        // For the "RecordMngt." title
        "& .ps-sidebar-root .MuiTypography-h3": {
            fontSize: { xs: ".8rem", sm: "1rem", md: "1.1rem" },
        },

          // --- IMPORTANT: Conditional styles for the root Box of the Sidebar ---
        ...(isDesktop
          ? {
              // Desktop styles: Sidebar remains in the normal document flow
              position: 'relative', // Part of the flex layout in App.js
              // Width for desktop is controlled by react-pro-sidebar's 'collapsed' prop directly
              // based on its own width/collapsedWidth props.
             // Default desktop width when not collapsed
              // If you have a separate desktop collapse button, its state would dictate isCollapsed
          }
          : {
              // Mobile styles: Sidebar acts as an overlay (fixed position)
              position: 'fixed', // Makes it an overlay, out of document flow
              top: 0,
              left: 0,
              // Dynamically set width based on the `isCollapsed` prop from App.js
              // When isCollapsed is true (initial mobile state, or after toggle to close), width is 0.
              // When isCollapsed is false (after toggle to open), width is 250px.
              width: isCollapsed ? '0px' : '250px',
              zIndex: 110, // Higher than Topbar's zIndex (100) to ensure it appears on top
              transition: 'width 0.3s ease-in-out', // Smooth open/close animation
              boxShadow: theme.shadows[5], // Add a shadow for visual depth
              // Hide overflow to prevent scrollbars when sidebar is collapsed
              overflowX: 'hidden',
          }),

      }}
    >
      <Sidebar
        collapsed={isCollapsed}
        width="300px"
        collapsedWidth={isCollapsed ? "0px" : "250px"}
        
      >
        <Menu>
          <MenuItem
            onClick={toggleSidebar}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="3px"
              >
                <Typography
                  variant="h3"
                  color={colors.grey[100]}
                  sx={{ fontSize: { xs: ".8rem", sm: "1rem", md: "1.1rem" } }}
                >
                  RecordMngt.
                </Typography>
                <MenuOutlinedIcon
                    style={{
                      transition: "transform 0.3s ease-in-out",
                      transform: isCollapsed ? "rotate(180deg)" : "rotate(0deg)",
                      opacity: isCollapsed ? 0 : 1,
                      color: "white",
                    }}
                  />
              </Box>
            )}
          </MenuItem>

          {!isCollapsed && (
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <img
                  alt="profile-user"
                  width="100px"
                  height="100px"
                  src={Profile}
                  style={{ cursor: "pointer", borderRadius: "50%" }}
                />
              </Box>

              <Box textAlign="center">
                <Typography
                  variant="h2"
                  color={colors.grey[100]}
                  fontWeight="500"
                  sx={{ fontSize: { xs: ".8rem", sm: "1.2rem", md: "1.5rem" }, m: "10px 0 0 0" }}
                >
                  IvanDancil
                </Typography>
                <Typography 
                    variant="h5" 
                    color={colors.grey[200]}
                    sx={{  fontSize: { xs: ".6rem", sm: ".7rem", md: ".9rem" } }}>
                  --- School Admin
                </Typography>
              </Box>
            </Box>
          )}

            

          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            <Item
              title="Dashboard"
              to="/admin"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
              
            />

            <Typography
              variant="h6"
              color={colors.grey[300]}
                sx={{  
                  fontSize: { xs: ".6rem", sm: ".7rem", 
                  md: ".9rem" }, 
                  m: "5px 0 5px 20px" 
              }}
            >
              Data
            </Typography>
            
            <Item
              title="Manage Users" 
              to="/admin/usermanagement"
              icon={<PeopleOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Contacts Information"
              to="/admin/contacts"
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