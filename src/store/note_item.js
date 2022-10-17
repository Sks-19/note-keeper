import { createSlice } from "@reduxjs/toolkit";

const noteSlice = createSlice({
  name: "note",
  initialState: { noteItems: [] },
  reducers: {
    addNote(state, action) {
      const newItems = action.payload;
      state.noteItems.push({
        id: newItems.id,
        title: newItems.title,
        body: newItems.body,
        tagLine: newItems.tagLine,
      });
    },
    updateNote(state, action) {
      const updatedNotes = action.payload;
      state.noteItems = updatedNotes;
    },
    deleteNote(state, action) {
      const id = action.payload;
      const filterNote = state.noteItems?.filter((note) => note.id !== id);
      state.noteItems = filterNote;
    },
  },
});

export const noteActions = noteSlice.actions;

export default noteSlice;
