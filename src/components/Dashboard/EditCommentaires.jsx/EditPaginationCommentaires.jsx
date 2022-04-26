import React from "react";
import { Link } from "react-router-dom";

const EditPaginationCommentaires = (props) => {
  const {
    totalComments,
    commentsPerPage,
    paginate,
    currentPage,
    setCurrentPage,
    totalPage,
  } = props;

  const prevPage = (pageNumber) => {
    if (pageNumber > 1) {
      setCurrentPage(pageNumber - 1);
    }
  };

  const nextPage = (pageNumber) => {
    if (pageNumber < totalPage.length) {
      setCurrentPage(pageNumber + 1);
    }
  };

  return (
    <nav className="flex">
      <ul className="flex w-full justify-content-center items-center">
        <div className="w-full flex justify-center items-center">
          <li>
            <Link
              className="page-link text-neutral-800 hover:bg-stone-200 hover:text-neutral-900 active:text-neutral-700 active:bg-stone-200 active:ring-0 focus:ring-0 focus:bg-stone-200 focus:text-neutral-800"
              to={"#!"}
              onClick={() => prevPage(currentPage)}
            >
              Précédent
            </Link>
          </li>
          {totalPage.map((number) => (
            <li key={number}>
              <Link
                onClick={() => paginate(number)}
                to={"#!"}
                className="page-link text-neutral-800 hover:bg-stone-200 hover:text-neutral-900 active:text-neutral-700 active:bg-stone-200 active:ring-0 focus:ring-0 focus:bg-stone-200 focus:text-neutral-800"
              >
                {number}
              </Link>
            </li>
          ))}
          <li>
            <Link
              className="page-link text-neutral-800 hover:bg-stone-200 hover:text-neutral-900 active:text-neutral-700 active:bg-stone-200 active:ring-0 focus:ring-0 focus:bg-stone-200 focus:text-neutral-800"
              to={"#!"}
              onClick={() => nextPage(currentPage)}
            >
              Suivant
            </Link>
          </li>
        </div>
        {/* <div className="w-1/5 flex flex-col justify-center">
          <p>
            Page: {currentPage} / {totalPage.length}
          </p>
          <p className="mr-10">Total: {totalComments} commentaires</p>
        </div> */}
      </ul>
    </nav>
  );
};
export default EditPaginationCommentaires;
