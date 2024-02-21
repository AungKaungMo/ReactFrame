import { Paper, Typography } from "@mui/material";
import * as React from "react";
import { useTheme } from "@emotion/react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Box, fontWeight } from "@mui/system";
import NoRowData from "@/component/reuseable/NoRowData";
import { useDemoData } from "@mui/x-data-grid-generator";

const VISIBLE_FIELDS = ["name", "rating", "country", "dateCreated", "isAdmin"];

const index = () => {
  const theme = useTheme();

  const { data } = useDemoData({
    dataSet: "Employee",
    visibleFields: VISIBLE_FIELDS,
    rowLength: 100,
  });

  const column = React.useMemo(
    () =>
      data.columns.filter((column) => VISIBLE_FIELDS.includes(column.field)),
    [data.columns]
  );
  let [columns, setcolumns] = React.useState([]);
  let [loading, setLoading] = React.useState(true);

  setTimeout(() => {
    setcolumns(column);
    setTimeout(() => {
      console.log(columns, "columns value are");
    }, 4000);
    setLoading(false);
  }, 2000);

  return (
    <>
      <Paper
        sx={{
          padding: "3em",
          backgroundColor: theme.palette.currentState.bgColor,
          boxShadow: 3,
          mx: "10px",
        }}
      >
        <Typography variant="h3" mb={3}>
          User List
        </Typography>
        <Box sx={{ width: "100%", minHeight: 340 }}>
          {data.length}
          <DataGrid
            loading={loading}
            {...data}
            autoHeight
            initialState={{
              ...data.initialState,
              pagination: { paginationModel: { pageSize: 10 } },
            }}
            pageSizeOptions={[10, 20, 30, 40, 50]}
            columns={columns}
            slots={{ toolbar: GridToolbar, noRowsOverlay: NoRowData }}
            slotProps={{
              toolbar: {
                showQuickFilter: true,
              },
            }}
            sx={{
              "--DataGrid-overlayHeight": "300px",
              "& .MuiDataGrid-columnHeader": {
                fontSize: "1.1em",
                fontWeight: "900",
              },
              "& .MuiDataGrid-row": {
                opacity: 0.8,
              },
            }}
          />
        </Box>
      </Paper>
    </>
  );
};

export default index;
