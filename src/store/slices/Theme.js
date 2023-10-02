import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  current_theme: "light",
  available_theme: ["light", "dark"],
  default_theme: "light",
};

const theme = createSlice({
  name: "theme",
  initialState: INITIAL_STATE,
  reducers: {
    changeCurrentTheme: (state, action) => {
      state.current_theme = action.payload;
    },
  },
});

export const { changeCurrentTheme } = theme.actions;

export default theme.reducer;
