import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { GrPrevious, GrNext } from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";
import { showActions } from "../store/show_items";

const Pagination = () => {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(0);

  const noteItems = useSelector((state) => state.note.noteItems);
  const itemsPerPage = 6;
  const pageVisited = currentPage * itemsPerPage;
  const pageCount = Math.ceil(noteItems.length / itemsPerPage);

  const handlePageClick = (e) => {
    setCurrentPage(e.selected);
  };
  useEffect(() => {
    const show = noteItems.slice(pageVisited, pageVisited + itemsPerPage);
    dispatch(showActions.setShowItems(show));
  }, [pageVisited]);

  return (
    <>
      {noteItems?.length <= 6 ? (
        <></>
      ) : (
        <ReactPaginate
          previousLabel={<GrPrevious />}
          nextLabel={<GrNext />}
          pageCount={pageCount}
          pageRangeDisplayed={5}
          renderOnZeroPageCount={null}
          onPageChange={handlePageClick}
          containerClassName={"pagination justify-content-center"}
          pageClassName={"page-item"}
          pageLinkClassName={"page-link"}
          previousClassName={"page-item"}
          previousLinkClassName={"page-link bg-dark"}
          nextClassName={"page-item"}
          nextLinkClassName={"page-link bg-dark"}
          activeClassName={"active"}
        />
      )}
    </>
  );
};

export default Pagination;
