import { Box, Grid, Paper, Typography, colors } from "@mui/material"
import Header from "../../components/Header"
import GroupsIcon from "@mui/icons-material/Groups";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";

const AdminDashboard = () => {

      // ✅ Overview Data with fixed structure
      const overviewData = [
        {
          title:  11,
          subtitle: "Total Number of Students" ,
          icon: <GroupsIcon sx={{ fontSize: { xs: 36, sm: 38, md: 40 }, color: "#3498db" }} />,
        },
         {
          title:  11,
          subtitle: "Total Number of Students",
          icon: <PersonAddAltIcon sx={{ fontSize: 30, color: "#3498db" }} />,
        },
        {
          title:  11,
          subtitle: "Total Number of Students",
          icon: <InsertDriveFileIcon sx={{ fontSize: 30, color: "#3498db" }} />,
        },
        {
          title:  11,
          subtitle: "Notifications",
          icon: <NotificationsActiveIcon sx={{ fontSize: { xs: 36, sm: 38, md: 40 }, color: "red" }} />,
        },
        
      ];

  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="School Admin Dashboard" subtitle="Welcome to your Dashboard"/>
      </Box>

       {/* Overview Section */}
      <Grid container spacing={2} mt={0.5}>
        {overviewData.map((item) => (
      
            <Paper
              elevation={3}
              sx={{
                p: 2,
                textAlign: "center",
                backgroundColor: colors.grey[100],
                height: "120px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {item.icon}
             <Typography 
                variant="h6" 
                fontWeight="bold" 
                color={colors.grey[900]}
                 sx={{ 
                   fontSize: { xs: ".8rem", sm: ".9rem", md: "1rem" } }}
                >
                {item.title}
              </Typography>
              <Typography 
                variant="body2" 
                fontFamily="Poppins"
                color={colors.grey[900]}
                 sx={{  fontSize: { xs: ".8rem", sm: ".9rem", md: "1rem" } }}
              >
                {item.subtitle}
              </Typography>
            </Paper>
         
          
        ))}
       
      </Grid>
      
    </Box>
  )
}

export default AdminDashboard