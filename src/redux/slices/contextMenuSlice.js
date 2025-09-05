import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  visible: false,
  x: 0,
  y: 0,
  options: ["New Folder", "Change Background", "Change Icon Size"],
};

const contextMenuSlice = createSlice({
  name: "contextMenuName",
  initialState,
  reducers: {
    openMenu: (state, action) => {
      const { x, y } = action.payload;
      state.visible = true;
      state.x = x;
      state.y = y;
    },
    closeMenu: (state) => {
      state.visible = false;
    },
  },
});

export const { openMenu, closeMenu } = contextMenuSlice.actions;

export default contextMenuSlice.reducer;
