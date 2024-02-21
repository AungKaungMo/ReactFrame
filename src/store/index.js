import { configureStore } from "@reduxjs/toolkit";
import CustomizationReducer from "./CustomizationSlice";
import SwitchThemeReducer from "./SwitchThemeSlice";

export const store = configureStore({
  reducer: {
    customization: CustomizationReducer,
    switchTheme: SwitchThemeReducer,
  },
});
