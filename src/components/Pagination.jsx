import React from "react";
import "./css/Pagination.css";
const Pagination = ({ page, maxPage, setPage }) => {
  const pagesPerBlock = 6;
  const currentBlock = Math.ceil(page / pagesPerBlock);
  const maxBlock = Math.ceil(maxPage / pagesPerBlock);
  const arrPages = [];
  const initialPage = (currentBlock - 1) * pagesPerBlock + 1;
  const finalPage =
    maxBlock === currentBlock ? maxPage : currentBlock * pagesPerBlock;
  for (let i = initialPage; i <= finalPage; i++) {
    arrPages.push(i);
  }
  const handlePage = (number) => {
    setPage(number);
  };
  const handlePrevious = () => {
    if (page - 1 > 0) {
      setPage(page - 1);
    }
  };
  const handleNext = () => {
    if (page + 1 <= maxPage) {
      setPage(page + 1);
    }
  };
  return (
    <div className="pagination">
      <ul>
        <li onClick={handlePrevious}>◀</li>
      </ul>
      {arrPages.map((e) => (
        <li
          key={e}
          onClick={() => handlePage(e)}
          className={e === page && "pagination-active"}
        >
          {e}
        </li>
      ))}
      <li onClick={handleNext}>▶</li>
    </div>
  );
};

export default Pagination;
