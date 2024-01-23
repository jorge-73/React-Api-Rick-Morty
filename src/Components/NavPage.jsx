export const NavPage = ({ page, setPage }) => {
  const nextPage = () => {
    setPage(page + 1);
  };

  const prevPage = () => {
    setPage((page === 1) ? page=1 : page - 1)
  };
  return (
    <div className="d-flex justify-content-between align-items-center">
      <button onClick={prevPage} className="btn btn-outline-success text-dark btn-sm p-2 fw-bold">
        Page: {page}
      </button>
      <button onClick={nextPage} className="btn btn-outline-success text-dark btn-sm p-2 fw-bold">
        Page: {page + 1}
      </button>
    </div>
  );
};
