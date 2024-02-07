import React from "react";

const Table = ({ products, currentPage, totalProducts, handlePageChange }) => {
  const pages = [];
  for (let i = 0; i < totalProducts / 10; i++) {
    pages.push(
      <li
        key={i}
        className={`mx-5 ${
          currentPage === i ? "bg-slate-400" : "bg-slate-200"
        } rounded-full p-3`}
        onClick={() => handlePageChange(i)}
      >
        <button>{i + 1}</button>
      </li>
    );
  }

  return (
    <div className="items-center mx-[20vw] mt-10">
      {products.map((p) => (
        <div
          key={p.id}
          className="w-full border-b-8 items-center flex justify-between p-3 bg-white"
        >
          <div>{p.id}</div>
          <div>{p.title}</div>
          <div>{p.price}</div>
        </div>
      ))}
      <ul className="flex text-center justify-center mt-6">{pages}</ul>
    </div>
  );
};

export default Table;
