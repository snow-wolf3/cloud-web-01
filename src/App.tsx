import React, { useEffect } from 'react';
import axios from 'axios'
import './App.css';

function App() {
  useEffect(() => {
    axios.get('http://localhost:8787/getData', {
      params: {
        ID: 12345
      }
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    })
    .then(function () {
      // always executed
    }); 
  }, [])
  return (
    <div className="App">
    </div>
  );
}

export default App;
