import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./theme";
import panelVisibilityReducer from "./panel";
import homeReducer from "./home";

export default configureStore({
  reducer: {
    theme: themeReducer,
    panelVisibility: panelVisibilityReducer,
    home: homeReducer,
  }
});