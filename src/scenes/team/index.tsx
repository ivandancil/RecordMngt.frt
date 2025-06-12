import { Box } from '@mui/material';
import Header from '../../components/Header';

export interface SystemUser {
  id: number;
  name: string;
  email: string;
  age: number;
  phone: string;
  access: "admin" | "user" | "teacher";
}

const Team = () => {



  return (
    <Box ml="20px">
      <Header title='Team' subtitle='Managing Team Members' />
      <Box m="40px 0 0 0" height="75vh">
       
      </Box>
    </Box>
  );
};

export default Team;