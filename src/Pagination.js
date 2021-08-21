import React from "react";

const Pagination = ({ incre, decre }) => {
  return (
    <>
      <div className="row">
        <div className="mt-5">
          <button className="btn btn-dark mx-3" onClick={() => decre()}>
            1
          </button>
          <button className="btn btn-dark" onClick={() => incre()}>
            2
          </button>
        </div>
      </div>
    </>
  );
};

export default Pagination;
