import { Box } from "@mui/material"
import Header from "../../components/Header"


const TeacherManagement = () => {
  return (
     <Box m="20px" >
        <Box display="flex" justifyContent="space-between" alignItems="center">
            <Header title='Teacher Management' subtitle='Managing Teacher List' />
        </Box>
    </Box>
  )
}

export default TeacherManagement