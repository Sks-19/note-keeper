import { createSlice } from "@reduxjs/toolkit";
import swal from "sweetalert";

const pinnedSlice = createSlice({
  name: "pinned",
  initialState: { pinnedItems: [] },
  reducers: {
    addPinItems(state, action) {
      const pinnedNote = action.payload;
      const isPinned = state.pinnedItems.find(
        (note) => note.id === pinnedNote.id
      );
      if (isPinned) {
        const filteredNote = state.pinnedItems?.filter(
          (note) => note.id !== pinnedNote.id
        );
        state.pinnedItems = filteredNote;
        swal("Opps!", "Removed from pinned list!", "warning");
      } else {
        state.pinnedItems.push(pinnedNote);
        swal("congrats", "Added to pinned list!", "success");
      }
    },
    updatePinnedItems(state, action) {
      const item = action.payload;
      state.pinnedItems = item;
    },
  },
});

export const pinnedActions = pinnedSlice.actions;

export default pinnedSlice;
