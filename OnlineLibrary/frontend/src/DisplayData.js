import React from "react";
import { Link } from "react-router-dom";

export default function DisplayData({ books }) {
  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>Title</th>
          <th>Author</th>
          <th>Topic</th>
          <th>Format</th>
          <th>Publication Year</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {books.map((book) => (
          <tr key={book._id}>
            <td>{book.booktitle}</td>
            <td>{book.author}</td>
            <td>{book.Topic}</td>
            <td>{book.formate}</td>
            <td>{book.PubYear}</td>
            <td>
              <Link to={`/edit/${book._id}`} className="btn btn-warning">
                Edit
              </Link>{" "}
              <Link to={`/delete/${book._id}`} className="btn btn-danger">
                Delete
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
