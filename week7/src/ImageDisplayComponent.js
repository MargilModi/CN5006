import React, { useState } from "react";

const ImageDisplayComponent = () => {
  const [inputText, setInputText] = useState("");

  // Define a function to return image based on the input
  const getImage = (text) => {
    if (text.toLowerCase() === "happy") {
      return "https://example.com/happy.png"; // Replace with a valid image URL
    } else if (text.toLowerCase() === "like") {
      return "https://example.com/like.png"; // Replace with a valid image URL
    } else if (text.toLowerCase() === "sad") {
      return "https://example.com/sad.png"; // Replace with a valid image URL
    } else {
      return null; // No image for other texts
    }
  };

  // Event handler for input change
  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>Emoji Display Component</h2>
      <input
        type="text"
        placeholder="Type 'Happy', 'Like', or 'Sad'"
        value={inputText}
        onChange={handleChange}
        style={{ padding: "10px", fontSize: "16px" }}
      />
      <div style={{ marginTop: "20px" }}>
        {getImage(inputText) ? (
          <img src={getImage(inputText)} alt={inputText} style={{ width: "100px", height: "100px" }} />
        ) : (
          <p>Type 'Happy', 'Like', or 'Sad' to see an image</p>
        )}
      </div>
    </div>
  );
};

export default ImageDisplayComponent;
