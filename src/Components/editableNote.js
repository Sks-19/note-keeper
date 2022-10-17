import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { noteActions } from "../store/note_item";
import AddNav from "./addNavbar";
import "./editableNote.css";

const Editable = () => {
  const dispatch = useDispatch();
  const noteItems = useSelector((state) => state.note.noteItems);
  const location = useLocation();
  const { state } = location;

  let changedTitle, changedBody, changedTagLine;
  const handleChange = (e) => {
    e.preventDefault();
    changedTitle = document.getElementById("titleChange").textContent;
    changedBody = document.getElementById("bodyChange").textContent;
    changedTagLine = document.getElementById("tagLineChange").textContent;
    // console.log("ch", changedBody, changedTitle);
  };

  const handleBlur = (e) => {
    e.preventDefault();

    if (changedBody === "" && changedTitle === "" && changedTagLine === "") {
      const filteredNotes = noteItems?.filter((note) => note.id !== state.id);
      dispatch(noteActions.updateNote(filteredNotes));
      localStorage.setItem("keepNotes", JSON.stringify(filteredNotes));
    } else {
      const updatedNotes = noteItems?.map((note) => {
        if (note.id === state.id) {
          return {
            ...note,
            title: changedTitle,
            body: changedBody,
            tagLine: changedTagLine,
          };
        }
        return note;
      });
      dispatch(noteActions.updateNote(updatedNotes));
      localStorage.setItem("keepNotes", JSON.stringify(updatedNotes));
    }
  };

  return (
    <>
      <AddNav
        id={state.id}
        title={state.title}
        body={state.body}
        tagLine={state.tagLine}
      />

      <div
        className="container-fluid p-4"
        key={state.id}
        onBlur={handleBlur}
        style={{ backgroundColor: "#000000" }}
      >
        <h1
          className="text-light"
          id="titleChange"
          onKeyUp={handleChange}
          contentEditable
          suppressContentEditableWarning={true}
          data-text="Title"
        >
          {state.title}
        </h1>
        <p
          className="text-light"
          id="bodyChange"
          contentEditable
          onKeyUp={handleChange}
          suppressContentEditableWarning={true}
          data-text="Note"
        >
          {state.body}
        </p>
        <p
          className="text-secondary"
          id="tagLineChange"
          contentEditable
          onKeyUp={handleChange}
          suppressContentEditableWarning={true}
          data-text="#tagline"
        >
          {state.tagLine}
        </p>
      </div>
    </>
  );
};

export default Editable;
