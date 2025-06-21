import { Box } from "@mui/material"
import Header from "../../components/Header"

const Grade = () => {
  return (
    <Box m="20px">
       <Box display="flex" justifyContent="space-between" alignItems="center">
         <Header title="Grades" subtitle="Monitor Grades"/>
        </Box>
    </Box>
  )
}

export default Grade