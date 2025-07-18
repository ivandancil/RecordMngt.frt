import { Box } from "@mui/material"
import Header from "../../components/Header"


const StudentDashboard = () => {
  return (
    <Box m="20px">
       <Box display="flex" justifyContent="space-between" alignItems="center">
         <Header title="Student Dashboard" subtitle="Welcome to your Dashboard"/>
        </Box>
    </Box>
  )
}

export default StudentDashboard