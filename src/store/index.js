import { configureStore } from "@reduxjs/toolkit";
import noteSlice from "./note_item";
import pinnedSlice from "./pinned_items";
import showSlice from "./show_items";

const store = configureStore({
  reducer: {
    note: noteSlice.reducer,
    show: showSlice.reducer,
    pinned: pinnedSlice.reducer,
  },
});

export default store;
