import { Box } from "@mui/material"
import Header from "../../components/Header"


const StudentAnnouncement = () => {
  return (
    <Box m="20px">
       <Box display="flex" justifyContent="space-between" alignItems="center">
         <Header title="Announcements" subtitle="Monitor School Announcement"/>
        </Box>
    </Box>
  )
}

export default StudentAnnouncement