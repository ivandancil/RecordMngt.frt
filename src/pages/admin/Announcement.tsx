import { Box } from "@mui/material"
import Header from "../../components/Header"


const Announcement = () => {
  return (
     <Box m="20px" >
        <Box display="flex" justifyContent="space-between" alignItems="center">
            <Header title='Announcement' subtitle='Managing Communication & Announcement' />
        </Box>
    </Box>
  )
}

export default Announcement