import React, { useEffect, useState } from "react";
import Table from "./Table";

const Pagination = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    fetchUsers();
  }, [currentPage]);

  const fetchUsers = async () => {
    const url = `https://dummyjson.com/products?limit=10&skip=${
      10 * currentPage
    }&select=title,price`;
    const res = await fetch(url);
    const data = await res.json();
    setProducts(data.products);
    setTotal(data.total);
  };
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  return (
    <div>
      <Table
        products={products}
        currentPage={currentPage}
        totalProducts={total}
        handlePageChange={handlePageChange}
      />
    </div>
  );
};

export default Pagination;
