import React, { useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

export default function DeleteBook() {
  const { id } = useParams();
  const navigate = useNavigate();
  let url = "http://localhost:5000/";

  useEffect(() => {
    axios
      .delete(url + "deletebook/" + id)
      .then((res) => {
        console.log(res.data);
        navigate("/DisplayBooksF1");
      })
      .catch((err) => console.log(err));
  }, [id, url, navigate]);

  return (
    <div>
      <h3>Deleting Book...</h3>
    </div>
  );
}
