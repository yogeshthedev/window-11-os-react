import { createSlice } from "@reduxjs/toolkit";
import { backgrounds } from "./../../data/backgrounds";

const initialState = {
  startMenuOpen: false,
  searchMenuOpen: false,
  powerOption: false,
  backgroundIndex: 0,
  theme: "dark",
  toggleHiddenItems: false,
  toggleSystemTray: false,
  brightness: 100,
  nightLight: false,
};

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleHiddenItems: (state) => {
      state.toggleHiddenItems = !state.toggleHiddenItems;
    },
    closeHiddenItems:(state)=>{
      state.toggleHiddenItems = false
    },
    toggleSystemTray: (state) => {
      state.toggleSystemTray = !state.toggleSystemTray;
    },
    closeSystemTray:(state)=>{
      state.toggleSystemTray = false
    },
    toggleStartMenu: (state) => {
      state.startMenuOpen = !state.startMenuOpen;
    },
    closeStartMenu: (state) => {
      state.startMenuOpen = false;
    },
    toggeSearchMenu: (state) => {
      state.searchMenuOpen = !state.searchMenuOpen;
    },
    togglepowerOption: (state) => {
      state.powerOption = !state.powerOption;
    },
    toggleBackgroundImage: (state) => {
      state.backgroundIndex =
        (state.backgroundIndex + 1) % backgrounds.length;
    },

    toggleTheme: (state) => {
      state.theme = state.theme === "light" ? "dark" : "light";
    },
    setBrightness: (state, action) => {
      state.brightness = action.payload;
    },
    toggleNightLight: (state) => {
      state.nightLight = !state.nightLight;
    },
  },
});

export const {
  toggleHiddenItems,
  closeHiddenItems,
  toggleSystemTray,
  closeSystemTray,
  toggleStartMenu,
  closeStartMenu,
  toggeSearchMenu,
  togglepowerOption,
  toggleBackgroundImage,
  toggleTheme,
  setBrightness,
  toggleNightLight,
} = uiSlice.actions;

export default uiSlice.reducer;
