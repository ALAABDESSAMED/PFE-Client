import React, { useState } from "react";

function Orders() {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(3); // Change this value as needed
  const orders = [
    { id: 1, order: "#2416", date: "October 1, 2023", status: "On hold", total: "$1,200.65 for 3 items" },
    { id: 2, order: "#2417", date: "October 2, 2023", status: "On hold", total: "$1,200.65 for 3 items" },
    { id: 3, order: "#2418", date: "October 3, 2023", status: "On hold", total: "$1,200.65 for 3 items" },
    { id: 4, order: "#2419", date: "October 4, 2023", status: "On hold", total: "$1,200.65 for 3 items" }
  ];

  // Logic to calculate pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = orders.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <table className="orders-table">
        <thead>
          <tr>
            <th>Order</th>
            <th>Date</th>
            <th>Status</th>
            <th>Total</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((order) => (
            <tr key={order.id}>
              <td>{order.order}</td>
              <td>{order.date}</td>
              <td>{order.status}</td>
              <td>{order.total}</td>
              <td><button className="btn btn-primary">VIEW</button></td>
            </tr>
          ))}
        </tbody>
      </table>
      <ul className="pagination">
        {[...Array(Math.ceil(orders.length / itemsPerPage)).keys()].map((number) => (
          <li key={number} className="page-item">
            <button onClick={() => paginate(number + 1)} className="page-link">
              {number + 1}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Orders;
