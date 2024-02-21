import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  moodType: "",
  colorType: localStorage.getItem("colorType")
    ? localStorage.getItem("colorType")
    : "purple",
  isCustomizedType: false,
};

const SwitchThemeSlice = createSlice({
  name: "switchTheme",
  initialState,
  reducers: {
    moodTypeChange: (state, action) => {
      state.moodType = action.payload;
      localStorage.setItem("moodType", state.moodType);
    },
    colorTypeChange: (state, action) => {
      state.colorType = action.payload;
      localStorage.setItem("colorType", state.colorType);
    },
    customizedTypeChange: (state, action) => {
      state.isCustomizedType = action.payload;
    },
  },
});

export const { moodTypeChange, colorTypeChange, customizedTypeChange } =
  SwitchThemeSlice.actions;
export default SwitchThemeSlice.reducer;
