import React from "react";
import PropTypes from "prop-types";

const Pagination = ({ pagination, onPagination }) => {
  return (
    <ul className="pagination d-flex justify-content-center mb-3">
      {pagination.map((page, index) => (
        <li key={index} className="page-item">
          <button
            className="page-link"
            onClick={() => onPagination(page.url)}
          >
            {page.btn}
          </button>
        </li>
      ))}
    </ul>
  );
};

Pagination.propTypes = {
  pagination: PropTypes.array.isRequired,
  onPagination: PropTypes.func.isRequired,
};

export default Pagination;
