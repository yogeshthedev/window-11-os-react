import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const initialState = {
  icons: [
    {
      id: nanoid(),
      appName: "Browser",
      label: "Browser",
      icon: "/icon/edge.png",
      type: "app",
    },
    {
      id: nanoid(),
      appName: "Explorer",
      label: "File Explorer",
      icon: "/icon/explorer.png",
      type: "app",
    },
    {
      id: nanoid(),
      appName: "Notepad",
      label: "Notepad",
      icon: "/icon/notepad.png",
      type: "app",
    },
    {
      id: nanoid(),
      appName: "RecycleBin",
      label: "Recycle Bin",
      icon: "/icon/bin0.png",
      type: "app",
    },
    {
      id: nanoid(),
      appName: "Store",
      label: "Microsoft Store",
      icon: "/icon/store.png",
      type: "app",
    },
  ],
  selectedIcon: null,
};

const desktopSlice = createSlice({
  name: "desktop",
  initialState,
  reducers: {
    createFolder: (state) => {
      const existingFolders = state.icons.filter((i) => i.type === "folder");
      let name = "New Folder";
      let count = 0;

      while (existingFolders.some((f) => f.label === name)) {
        count++;
        name = `New Folder ${count}`;
      }

      state.icons.push({
        id: nanoid(),
        appName: name,
        label: name,
        icon: "/public/icon/win/folder.png",
        type: "folder",
      });
    },
    renameFolderName: (state) => {},
  },
});

export const { createFolder } = desktopSlice.actions;
export default desktopSlice.reducer;
