import React, { useState, useEffect } from "react";
import axios from "axios";
import DisplayData from "./DisplayData";

export default function DisplayBooksF1() {
  const [books, setBooks] = useState([]);
  let url = "http://localhost:5000/";

  useEffect(() => {
    axios
      .get(url + "allbooks")
      .then((res) => setBooks(res.data))
      .catch((err) => console.log(err));
  }, [url]);

  return (
    <div>
      <h3>Book List</h3>
      <DisplayData books={books} />
    </div>
  );
}
