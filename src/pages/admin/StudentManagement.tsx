import { Box } from "@mui/material"
import Header from "../../components/Header"


const StudentManagement = () => {
  return (
     <Box m="20px" >
        <Box display="flex" justifyContent="space-between" alignItems="center">
            <Header title='Student Management' subtitle='Managing Students List' />
        </Box>
    </Box>
  )
}

export default StudentManagement