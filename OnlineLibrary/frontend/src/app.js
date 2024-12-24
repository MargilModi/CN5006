import React, { useEffect } from 'react';
import axios from 'axios';

function App() {
  useEffect(() => {
    // Making a request to the backend
    axios.get('http://localhost:5000/api/endpoint')
      .then(response => {
        console.log(response.data);  // Should log the backend response
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
  }, []);

  return (
    <div className="App">
      <h1>Frontend is connected to the backend</h1>
    </div>
  );
}

export default App;
