import { createSlice } from "@reduxjs/toolkit";

const showSlice = createSlice({
  name: "show",
  initialState: { showItems: [] },
  reducers: {
    setShowItems(state, action) {
      const currentItems = action.payload;
      state.showItems = currentItems;
    },
  },
});

export const showActions = showSlice.actions;
export default showSlice;
