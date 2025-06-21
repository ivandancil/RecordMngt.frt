import { Route, Routes } from "react-router-dom"
import Contacts from "../scenes/contacts"
import AdminLayout from "../layouts/AdminLayout"
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
import TeacherLayout from "../layouts/TeacherLayout"
import StudentLayout from "../layouts/StudentLayout"
import TeacherDashboard from "../pages/teacher/TeacherDashboard"
import AdminDashboard from "../pages/admin/AdminDashboard"
import Classes from "../pages/teacher/Classes"
import Grades from "../pages/teacher/Grades"
import Students from "../pages/teacher/Students"
import TeachAnouncement from "../pages/teacher/TeachAnouncement"
import Messages from "../pages/teacher/Messages"
import Calendar from "../pages/teacher/Calendar"
import TeachSetting from "../pages/teacher/TeachSetting"
import StudentDashboard from "../pages/student/StudentDashboard"
import Subject from "../pages/student/Subject"
import Grade from "../pages/student/Grade"
import Schedule from "../pages/student/Schedule"
import StudentAnnouncement from "../pages/student/StudentAnnouncement"
import Profile from "../pages/student/Profile"



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
        <Route index element={<AdminDashboard />} /> {/* /admin */}
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

      {/* Teacher Routes */}
       <Route
        path="/teacher" // Change the path for admin routes
        element={<TeacherLayout />}
      >
         <Route index element={<TeacherDashboard />} /> 
         <Route path="myclasses" element={<Classes />} />
         <Route path="gradesubmissions" element={<Grades />} />
         <Route path="mystudents" element={<Students />} />
         <Route path="announcements" element={<TeachAnouncement />} />
         <Route path="messages" element={<Messages />} />
         <Route path="calendar" element={<Calendar />} />
         <Route path="settings" element={<TeachSetting />} />

      </Route>

       {/* Student Routes */}
       <Route
        path="/student" // Change the path for admin routes
        element={<StudentLayout />}
      >
         <Route index element={<StudentDashboard />} /> 
         <Route path="mysubject" element={<Subject />} />
         <Route path="mygrades" element={<Grade />} />
         <Route path="schedule" element={<Schedule />} />
         <Route path="announcements" element={<StudentAnnouncement />} />
         <Route path="profile" element={<Profile />} />

      </Route>

        {/* Auth Routes */}
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />

    </Routes>
  )
}

export default AppRoutes