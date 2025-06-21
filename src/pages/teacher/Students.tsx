import { Box } from '@mui/material'
import Header from '../../components/Header'

const Students = () => {
  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Student List" subtitle="Manage student list"/>
      </Box>
    </Box>
  )
}

export default Students