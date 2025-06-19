import { Box, useTheme, useMediaQuery } from '@mui/material';
import Header from '../../components/Header';
import { DataGrid, type GridColDef } from '@mui/x-data-grid'; // Removed GridToolbar from import
import { mockDataContacts } from '../../data/mockData';
import { tokens } from '../../theme';

export interface ContactUsers {
  id: number;
  name: string;
  email: string;
  age: number;
  phone: string;
  address: string;
  province: string;
  zipCode: string;
  registrarId: string;
}

const Contacts = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));
    const isExtraSmallScreen = useMediaQuery(theme.breakpoints.down('sm')); // e.g., for screens smaller than 'sm' (600px by default)

  const columns: GridColDef<ContactUsers>[] = [
    {
      field: "id",
      headerName: "ID",
      flex: 1,
      width: isSmallScreen ? 50 : 90,
    },
    {
      field: "registrarId",
      headerName: "Registrar ID",
    
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
      width: isSmallScreen ? 70 : 80,
    },
    {
      field: "phone",
      headerName: "Phone",
      flex: 1,
      minWidth: 100,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
      minWidth: 180,
    },
    {
      field: "address",
      headerName: "Address",
      flex: 1,
      minWidth: 100,
    },
    {
      field: "province",
      headerName: "Province",
      flex: 1,
      minWidth: 100,
    },
    {
      field: "zipCode",
      headerName: "ZipCode",
      flex: 1,
      minWidth: 100,
    },
  ];

  return (
    <Box m="20px" sx={{ height: '100vh', overflow: 'hidden'}}>
      <Header title='Contacts' subtitle='List of Contacts for Future Reference' />
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
          rows={mockDataContacts}
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
    </Box>
  );
};

export default Contacts;