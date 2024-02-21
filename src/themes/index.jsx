import { createTheme } from "@mui/material/styles";
import { useSelector } from "react-redux";

// assets
import colors from "@/assets/scss/_themes-vars.module.scss";

// project imports
import themePalette from "./palette";
import themeTypography from "./typography";
import { useEffect, useState } from "react";

export const theme = () => {
  const color = colors;
  let colorType = useSelector((state) => state.switchTheme.colorType);

  const themeOption = {
    colors: color,
    mood: "light",
    colorState: colorType,
  };

  const themeOptions = {
    direction: "ltr",
    palette: themePalette(themeOption),
    mixins: {
      toolbar: {
        minHeight: "48px",
        padding: "16px",
        "@media (min-width: 600px)": {
          minHeight: "48px",
        },
      },
    },
    typography: themeTypography(themeOption),
  };

  const themes = createTheme(themeOptions);

  return themes;
};

export default theme;
