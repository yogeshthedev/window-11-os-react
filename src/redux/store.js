import { configureStore } from "@reduxjs/toolkit";

import uiReducer from "./slices/uiSlice";
import windowReducer from "./slices/windowSlice";
import contextReducer from "./slices/contextMenuSlice";
import desktopReducer from "./slices/desktopSlice";

export const store = configureStore({
  reducer: {
    ui: uiReducer,
    window: windowReducer,
    contextMenu: contextReducer,
    desktop: desktopReducer,
    
  },
});
