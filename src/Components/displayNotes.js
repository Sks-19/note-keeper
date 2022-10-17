import "./displayNotes.scss";
import Navbar from "./Nav";
import Pagination from "./Pagination";
import Pinned from "./pinnedNotes";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const DisplayNotes = () => {
  const showLists = useSelector((state) => state.show.showItems);
  const pinnedLists = useSelector((state) => state.pinned.pinnedItems);

  const displayLists = showLists?.filter(
    (note) =>
      note.id !==
      pinnedLists
        ?.map((pin) => {
          return pin.id;
        })
        .find((val) => val === note.id)
  );

  return (
    <>
      <Navbar />
      <Pinned />
      <div className="container-fluid">
        <div className="cards">
          {displayLists?.map((note, index) => {
            return (
              <>
                <NavLink
                  to={{ pathname: "/details" }}
                  state={{
                    id: note.id,
                    title: note.title,
                    body: note.body,
                    tagLine: note.tagLine,
                  }}
                  className="NavLink"
                >
                  <div
                    className="card m-1 mt-2 "
                    style={{
                      width: "45vw",
                      backgroundColor: "#000000",
                      border: ".5px solid gray",
                    }}
                    key={index}
                  >
                    <div className="card-body">
                      <h5 className="card-title">{note.title}</h5>
                      <p className="card-text">{note.body}</p>
                      <p className="card-text text-secondary">{note.tagLine}</p>
                    </div>
                  </div>
                </NavLink>
              </>
            );
          })}
        </div>

        <div className="p-4 fixed-bottom">
          <Pagination />
        </div>
      </div>
    </>
  );
};

export default DisplayNotes;
