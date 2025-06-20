import { Box } from "@mui/material"
import Header from "../../components/Header"


const AcademicManagement = () => {
  return (
   <Box m="20px" >
        <Box display="flex" justifyContent="space-between" alignItems="center">
            <Header title='Academic Management' subtitle='Managing Academic Year & Terms' />
        </Box>
    </Box>
  )
}

export default AcademicManagement