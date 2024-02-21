import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

// material-ui
import { useTheme } from "@mui/material/styles";
import {
  Button,
  Divider,
  Drawer,
  Fab,
  FormControl,
  FormControlLabel,
  FormGroup,
  Grid,
  IconButton,
  Paper,
  Radio,
  RadioGroup,
  Slider,
  Switch,
  Tooltip,
  Typography,
} from "@mui/material";
import { IconCheck, IconSettings } from "@tabler/icons";

// third-party
import PerfectScrollbar from "react-perfect-scrollbar";

// project imports
import AnimateButton from "@/component/extended/AnimateButton";
import { Stack } from "@mui/system";
import styled from "@emotion/styled";
import { colorTypeChange, moodTypeChange } from "@/store/SwitchThemeSlice";

// ==============================|| LIVE CUSTOMIZATION ||============================== //

const Customization = () => {
  const theme = useTheme();
  const dispatch = useDispatch();

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

  // drawer on/off
  const [open, setOpen] = useState(false);
  const handleToggle = () => {
    setOpen(!open);
  };

  //Switch Theme
  const switchTheme = (value) => {
    dispatch(colorTypeChange(value));
  };

  const resetTheme = () => {
    dispatch(colorTypeChange("purple"));
    dispatch(moodTypeChange("light"));
    localStorage.removeItem("colorType");
    localStorage.removeItem("moodType");
  };

  //Switch Toggle
  const MaterialUISwitch = styled(Switch)(({ theme }) => ({
    width: 62,
    height: 34,
    padding: 7,
    "& .MuiSwitch-switchBase": {
      margin: 1,
      padding: 0,
      transform: "translateX(6px)",
      "&.Mui-checked": {
        color: "#fff",
        transform: "translateX(22px)",
        "& .MuiSwitch-thumb:before": {
          backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
            "#fff"
          )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
        },
        "& + .MuiSwitch-track": {
          opacity: 1,
          backgroundColor:
            theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
        },
      },
    },
    "& .MuiSwitch-thumb": {
      backgroundColor: theme.palette.mode === "dark" ? "#003892" : "#001e3c",
      width: 32,
      height: 32,
      "&::before": {
        content: "''",
        position: "absolute",
        width: "100%",
        height: "100%",
        left: 0,
        top: 0,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          "#fff"
        )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
      },
    },
    "& .MuiSwitch-track": {
      opacity: 1,
      backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
      borderRadius: 20 / 2,
    },
  }));

  const handleChangeMode = (e) => {
    const mode = e.target.checked ? "dark" : "light";
    dispatch(moodTypeChange(mode));
  };

  return (
    <>
      {/* toggle button */}
      <Tooltip title="Live Customize">
        <Fab
          component="div"
          onClick={handleToggle}
          size="medium"
          variant="circular"
          // color="secondary"
          sx={{
            backgroundColor: theme.palette.currentState.primaryColor,
            color: theme.palette.currentState.palePrimaryColor,
            borderRadius: 0,
            borderTopLeftRadius: "50%",
            borderBottomLeftRadius: "50%",
            borderTopRightRadius: "50%",
            borderBottomRightRadius: "4px",
            top: "25%",
            transition: "all .2s ease-in-out",
            position: "fixed",
            right: 10,
            zIndex: theme.zIndex.speedDial,
            "&:hover": {
              backgroundColor: theme.palette.currentState.primaryColor,
              color: theme.palette.currentState.palePrimaryColor,
            },
          }}
        >
          <AnimateButton type="rotate">
            <IconButton color="inherit" size="large" disableRipple>
              <IconSettings />
            </IconButton>
          </AnimateButton>
        </Fab>
      </Tooltip>

      <Drawer
        anchor="right"
        onClose={handleToggle}
        open={open}
        PaperProps={{
          sx: {
            width: 380,
          },
        }}
      >
        <PerfectScrollbar component="div">
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            p={3}
          >
            <Typography variant="h4">Theme Customization</Typography>
            <Button variant="outlined" color="error" onClick={resetTheme}>
              Reset
            </Button>
          </Stack>
          <Divider />

          <Stack
            p={3}
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="h4">Switch Mode (Dark / Light)</Typography>
            {/* <FormGroup> */}
            <FormControlLabel
              onChange={handleChangeMode}
              control={<MaterialUISwitch sx={{ m: 1 }} defaultChecked />}
            />
            {/* </FormGroup> */}
          </Stack>
          <Divider />
          <Stack p={3}>
            <Typography variant="h4">Recommand Theme</Typography>
            <Stack direction="row" flexWrap="wrap" mt={4}>
              {items.map((item) => (
                <Paper
                  key={item.id}
                  sx={{
                    mr: "10px",
                    mb: "10px",
                    backgroundColor: item.bgColor,
                    padding: "30px",
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
          </Stack>
        </PerfectScrollbar>
      </Drawer>
    </>
  );
};

export default Customization;
