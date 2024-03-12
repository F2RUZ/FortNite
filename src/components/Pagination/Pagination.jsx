import React from "react";

const Pagination = ({ totalPost, postsPerPage, setCurrenPage }) => {
  let pages = [];
  for (let i = 1; i <= Math.ceil(totalPost / postsPerPage); i++) {
    pages.push(i);
  }
  return (
    <div className="paginations">
      {pages.map((page, i) => (
        <button
          key={i}
          onClick={() => {
            setCurrenPage(page);
          }}
          className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800"
        >
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            {page}
          </span>
        </button>
      ))}
    </div>
  );
};

export default Pagination;
