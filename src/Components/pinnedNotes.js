import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Pinned = () => {
  const pinnedItems = useSelector((state) => state.pinned.pinnedItems);

  return (
    <>
      {pinnedItems.length === 0 ? (
        <></>
      ) : (
        <div className="container py-2">
          <h5 className="text-light mx-1">Pinned</h5>
          <div className="cards">
            {pinnedItems?.map((pinned, index) => {
              return (
                <>
                  <NavLink
                    to={{ pathname: "/details" }}
                    state={{
                      id: pinned.id,
                      title: pinned.title,
                      body: pinned.body,
                    }}
                    className="NavLink"
                  >
                    <div
                      className="card m-1 mt-2"
                      style={{
                        width: "45vw",
                        backgroundColor: "#000000",
                        border: ".5px solid gray",
                      }}
                      key={index}
                    >
                      <div className="card-body">
                        <h5 className="card-title">{pinned.title}</h5>
                        <p className="card-text">{pinned.body}</p>
                        <p className="card-text text-secondary">
                          {pinned.tagLine}
                        </p>
                      </div>
                    </div>
                  </NavLink>
                </>
              );
            })}
          </div>
          <h5
            className="text-light mx-1 pt-4"
            style={{ marginBottom: "-10px" }}
          >
            Others
          </h5>
        </div>
      )}
    </>
  );
};

export default Pinned;
