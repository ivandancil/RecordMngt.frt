import { Box } from "@mui/material"
import Header from "../../components/Header"


const TeachAnouncement = () => {
  return (
  <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Announcements" subtitle="Manage school announcements"/>
      </Box>
    </Box>
  )
}

export default TeachAnouncement