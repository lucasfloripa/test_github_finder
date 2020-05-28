import React from "react";
import PropTypes from "prop-types";

function Pagination({ onSetCurrentPage, pagination }) {
  const pageNumbers = [];
  for (let i = 1; i <= pagination.pageCount; i++) {
    pageNumbers.push(i);
  }

  return (
    <ul className="pagination d-flex justify-content-center mb-3">
      {pageNumbers.map((number) => (
        <li key={number} className="page-item">
          <a
            href="!#"
            className="page-link"
            onClick={() => {
              onSetCurrentPage(number);
            }}
          >
            {number}
          </a>
        </li>
      ))}
    </ul>
  );
}

Pagination.propTypes = {
  pagination: PropTypes.object.isRequired,
  onSetCurrentPage: PropTypes.func.isRequired,
};

export default Pagination;
