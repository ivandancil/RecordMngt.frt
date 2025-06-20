import { Box } from "@mui/material"
import Header from "../../components/Header"

const Settings = () => {
  return (
     <Box m="20px" >
        <Box display="flex" justifyContent="space-between" alignItems="center">
            <Header title='Settings' subtitle='Managing System Settings' />
        </Box>
    </Box>
  )
}

export default Settings