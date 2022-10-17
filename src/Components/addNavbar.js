import { NavLink } from "react-router-dom";
import { BiArrowBack, BiPin } from "react-icons/bi";
import { pinnedActions } from "../store/pinned_items";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const AddNav = ({ id, title, body, tagLine }) => {
  const dispatch = useDispatch();
  const pinned = useSelector((state) => state.pinned.pinnedItems);

  useEffect(() => {
    localStorage.setItem("pinnedNotes", JSON.stringify(pinned));
  }, [pinned]);

  const handlePinned = () => {
    dispatch(
      pinnedActions.addPinItems({
        id: id,
        title: title,
        body: body,
        tagLine: tagLine,
      })
    );
  };

  return (
    <>
      <nav className="navbar">
        <NavLink to="/" className="btn mx-3" style={{ borderStyle: "none" }}>
          <BiArrowBack style={{ fontSize: "1.6rem", color: "#fff" }} />
        </NavLink>
        <button
          to=""
          className="btn mx-3"
          style={{ borderStyle: "none" }}
          onClick={handlePinned}
        >
          <BiPin style={{ fontSize: "1.6rem", color: "#fff" }} />
        </button>
      </nav>
    </>
  );
};

export default AddNav;
