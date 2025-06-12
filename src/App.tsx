  import { useState, useEffect } from 'react'; // Import useEffect
  import { ColorModeContext, useMode } from "./theme";
  import { ThemeProvider, CssBaseline, useMediaQuery, useTheme } from "@mui/material"; // Import useMediaQuery and useTheme
  import Topbar from "./scenes/global/Topbar";
  import SidebarComponent from "./scenes/global/SidebarComponent";
  import { Route, Routes } from "react-router-dom";
  import Dashboard from './scenes/dashboard';
import Team from './scenes/team';
import Contacts from './scenes/contacts';


  function App() {
    const { theme, colorMode } = useMode();
    const muiTheme = useTheme(); // Get the MUI theme to access breakpoints
    // Determine if the screen is large (e.g., desktop)
    const isDesktop = useMediaQuery(muiTheme.breakpoints.up("md")); // You can adjust "md" to "lg" if you prefer a larger breakpoint

    // Initialize isSidebarCollapsed based on whether it's a desktop screen.
    // If it's desktop, isSidebarCollapsed should be false (sidebar visible).
    // If it's not desktop, isSidebarCollapsed should be true (sidebar collapsed).
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(!isDesktop);

    // Use useEffect to update isSidebarCollapsed when the screen size changes
    useEffect(() => {
      setIsSidebarCollapsed(!isDesktop);
    }, [isDesktop]);

    const toggleSidebar = () => {
      setIsSidebarCollapsed(prev => !prev);
    };

    return (
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <div className="app">
            <SidebarComponent isCollapsed={isSidebarCollapsed} toggleSidebar={toggleSidebar} />
            <main className="content">
              <Topbar toggleSidebar={toggleSidebar} />
              <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/team" element={<Team />} />
                  <Route path="/contacts" element={<Contacts />} />
                
              </Routes>
            </main>
          </div>
        </ThemeProvider>
      </ColorModeContext.Provider>
    );
  }

  export default App;