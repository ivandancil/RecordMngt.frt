import React, { useState } from "react";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar'; // Make sure SubMenu is imported!
import Profile from "../assets/profile-1.jpg";

// Import all necessary icons
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined'; // For academics
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined'; // For reports
import AnnouncementOutlinedIcon from '@mui/icons-material/AnnouncementOutlined'; // For announcements
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined"; // For settings
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined"; // For security
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined"; // For the menu toggle icon
// Add any other specific icons you might need for sub-items if they differ
// import GroupAddOutlinedIcon from "@mui/icons-material/GroupAddOutlined"; // Example for a sub-item icon


import { tokens } from "../theme";

// --- ItemProps Interface ---
// Modified to include optional subItems for clarity, though `Item` itself won't render them directly
interface ItemProps {
  title: string;
  to: string;
  icon: React.ReactNode | null; // icon can be null for sub-items if they don't have one
  selected: string;
  setSelected: (title: string) => void;
  isCollapsed: boolean;
}

const Item = ({ title, to, icon, selected, setSelected, isCollapsed }: ItemProps) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.grey[100],
      }}
      onClick={() => setSelected(title)}
      icon={icon} // Render icon even if null, react-pro-sidebar handles it
      component={<Link to={to} />}
    >
      {!isCollapsed && <Typography>{title}</Typography>}
    </MenuItem>
  );
};

// --- Streamlined Navigation Data with Sub-items ---
const streamlinedNavigation = [
  {
    category: "",
    items: [
      {
        title: "Dashboard",
        to: "/admin",
        icon: <HomeOutlinedIcon />,
      },
    ],
  },
  {
    category: "Management",
    items: [
      {
        title: "User Management",
        to: "/admin/usermanagement", // This can be a main page, or just a placeholder for the submenu
        icon: <PeopleOutlinedIcon />,
        subItems: [ // Added subItems
          { title: "All Users", to: "/admin/usermanagement" }, // This could link to a general user list
          { title: "Students", to: "/admin/studentmanagement" },
          { title: "Teachers", to: "/admin/teachermanagement" },
        ]
      },
      {
        title: "Academics",
        to: "/admin/academicmanagement",
        icon: <SchoolOutlinedIcon />,
        subItems: [ // Added subItems
          { title: "Classes", to: "/admin/classmanagement" },
          { title: "Academic Setup", to: "/admin/academicmanagement" },
          { title: "Grading System", to: "/admin/gradingsystem" },
        ]
      },
      {
        title: "Contacts",
        to: "/admin/contacts",
        icon: <ContactsOutlinedIcon />,
      },
    ],
  },
  {
    category: "Information & Tools",
    items: [
      {
        title: "Reports",
        to: "/admin/reportanalytics",
        icon: <BarChartOutlinedIcon />,
      },
      {
        title: "Announcements",
        to: "/admin/announcement",
        icon: <AnnouncementOutlinedIcon />,
      },
    ],
  },
  {
    category: "System",
    items: [
      {
        title: "Settings",
        to: "/admin/settings",
        icon: <SettingsOutlinedIcon />,
      },
      {
        title: "Security",
        to: "/admin/security",
        icon: <SecurityOutlinedIcon />,
      },
    ],
  },
];
// --- End Streamlined Navigation Data ---


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
        // Styling for react-pro-sidebar components
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
        // Styling for SubMenu labels
        "& .ps-submenu-content .ps-menu-button": {
          background: `${colors.primary[400]} !important`,
          paddingLeft: "40px !important", // Indent sub-items
          fontSize: { xs: ".6rem", sm: ".7rem", md: ".9rem" }, // Adjust font size for sub-items
           "&:hover": {
            color: `${colors.blueAccent[500]} !important`,
            backgroundColor: `${colors.primary[500]} !important`,
          },
        },
        "& .ps-submenu-content .MuiTypography-root": {
          fontSize: { xs: ".6rem", sm: ".7rem", md: ".9rem" }, // Ensure Typography inside sub-items also scales
        },
        "& .ps-menu-label": {
          fontSize: { xs: ".6rem", sm: ".8rem", md: "1rem" }, // Ensure top-level menu item labels scale
        },
        // For the "RecordMngt." title
        "& .ps-sidebar-root .MuiTypography-h3": {
          fontSize: { xs: ".8rem", sm: "1rem", md: "1.1rem" },
        },
        // For the user role typography
        "& .ps-sidebar-root .MuiTypography-h5": {
          fontSize: { xs: ".6rem", sm: ".7rem", md: ".9rem" },
        },


        // --- IMPORTANT: Conditional styles for the root Box of the Sidebar ---
        ...(isDesktop
          ? {
              position: 'relative',
            }
          : {
              position: 'fixed',
              top: 0,
              left: 0,
              width: isCollapsed ? '0px' : '300px',
              zIndex: 110,
              transition: 'width 0.3s ease-in-out',
              boxShadow: theme.shadows[5],
              overflowX: 'hidden',
            }),

      }}
    >
      <Sidebar
        collapsed={isCollapsed}
        width="300px"
        collapsedWidth={isCollapsed ? "0px" : "80px"} // Set a small collapsedWidth for desktop
        // You might want to adjust this based on whether you want icons visible when collapsed
           style={{ height: '100%' }}
      >
        <Menu>
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={toggleSidebar}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
            // When collapsed, the menu icon is the only thing shown in this MenuItem
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
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
                      transform: isCollapsed ? "rotate(180deg)" : "rotate(0deg)", // This rotation might be on the wrong icon if it's the toggle one
                      opacity: isCollapsed ? 0 : 1, // Hide when collapsed, show when open
                      color: "white",
                      cursor: "pointer" // Indicate it's clickable
                    }}
                  />
              </Box>
            )}
          </MenuItem>

          {/* USER PROFILE */}
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
                    sx={{ fontSize: { xs: ".6rem", sm: ".7rem", md: ".9rem" } }}
                >
                  --- School Admin
                </Typography>
              </Box>
            </Box>
          )}

          {/* MENU ITEMS */}
          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            {streamlinedNavigation.map((categoryGroup, index) => (
              <React.Fragment key={index}>
                {/* Category Title */}
                {categoryGroup.category && (
                  <Typography
                    variant="h6"
                    color={colors.grey[300]}
                    sx={{
                      fontSize: { xs: ".6rem", sm: ".7rem", md: ".9rem" },
                      m: "15px 0 5px 20px",
                    }}
                  >
                    {!isCollapsed && categoryGroup.category}
                  </Typography>
                )}

                {/* Render Items or SubMenus */}
                {categoryGroup.items.map((item) => (
                  item.subItems ? ( // Check if item has subItems
                    <SubMenu
                      key={item.title}
                      label={!isCollapsed ? item.title : ''} // Label for SubMenu. Empty string if collapsed to show only icon.
                      icon={item.icon}
                      className={selected.includes(item.title) ? 'ps-active' : ''} // Apply active class to SubMenu if any subitem is selected
                      // You might want to expand the submenu if one of its children is selected
                      defaultOpen={item.subItems.some(sub => sub.title === selected)}
                    >
                      {item.subItems.map(subItem => (
                        <Item
                          key={subItem.title}
                          title={subItem.title}
                          to={subItem.to}
                          icon={null} // Sub-items typically don't have icons, or you can assign different ones
                          selected={selected}
                          setSelected={setSelected}
                          isCollapsed={isCollapsed} // Pass isCollapsed
                        />
                      ))}
                    </SubMenu>
                  ) : ( // Render a regular Item if no subItems
                    <Item
                      key={item.title}
                      title={item.title}
                      to={item.to}
                      icon={item.icon}
                      selected={selected}
                      setSelected={setSelected}
                      isCollapsed={isCollapsed} // Pass isCollapsed
                    />
                  )
                ))}
              </React.Fragment>
            ))}
          </Box>
        </Menu>
      </Sidebar>
    </Box>
  );
};

export default SidebarComponent;