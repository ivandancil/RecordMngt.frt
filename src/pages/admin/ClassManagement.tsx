import { Box } from "@mui/material"
import Header from "../../components/Header"


const ClassManagement = () => {
  return (
    <Box m="20px" >
        <Box display="flex" justifyContent="space-between" alignItems="center">
            <Header title='Class Management' subtitle='Managing Classes & Sections' />
        </Box>
    </Box>
  )
}

export default ClassManagement