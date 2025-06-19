  import { Box, Typography, useTheme, useMediaQuery, Tabs, Tab } from '@mui/material'; // Import useMediaQuery
  import Header from '../../components/Header';
  import { tokens } from '../../theme';
  import { DataGrid, type GridColDef } from '@mui/x-data-grid';
  import { mockDataSystemUsers } from '../../data/mockData';
  import { AdminPanelSettingsOutlined, LockOpenOutlined, SecurityOutlined } from '@mui/icons-material';
  import { useState } from 'react';

  export interface SystemUser {
    id: number;
    name: string;
    email: string;
    age: number;
    phone: string;
    access: "School Admin" | "Student" | "Teacher";
  }

const UserManagement = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [tabValue, setTabValue] = useState(0);
   
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('md')); // Example: true for screens smaller than 'md' (900px by default)
        const isExtraSmallScreen = useMediaQuery(theme.breakpoints.down('sm')); // e.g., for screens smaller than 'sm' (600px by default)

    const columns: GridColDef<SystemUser>[] = [
      {
        field: "id",
        headerName: "ID",
        width: isSmallScreen ? 50 : 90,
      
      },  
      {
        field: "name",
        headerName: "Name",
        flex: 1, 
        minWidth: 120, 
        cellClassName: "name-column--cell",
      },
      {
        field: "age",
        headerName: "Age",
        type: "number",
        headerAlign: "left",
        align: "left",
        width: isSmallScreen ? 60 : 80, 
      },
      {
        field: "phone",
        headerName: "Phone",
        flex: 1,
        minWidth: 120, 
      
      },
      {
        field: "email",
        headerName: "Email",
        flex: 1,
        minWidth: 180, 
      
      },
      {
        field: "access",
        headerName: "Access Level",
        flex: 1,
        minWidth: 150,
        renderCell: ({ row }: { row: SystemUser }) => {
          const { access } = row;
          return (
            <div
              style={{
                width: "100%", 
                marginTop: "11px",
                padding: "5px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center", 
                backgroundColor:
                  access === "School Admin"
                    ? colors.grey[800]
                    : colors.grey[900],
                borderRadius: "4px",
              
                fontSize: isSmallScreen ? '0.75rem' : 'inherit',
                flexWrap: 'nowrap',
              }}
            >
              {access === "School Admin" && <AdminPanelSettingsOutlined sx={{ fontSize: isSmallScreen ? '1rem' : 'inherit' }} />}
              {access === "Student" && <SecurityOutlined sx={{ fontSize: isSmallScreen ? '1rem' : 'inherit' }} />}
              {access === "Teacher" && <LockOpenOutlined sx={{ fontSize: isSmallScreen ? '1rem' : 'inherit' }} />}
              <Typography
                color={colors.grey[100]}
                sx={{
                  ml: "5px",
                  display: isSmallScreen ? 'flex' : 'block',
                    fontSize: { xs: ".5rem", sm: ".6rem", md: ".8rem" },
                }}
              >
                {access}
              </Typography>
            </div>
          );
        }
      },
    ];

    return (
      <Box m="20px" >
        <Box display="flex" justifyContent="space-between" alignItems="center">
            <Header title='System Users' subtitle='Managing System Users & View Logs' />
        </Box>

        <Tabs 
            value={tabValue}
            onChange={(_, newValue) => setTabValue(newValue)}
            sx={{
            mt: '20px',
            fontWeight: 'bold',
            backgroundColor: '#f5f5f5',
            borderRadius: "5px",
             '& .MuiTab-root': { color: '#000',  fontSize: { xs: ".6rem", sm: ".7rem", md: ".8rem" }, },
            '& .Mui-selected': { color: 'black', fontWeight: 'bold', fontSize: { xs: ".6rem", sm: ".7rem", md: ".8rem" }, },
            '& .MuiTabs-indicator': { backgroundColor: '#1976d2', height: '3px', borderRadius: '10px' },
             
            }}
        >
            <Tab label="Registered Users" />
            <Tab label="User Logs" />
      </Tabs>

        {tabValue === 0 && (
      <Box
        m="20px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "outlined",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none"
          },
          "& .MuiDataGrid-columnHeader": {
            // backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
            fontSize: { xs: ".6rem", sm: ".7rem", md: ".8rem" },
          },
          "& .MuiDataGrid-virtualScroller": {
            // backgroundColor: colors.primary[400],
            fontSize: { xs: ".5rem", sm: ".6rem", md: ".8rem" },
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            fontSize: { xs: ".2rem", sm: ".7rem", md: ".9rem" },
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
              color: `${colors.grey[100]} !important`,
          },
          "& .MuiDataGrid-columnHeader, & .MuiDataGrid-cell": {
              '@media (max-width: 900px)': {
                  '&.MuiDataGrid-columnHeader--hide, &.MuiDataGrid-cell--hide': {
                      display: 'none !important',
                  },
              },
          },
        }}
      >

            <DataGrid
                rows={mockDataSystemUsers}
                columns={columns}
                  // The new, simpler way to show the default toolbar:
                showToolbar
                  // If you need specific features like quick filter, you might still use slotProps:
                slotProps={{
                toolbar: {
                  // Conditionally show/hide the quick filter input
                  showQuickFilter: !isExtraSmallScreen, // Hide quick filter on extra small screens
                  quickFilterProps: {
                    // You can add more props to the quick filter input itself if needed
                    // For example, adjust size or variant:
                    // size: isSmallScreen ? 'small' : 'medium',
                    // variant: 'outlined',
                    
                  },
                  // Conditionally disable toolbar buttons on smaller screens
                  printOptions: {
                    disableToolbarButton: isSmallScreen, // Disable print button on small screens
                  },
                  csvOptions: {
                    disableToolbarButton: isSmallScreen, // Disable CSV export button on small screens
                  },
                  // For column and density, you might consider a custom toolbar or a menu
                  // as there isn't a direct `disableToolbarButton` for them.
                  // If you truly need to hide them, you'd likely need a custom toolbar component.
                },
              }}
          />
              
              </Box>
            )}
      
            {tabValue === 1 && (
              <Box
        m="20px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "outlined",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none"
          },
          "& .MuiDataGrid-columnHeader": {
            // backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
            fontSize: { xs: ".6rem", sm: ".7rem", md: ".8rem" },
          },
          "& .MuiDataGrid-virtualScroller": {
            // backgroundColor: colors.primary[400],
            fontSize: { xs: ".5rem", sm: ".6rem", md: ".8rem" },
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            fontSize: { xs: ".2rem", sm: ".7rem", md: ".9rem" },
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
              color: `${colors.grey[100]} !important`,
          },
          "& .MuiDataGrid-columnHeader, & .MuiDataGrid-cell": {
              '@media (max-width: 900px)': {
                  '&.MuiDataGrid-columnHeader--hide, &.MuiDataGrid-cell--hide': {
                      display: 'none !important',
                  },
              },
          },
        }}
      >
              
                  <DataGrid
                            rows={mockDataSystemUsers}
                            columns={columns}
                             // The new, simpler way to show the default toolbar:
          showToolbar
          // If you need specific features like quick filter, you might still use slotProps:
          slotProps={{
             toolbar: {
              // Conditionally show/hide the quick filter input
              showQuickFilter: !isExtraSmallScreen, // Hide quick filter on extra small screens
              quickFilterProps: {
                // You can add more props to the quick filter input itself if needed
                // For example, adjust size or variant:
                // size: isSmallScreen ? 'small' : 'medium',
                // variant: 'outlined',
                
              },
              // Conditionally disable toolbar buttons on smaller screens
              printOptions: {
                disableToolbarButton: isSmallScreen, // Disable print button on small screens
              },
              csvOptions: {
                disableToolbarButton: isSmallScreen, // Disable CSV export button on small screens
              },
              // For column and density, you might consider a custom toolbar or a menu
              // as there isn't a direct `disableToolbarButton` for them.
              // If you truly need to hide them, you'd likely need a custom toolbar component.
            },
          }}
                          />
               
              </Box>
            )}
      </Box>
    );
  };

export default UserManagement