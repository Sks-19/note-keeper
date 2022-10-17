import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import DisplayNotes from "./Components/displayNotes";
import Editable from "./Components/editableNote";
import AddNew from "./Components/addNew";
import "./App.css";
import { useDispatch } from "react-redux";
import { noteActions } from "./store/note_item";
import { showActions } from "./store/show_items";
import { pinnedActions } from "./store/pinned_items";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    if (!localStorage.getItem("keepNotes")) {
      localStorage.setItem("keepNotes", JSON.stringify([]));
    }
    if (!localStorage.getItem("pinnedNotes")) {
      localStorage.setItem("pinnedNotes", JSON.stringify([]));
    }
  }, []);

  useEffect(() => {
    const getItems = JSON.parse(localStorage.getItem("keepNotes"));
    const getPinnedItems = JSON.parse(localStorage.getItem("pinnedNotes"));
    dispatch(noteActions.updateNote(getItems));
    dispatch(showActions.setShowItems(getItems.slice(0, 6)));
    dispatch(pinnedActions.updatePinnedItems(getPinnedItems));
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<DisplayNotes />} />
        <Route path="/details" element={<Editable />} />
        <Route path="/add" element={<AddNew />} />
      </Routes>
    </>
  );
}

export default App;
