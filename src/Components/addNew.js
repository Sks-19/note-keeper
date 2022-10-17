import { useDispatch, useSelector } from "react-redux";
import { noteActions } from "../store/note_item";
import AddNav from "./addNavbar";

const AddNew = () => {
  const dispatch = useDispatch();
  const getNotes = JSON.parse(localStorage.getItem("keepNotes") || []);
  const noteItems = useSelector((state) => state.note.noteItems);

  let title, body, tagLine;
  const handleChange = (e) => {
    e.preventDefault();
    title = document.getElementById("newTitle").value;
    body = document.getElementById("newBody").value;
    tagLine = document.getElementById("newTagline").value;

    if (title !== "" && body !== "" && tagLine !== "") {
      dispatch(
        noteActions.addNote({ id: noteItems.length, title, body, tagLine })
      );
      getNotes?.push({ id: noteItems.length, title, body, tagLine });
      localStorage.setItem("keepNotes", JSON.stringify(getNotes));
    } else {
      console.log("Not Matched...");
    }
  };

  return (
    <>
      <AddNav />
      <div className="container-fluid" id="handleForm" onBlur={handleChange}>
        <form>
          <div className="form-group pt-3">
            <input
              type="text"
              className="form-control text-white h1"
              id="newTitle"
              placeholder="Title"
              style={{ borderStyle: "none", backgroundColor: "#000000" }}
            />
          </div>
          <div className="form-group">
            <textarea
              className="form-control text-white p"
              id="newBody"
              placeholder="Note"
              style={{ borderStyle: "none", backgroundColor: "#000000" }}
            ></textarea>
          </div>
          <div className="form-group py-3">
            <input
              type="text"
              className="form-control text-white p"
              id="newTagline"
              placeholder="#tagline"
              style={{ borderStyle: "none", backgroundColor: "#000000" }}
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default AddNew;
