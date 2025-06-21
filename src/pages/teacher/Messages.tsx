import { Box } from "@mui/material"
import Header from "../../components/Header"


const Messages = () => {
  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Messages" subtitle="Manage school E-mails and messages"/>
      </Box>
    </Box>
  )
}

export default Messages