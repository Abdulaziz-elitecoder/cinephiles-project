import { configureStore } from "@reduxjs/toolkit";
import theme from "./slices/Theme.js";

export default configureStore({
  reducer: {
    theme,
  },
});
