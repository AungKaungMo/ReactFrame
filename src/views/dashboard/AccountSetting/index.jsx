import { useTheme } from "@emotion/react";
import { Grid, Paper, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import React from "react";
import { useDispatch } from "react-redux";
import { colorTypeChange } from "@/store/SwitchThemeSlice";
import { IconCheck } from "@tabler/icons";

const index = () => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const items = [
    {
      id: 1,
      bgColor: "red",
      value: "red",
      isChecked: localStorage.getItem("colorType") == "red" ? true : false,
    },
    {
      id: 2,
      bgColor: "green",
      value: "green",
      isChecked: localStorage.getItem("colorType") == "green" ? true : false,
    },
    {
      id: 3,
      bgColor: "#964B00",
      value: "brown",
      isChecked: localStorage.getItem("colorType") == "brown" ? true : false,
    },
    {
      id: 4,
      bgColor: "purple",
      value: "purple",
      isChecked: localStorage.getItem("colorType") == "purple" ? true : false,
    },
    {
      id: 5,
      bgColor: "cyan",
      value: "cyan",
      isChecked: localStorage.getItem("colorType") == "cyan" ? true : false,
    },
    {
      id: 6,
      bgColor: "pink",
      value: "pink",
      isChecked: localStorage.getItem("colorType") == "pink" ? true : false,
    },
  ];

  const switchTheme = (value) => {
    dispatch(colorTypeChange(value));
  };

  return (
    <Paper
      sx={{
        padding: "4em",
        backgroundColor: theme.palette.currentState.bgColor,
        boxShadow: 4,
        minHeight: "80vh",
        mx: "10px",
      }}
    >
      <Grid container>
        <Grid item xs={6} md={6}>
          <Typography variant="h4">Choose Recommanded Colors</Typography>
          <Box sx={{ width: "430px" }}>
            <Stack direction="row" mt={4} flexWrap="wrap">
              {items.map((item) => (
                <Paper
                  key={item.id}
                  sx={{
                    mr: "10px",
                    mb: "10px",
                    backgroundColor: item.bgColor,
                    padding: "40px",
                    borderRadius: "100%",
                    transition: "all .2s ease-in-out",
                    position: "relative",
                    cursor: "pointer",
                    "&:hover": {
                      opacity: 0.6,
                    },
                    opacity: item.isChecked ? 0.6 : 1,
                  }}
                  onClick={() => switchTheme(item.value)}
                >
                  {item.isChecked && (
                    <IconCheck
                      color="white"
                      size={30}
                      style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                      }}
                    />
                  )}
                </Paper>
              ))}
            </Stack>
          </Box>
        </Grid>
        <Grid item xs={6} md={6}>
          <Typography variant="h4">Choose Customization Colors</Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default index;
