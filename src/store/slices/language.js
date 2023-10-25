import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  current_lang: "EN",
  available_lang: ["EN", "AR"],
  default_lang: "EN",
};

const language = createSlice({
  name: "language",
  initialState: INITIAL_STATE,
  reducers: {
    changeCurrentLang: (state, action) => {
      state.current_lang = action.payload;
    },
  },
});

export const { changeCurrentLang } = language.actions;

export default language.reducer;
