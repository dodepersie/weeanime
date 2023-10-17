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
    <div class="join">
      {page === 1 ? null : (
        <button class="join-item btn" onClick={handlePrevPage}>
          «
        </button>
      )}
      <button class="join-item btn btn-secondary">
        {page} / {lastPage}
      </button>
      {page < lastPage && (
        <button class="join-item btn" onClick={handleNextPage}>
          »
        </button>
      )}
    </div>
  );
};

export default Pagination;
