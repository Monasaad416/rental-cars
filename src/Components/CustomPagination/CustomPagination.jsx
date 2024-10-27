import React from "react";

const CustomPagination = ({ total, current, onChangePage }) => {
  const pageNumbers = [];

  // Calculate the range of pages to show
  const range = 2; // Number of pages to show on either side of the current page
  for (let i = 1; i <= total; i++) {
    if (
      i <= range ||
      i > total - range ||
      (i >= current - range && i <= current + range)
    ) {
      pageNumbers.push(i);
    } else if (pageNumbers[pageNumbers.length - 1] !== "...") {
      pageNumbers.push("...");
    }
  }

  return (
    <nav>
      <ul className="pagination">
        <li className={`page-item ${current === 1 ? "disabled" : ""}`}>
          <button
            className="page-link"
            onClick={() => onChangePage(current - 1)}
          >
            Previous
          </button>
        </li>
        {pageNumbers.map((number, index) => (
          <li
            key={index}
            className={`page-item ${number === current ? "active" : ""}`}
          >
            {number === "..." ? (
              <span className="page-link">{number}</span>
            ) : (
              <button
                className="page-link"
                onClick={() => onChangePage(number)}
              >
                {number}
              </button>
            )}
          </li>
        ))}
        <li className={`page-item ${current === total ? "disabled" : ""}`}>
          <button
            className="page-link"
            onClick={() => onChangePage(current + 1)}
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default CustomPagination;
