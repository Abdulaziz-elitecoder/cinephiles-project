import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  wishlistItems: [],
};

const wishlist = createSlice({
  name: "wishlist",
  initialState: INITIAL_STATE,
  reducers: {
    addToWishlist: (state, action) => {
      const newItem = action.payload;
      state.wishlistItems.push(newItem);
      console.log("Item added to wishlist");
    },
    removeFromWishlist: (state, action) => {
      const itemIdToRemove = action.payload;
      state.wishlistItems = state.wishlistItems.filter(
        (item) => item.id !== itemIdToRemove
      );
    },
  },
});

export const { addToWishlist, removeFromWishlist } = wishlist.actions;

export default wishlist.reducer;
