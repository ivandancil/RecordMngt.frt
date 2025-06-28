import {
  AppBar,
  Toolbar,
  Button,
  Box,
  Typography,
  Tooltip,
  IconButton,
  Avatar,
  Menu,
  MenuItem,
  Drawer,
  colors,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Logo from "../assets/depedLogo.png"
import { tokens } from "../theme";

function Navbar() {
  const navigate = useNavigate();

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");
  const [role, setRole] = useState("");
  const [photo, setPhoto] = useState("");
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
   

  const handleMenuOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const clearSessionAndRedirect = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("name");
    localStorage.removeItem("photo");
    sessionStorage.clear();
    setIsLoggedIn(false);
    setRole("");
    setPhoto("");
    navigate("/login");
  };

  const handleLogout = async () => {
    const confirmLogout = window.confirm("Are you sure you want to log out?");
    if (!confirmLogout) return;

    try {
      const token = localStorage.getItem("token");
      if (!token) return clearSessionAndRedirect();

      await fetch("http://localhost:8000/api/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
    } catch (error) {
      console.error("Error:", error);
    } finally {
      clearSessionAndRedirect();
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    const name = localStorage.getItem("name");
    const userRole = localStorage.getItem("role");

    if (token) {
      setIsLoggedIn(true);
      setUserName(name || "Account");
      setRole(userRole || "");
    }
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      fetch("http://localhost:8000/api/user", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => {
          if (!res.ok) throw new Error("Failed to fetch user info");
          return res.json();
        })
        .then((data) => {
          setIsLoggedIn(true);
          setUserName(data.name);
          localStorage.setItem("name", data.name);
          localStorage.setItem("role", data.role);
        })
        .catch((err) => {
          console.error(err.message);
          setIsLoggedIn(false);
        });
    }
  }, []);

  const drawer = (
    <Box sx={{ width: 200, height: "100%", background: colors.primary[400] }} onClick={handleDrawerToggle}>
      <Box sx={{ p: 2, borderBottom: "1px solid #ddd" }}>
        <Typography
           variant="h6" 
           fontWeight="400" 
              sx={{ 
                fontSize: { xs: ".8rem", sm: "1rem", md: "1.1rem" } 
              }}
            >
          {userName || "RecordMngt."}
        </Typography>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", p: 2}}>
        <NavLink to="/" style={{ textDecoration: "none" }}>
          <Button fullWidth sx={{ justifyContent: "flex-start", color: "white",  fontWeight: "300" }}>
            Home
          </Button>
        </NavLink>

        {isLoggedIn ? (
          <>
            <Button
              fullWidth
              sx={{ justifyContent: "flex-start" }}
              onClick={() => navigate(role === "admin" ? "/admin" : "/user")}
            >
              Dashboard
            </Button>
            <Button fullWidth sx={{ justifyContent: "flex-start" }} onClick={handleLogout}>
              Logout
            </Button>
          </>
        ) : (
          <>
           
            <NavLink to="/admin" style={{ textDecoration: "none" }}>
              <Button fullWidth sx={{ justifyContent: "flex-start", color: "white", fontWeight: "300" }}>
                Admin
              </Button>
            </NavLink>
             <NavLink to="/teacher" style={{ textDecoration: "none" }}>
              <Button fullWidth sx={{ justifyContent: "flex-start", color: "white",  fontWeight: "300" }}>
                Teacher
              </Button>
            </NavLink>
             <NavLink to="/student" style={{ textDecoration: "none" }}>
              <Button fullWidth sx={{ justifyContent: "flex-start", color: "white",  fontWeight: "300" }}>
                Student
              </Button>
            </NavLink>
             <NavLink to="/login" style={{ textDecoration: "none" }}>
              <Button fullWidth sx={{ justifyContent: "flex-start", color: "white",  fontWeight: "300" }}>
                Login
              </Button>
            </NavLink>
            <NavLink to="/register" style={{ textDecoration: "none" }}>
              <Button fullWidth sx={{ justifyContent: "flex-start", color: "white",  fontWeight: "300" }}>
                Register
              </Button>
            </NavLink>
          </>
        )}
      </Box>
    </Box>
  );

  return (
    <>
      <AppBar
        position="static"
        sx={{
          bgcolor: "white",
          boxShadow: "none",
          height: { xs: "60px", sm: "70px", md: "80px" },
          justifyContent: "center",
        }}
      > 
        <Toolbar 
            sx={{ 
              display: "flex", 
              justifyContent: "space-between", 
              minHeight: "90px" 
            }}
          >
          {/* Logo and title */}
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              alignItems: "center",
              
            }}
          >
            <Box 
              component="img" 
              src={ Logo } 
              alt="DepEd Logo" 
                sx={{ 
                  height:  { 
                    xs: "40px", 
                    sm: "50px", 
                    md: "60px" 
                  } 
                }} 
              />
          
          </Box>

          {/* Desktop nav */}
          <Box sx={{ display: { xs: "none", sm: "flex" }, alignItems: "center", gap: 2 }}>
            <NavLink to="/" style={{ textDecoration: "none" }}>
              {({ isActive }) => (
                <Button
                  sx={{
                    mx: 1,
                    color: isActive ? "black" : "grey",
                    fontSize: "1.1rem",
                    fontWeight: 400,
                    fontFamily: "Poppins",
                    borderBottom: isActive ? "2px solid black" : "none",
                    "&:hover": {
                      bgcolor: "#f0f0f0",
                      color: "",
                    },
                  }}
                >
                  Home
                </Button>
              )}
            </NavLink>

            {/* Admin NavLink */}
            {/* <NavLink to="/admin" style={{ textDecoration: "none" }}>
              {({ isActive }) => (
                <Button
                  sx={{
                    mx: 1,
                    color: isActive ? "#1976d2" : "black",
                    fontSize: "1.1rem",
                    fontWeight: 600,
                    borderBottom: isActive ? "2px solid #1976d2" : "none",
                    "&:hover": {
                      bgcolor: "#f0f0f0",
                      color: "#1976d2",
                    },
                  }}
                >
                  Admin
                </Button>
              )}
            </NavLink> */}

             {/* Teacher NavLink */}
            {/* <NavLink to="/teacher" style={{ textDecoration: "none" }}>
              {({ isActive }) => (
                <Button
                  sx={{
                    mx: 1,
                    color: isActive ? "#1976d2" : "black",
                    fontSize: "1.1rem",
                    fontWeight: 600,
                    borderBottom: isActive ? "2px solid #1976d2" : "none",
                    "&:hover": {
                      bgcolor: "#f0f0f0",
                      color: "#1976d2",
                    },
                  }}
                >
                  Teacher
                </Button>
              )}
            </NavLink> */}

             {/* Student NavLink */}
            {/* <NavLink to="/student" style={{ textDecoration: "none" }}>
              {({ isActive }) => (
                <Button
                  sx={{
                    mx: 1,
                    color: isActive ? "#1976d2" : "black",
                    fontSize: "1.1rem",
                    fontWeight: 600,
                    borderBottom: isActive ? "2px solid #1976d2" : "none",
                    "&:hover": {
                      bgcolor: "#f0f0f0",
                      color: "#1976d2",
                    },
                  }}
                >
                  Student
                </Button>
              )}
            </NavLink> */}

            {isLoggedIn ? (
              <>
                <Tooltip title="Account settings">
                  <IconButton onClick={handleMenuOpen} sx={{ p: 0, ml: 2, mr: 3 }}>
                    <Avatar src={photo || "/image/default-avatar.png"} sx={{ width: 45, height: 45 }} />
                  </IconButton>
                </Tooltip>
                <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose} sx={{ mt: 1 }}>
                  <MenuItem>
                    <Typography variant="body1" fontWeight="bold">
                      {userName}
                    </Typography>
                  </MenuItem>
                  <MenuItem sx={{ my: 1, px: 3 }} onClick={() => navigate(role === "admin" ? "/admin" : "/user")}>
                    Dashboard
                  </MenuItem>
                  <MenuItem sx={{ my: 1, px: 3 }} onClick={handleLogout}>
                    Logout
                  </MenuItem>
                </Menu>
              </>
            ) : (
              ["Login", "Register"].map((text) => (
                <NavLink key={text} to={`/${text.toLowerCase()}`} style={{ textDecoration: "none" }}>
                  {({ isActive }) => (
                    <Button
                      sx={{
                        mx: 1,
                        color: isActive ? "black" : "grey",
                        fontSize: "1.1rem",
                        fontFamily:"Poppins",
                        fontWeight: 400,
                      }}
                    >
                      {text}
                    </Button>
                  )}
                </NavLink>
              ))
            )}
          </Box>

          {/* Mobile hamburger */}
          <Box sx={{ display: { xs: "flex", sm: "none" }, mr: 2 }}>
            <IconButton onClick={handleDrawerToggle} edge="end">
              <MenuIcon sx={{ fontSize:  { xs: "1.5rem", sm: "2rem" }, color: "black"}}/>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={mobileOpen} onClose={handleDrawerToggle}>
        {drawer}
      </Drawer>
    </>
  );
}

export default Navbar;
