import { configureStore } from "@reduxjs/toolkit";

import theme from "./slices/Theme.js";
// import whishlist from "./slices/whishlist.js";
import language from "./slices/language.js";

export default configureStore({
  reducer: {
    theme,
    // whishlist,
    language,
  },
});
