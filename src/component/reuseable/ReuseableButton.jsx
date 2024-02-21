import { LoadingButton } from "@mui/lab";
import React from "react";
import SaveIcon from "@mui/icons-material/Save";
import { useTheme } from "@emotion/react";

const ReuseableButton = ({ loading = false, onClick, text = "Save" }) => {
  const theme = useTheme();
  return (
    <LoadingButton
      sx={{
        backgroundColor: theme.palette.currentState.primaryColor,
        color: theme.palette.currentState.transparentColor,
        px: 2,
        py: 1,
        "&.Mui-disabled": {
          color: theme.palette.currentState.transparentColor, // Text color
          backgroundColor: theme.palette.currentState.primaryColor, // Background color
        },
        "& .MuiCircularProgress-root": {
          color: theme.palette.currentState.transparentColor, // Loading circle color
        },
        "&:hover": {
          backgroundColor: theme.palette.currentState.primaryColor,
          color: theme.palette.currentState.transparentColor,
          boxShadow: 4,
        },
      }}
      loading={loading}
      loadingPosition="start"
      startIcon={<SaveIcon />}
      onClick={onClick}
    >
      <span color="white">{text}</span>
    </LoadingButton>
  );
};

export default ReuseableButton;
