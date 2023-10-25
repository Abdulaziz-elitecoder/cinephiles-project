import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import theme from "./slices/Theme.js";
import wishlistReducer from "./slices/wishlist.js";
import language from "./slices/language.js";

const persistConfig = {
  key: "root", // Key for the root of the state in local storage
  storage,
};

const persistedReducer = persistReducer(persistConfig, wishlistReducer);
const languageReducer = persistReducer(persistConfig, language);
const themeReducer = persistReducer(persistConfig, theme);



const store = configureStore({
  reducer: {
    theme: themeReducer,
    wishlist: persistedReducer,
    language: languageReducer,
  },
});

const persistor = persistStore(store);

export { store, persistor };
