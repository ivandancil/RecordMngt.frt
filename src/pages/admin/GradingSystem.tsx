import { Box } from "@mui/material"
import Header from "../../components/Header"

const GradingSystem = () => {
  return (
   <Box m="20px" >
        <Box display="flex" justifyContent="space-between" alignItems="center">
            <Header title='Grading System Setup' subtitle='Managing Grading System' />
        </Box>
    </Box>
  )
}

export default GradingSystem