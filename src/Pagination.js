import React from "react";
import T from "prop-types";

const Pagination = ({ page, total, onPageChange }) => {
  const nextClick = () => {
    onPageChange(page + 1);
  };
  return (
    <div className="pagination">
      <button id="prev-btn" className="pagination-button">
        ❮
      </button>
      <input id="page-input" value={page} type="text" />
      <span>з</span>
      <span id="total-page">{total}</span>
      <button onClick={nextClick} id="next-btn" className="pagination-button">
        ❯
      </button>
    </div>
  );
};

Pagination.defaultProps = {
  page: 1,
  total: 1
};

Pagination.propTypes = {
  page: T.number.isRequired,
  total: T.number.isRequired
};

export default Pagination;
