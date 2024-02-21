import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: [], // for active default menu
  defaultId: "default",
  opened: true,
};

const CustomizationSlice = createSlice({
  name: "customization", // Optional: Specify a name for the slice
  initialState,
  reducers: {
    menuOpen: (state, action) => {
      const id = action.payload;
      state.isOpen = [id];
    },
    setMenu: (state, action) => {
      state.opened = action.payload;
    },
  },
});

export const { menuOpen, setMenu } = CustomizationSlice.actions;
export default CustomizationSlice.reducer;
