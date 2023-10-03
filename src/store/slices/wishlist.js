// import { createSlice } from "@reduxjs/toolkit";

// const INITIAL_STATE = {
//   wishlistItems: [],
// };

// const wishlist = createSlice({
//   name: "wishlist",
//   initialState: INITIAL_STATE,
//   reducers: {
//     addToWishlist: (state, action) => {
//       const newItem = action.payload;
//       state.wishlistItems.push(newItem);
//       console.log("Item added to wishlist");
//     },
//     removeFromWishlist: (state, action) => {
//       const itemIdToRemove = action.payload;
//       state.wishlistItems = state.wishlistItems.filter(
//         (item) => item.id !== itemIdToRemove
//       );
//     },
//   },
// });

// export const { addToWishlist, removeFromWishlist } = wishlist.actions;

// export default wishlist.reducer;


// wishlistSlice.js

import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: {
    wishlistItems: [], // Initial wishlist is empty
  },
  reducers: {
    addToWishlist: (state, action) => {
      const movie = action.payload;
      if (!state.wishlistItems.find((item) => item.id === movie.id)) {
        state.wishlistItems.push(movie);
      }
    },
    removeFromWishlist: (state, action) => {
      const movieId = action.payload.id;
      state.wishlistItems = state.wishlistItems.filter(
        (item) => item.id !== movieId
      );
    },
  },
});

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;

export default wishlistSlice.reducer;

