import { Route, Routes } from "react-router-dom"
import Contacts from "../scenes/contacts"
import AdminLayout from "../layouts/AdminLayout"
import Dashboard from "../pages/admin/Dashboard"
import UserManagement from "../pages/admin/UserManagement"
import LandingPage from "../pages/LandingPage"
import Login from "../pages/auth/Login"
import Register from "../pages/auth/Register"



const AppRoutes = () => {
  return (
     <Routes>
      {/* Landing Page Route */}
      <Route path="/" element={<LandingPage />} />

      {/* Admin Routes */}
      <Route
        path="/admin" // Change the path for admin routes
        element={<AdminLayout />}
      >
        <Route index element={<Dashboard />} /> {/* /admin */}
        <Route path="usermanagement" element={<UserManagement />} /> {/* /admin/usermanagement */}
        <Route path="contacts" element={<Contacts />} /> {/* /admin/contacts */}
      </Route>

        {/* Auth Routes */}
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
    </Routes>
  )
}

export default AppRoutes