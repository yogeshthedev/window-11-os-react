import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const initialState = {
  windows: [],
  highestZIndex: 20,
};

export const windowSlice = createSlice({
  name: "window",
  initialState,
  reducers: {
    openWindow: (state, action) => {
      state.highestZIndex += 1;
      const { app, icon ,type } = action.payload;
      const newwindow = {
        id: nanoid(),
        app,
        icon,
        minimized: false,
        maximized: false,
        zIndex: state.highestZIndex,
        x: Math.floor(Math.random() * 600) + 50,
        y: Math.floor(Math.random() * 300) + 50,
        width: 700,
        height: 400,
        type
      };
      state.windows.push(newwindow);
    },
    closeWindow: (state, action) => {
      state.windows = state.windows.filter(
        (item) => item.id !== action.payload
      );
    },
    minimizeWindow: (state, action) => {
      state.windows = state.windows.map((window) =>
        window.id === action.payload
          ? { ...window, minimized: !window.minimized }
          : window
      );
    },
    maximizeWindow: (state, action) => {
      state.windows = state.windows.map((window) =>
        window.id === action.payload
          ? { ...window, maximized: !window.maximized }
          : window
      );
    },
    focusWindow: (state, action) => {
      state.highestZIndex += 1;
      state.windows = state.windows.map((window) =>
        window.id === action.payload
          ? { ...window, zIndex: state.highestZIndex }
          : window
      );
    },
    moveResizeWindow: (state, action) => {
      const { id, x, y, width, height } = action.payload;
      state.windows = state.windows.map((window) =>
        window.id === id
          ? {
              ...window,
              x,
              y,
              width: width || window.width,
              height: height || window.height,
            }
          : window
      );
    },
  },
});

export const {
  openWindow,
  closeWindow,
  minimizeWindow,
  maximizeWindow,
  focusWindow,
  moveResizeWindow,
} = windowSlice.actions;

export default windowSlice.reducer;
