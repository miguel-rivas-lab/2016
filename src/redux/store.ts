import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./theme";
import panelVisibilityReducer from "./panel";

export default configureStore({
  reducer: {
    theme: themeReducer,
    panelVisibility: panelVisibilityReducer,
  }
});