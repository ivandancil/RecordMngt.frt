import { Route, Routes } from "react-router-dom"
import Contacts from "../scenes/contacts"
import AdminLayout from "../layouts/AdminLayout"
import Dashboard from "../pages/admin/Dashboard"
import UserManagement from "../pages/admin/UserManagement"
import LandingPage from "../pages/LandingPage"
import Login from "../pages/auth/Login"
import Register from "../pages/auth/Register"
import StudentManagement from "../pages/admin/StudentManagement"
import TeacherManagement from "../pages/admin/TeacherManagement"
import ClassManagement from "../pages/admin/ClassManagement"
import AcademicManagement from "../pages/admin/AcademicManagement"
import GradingSystem from "../pages/admin/GradingSystem"
import ReportAnalytics from "../pages/admin/ReportAnalytics"
import Announcement from "../pages/admin/Announcement"
import Settings from "../pages/admin/Settings"
import Security from "../pages/admin/Security"



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
        <Route path="studentmanagement" element={<StudentManagement />} />
        <Route path="teachermanagement" element={<TeacherManagement />} />
        <Route path="classmanagement" element={<ClassManagement />} />
        <Route path="academicmanagement" element={<AcademicManagement />} />
        <Route path="contacts" element={<Contacts />} /> {/* /admin/contacts */}

        <Route path="gradingsystem" element={<GradingSystem />} />
        <Route path="reportanalytics" element={<ReportAnalytics />} />
        <Route path="announcement" element={<Announcement />} />

        <Route path="settings" element={<Settings />} />
        <Route path="security" element={<Security />} />
      </Route>

        {/* Auth Routes */}
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
    </Routes>
  )
}

export default AppRoutes