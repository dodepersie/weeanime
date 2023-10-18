"use client";

const Pagination = ({ page, lastPage, setPage }) => {
  const scrollTop = () => {
    scrollTo({
      behavior: "smooth",
      top: 0,
    });
  };

  const handleNextPage = () => {
    setPage((prevState) => prevState + 1);
    scrollTop();
  };

  const handlePrevPage = () => {
    setPage((prevState) => prevState - 1);
    scrollTop();
  };

  return (
    <div className="join">
      {page === 1 ? null : (
        <button className="join-item btn" onClick={handlePrevPage}>
          «
        </button>
      )}
      <button className="join-item btn btn-active cursor-default">
        {page} / {lastPage}
      </button>
      {page < lastPage && (
        <button className="join-item btn" onClick={handleNextPage}>
          »
        </button>
      )}
    </div>
  );
};

export default Pagination;
