import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import theme from "./slices/Theme.js";
import wishlistReducer from "./slices/wishlist.js";
import language from "./slices/language.js";

const persistConfig = {
  key: 'root', // Key for the root of the state in local storage
  storage,
};

const persistedReducer = persistReducer(persistConfig, wishlistReducer);

const store = configureStore({
  reducer: {
    theme,
    wishlist: persistedReducer,
    language,
  },
});

const persistor = persistStore(store);

export { store, persistor };
