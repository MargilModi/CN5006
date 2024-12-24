import React, { useState } from "react";
import axios from "axios";

export default function Book_Form() {
  let url = "http://localhost:5000/";
  const [state, setState] = useState({
    booktitle: "",
    author: "",
    formate: "",
    Topic: "",
    PubYear: 1990,
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setState({ ...state, [e.target.name]: value });
  };

  const OnSubmit = (e) => {
    e.preventDefault();
    const bookdata = {
      booktitle: state.booktitle,
      PubYear: state.PubYear,
      author: state.author,
      Topic: state.Topic,
      formate: state.formate,
    };

    axios.post(url + "addbooks", bookdata).then((res) => console.log(res.data));
  };

  return (
    <div style={{ marginTop: 10 }}>
      <h3>Add Book</h3>
      <form onSubmit={OnSubmit} method="Post">
        <div className="form-group">
          <label>Book Title:</label>
          <input
            className="form-control"
            type="text"
            name="booktitle"
            value={state.booktitle}
            onChange={handleChange}
          />
        </div>
        {/* Additional form inputs */}
        <div className="form-group">
          <center>
            <input type="submit" value="Add this book" className="btn btn-primary" />
          </center>
        </div>
      </form>
    </div>
  );
}
