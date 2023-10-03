import { configureStore } from "@reduxjs/toolkit";

import theme from "./slices/theme.js";
import wishlist from "./slices/wishlist.js";
import language from "./slices/language.js";

export default configureStore({
  reducer: {
    theme,
    wishlist,
    language,
  },
});
