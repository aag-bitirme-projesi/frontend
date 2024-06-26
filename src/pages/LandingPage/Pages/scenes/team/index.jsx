import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataProducts } from "../../data/mockData";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import Header from "../../components/Header";

const Team = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "name",
      headerName: "Name of the Product",
      flex: 1,
      cellClassName: "name-column--cell",
    },

    {
      field: "accessLimit",
      headerName: "Access Limit",
      flex: 1,
      renderCell: ({ row: { access } }) => {
        return (
<Box
  width="60%"
  m="0 auto"
  p="5px"
  display="flex"
  justifyContent="center"
  backgroundColor={access > 10 ? colors.greenAccent[600] : colors.blueAccent[500]}
  borderRadius="4px"
>
  {access > 0 && <AdminPanelSettingsOutlinedIcon />} {/* Show icon only if limit is above 0 */}
  <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
    {access}
  </Typography>
</Box>

        );
      },
    },
  ];

  return (
    <Box m="20px">
      <Header title="My Products" subtitle="Managing the Products" />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        <DataGrid checkboxSelection rows={mockDataProducts} columns={columns} />
      </Box>
    </Box>
  );
};

export default Team;
