import { ColorModeContext, useMode } from "./theme"
import { ThemeProvider, CssBaseline } from "@mui/material"
import Topbar from "./scenes/global/Topbar"
import SidebarComponent from "./scenes/global/SidebarComponent"
import { Route, Routes } from "react-router-dom";
import Dashboard from "./scenes/dashboard";

function App() {
  const { theme, colorMode } = useMode();

  return (
    <ColorModeContext.Provider value= {colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
          <div className="app">
            <SidebarComponent />
            <main className="content">
              <Topbar />
              <Routes>
                <Route path="/" element={<Dashboard />}/>
              </Routes>
            </main>
          </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App
