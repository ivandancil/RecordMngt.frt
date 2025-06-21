import { Box } from "@mui/material"
import Header from "../../components/Header"

const Classes = () => {
  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="My Classes" subtitle="Manage Class Schedule"/>
      </Box>
    </Box>
  )
}

export default Classes