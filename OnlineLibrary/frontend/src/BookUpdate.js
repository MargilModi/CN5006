import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

export default function BookUpdate() {
  const { id } = useParams();
  const navigate = useNavigate();
  let url = "http://localhost:5000/";
  const [state, setState] = useState({
    booktitle: "",
    author: "",
    formate: "",
    Topic: "",
    PubYear: 1990,
  });

  useEffect(() => {
    axios.get(url + "getbook/" + id).then((res) => setState(res.data));
  }, [id, url]);

  const handleChange = (e) => {
    const value = e.target.value;
    setState({ ...state, [e.target.name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .post(url + "updatebook/" + id, state)
      .then((res) => {
        console.log(res.data);
        navigate("/DisplayBooksF1");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div style={{ marginTop: 10 }}>
      <h3>Update Book</h3>
      <form onSubmit={onSubmit}>
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
            <input type="submit" value="Update this book" className="btn btn-primary" />
          </center>
        </div>
      </form>
    </div>
  );
}
