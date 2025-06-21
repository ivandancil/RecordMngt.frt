import { Box } from '@mui/material'
import Header from '../../components/Header'

const Grades = () => {
  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Grades Submission" subtitle="Manage submission of Grades"/>
      </Box>
    </Box>
  )
}

export default Grades