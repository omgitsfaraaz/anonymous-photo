import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [image, setImage] = useState('')

  const handleChange = () => {
    axios
      .get(
        'https://api.generated.photos/api/v1/faces?api_key=toGsTrSOE541OMVkIsLgMQ&order_by=random'
      )
      .then(res => {
        const uri = res.data.faces[0].urls[4][512]
        uri && setImage(uri)
      })
      .catch(err => {
        console.log(err.message);
      })
  };


  return (
    <div className="App">
      <h1>Random AI Photo generator</h1>
      {image && <img src={image} alt='AI face' />}
      <button type='button' onClick={handleChange}>
        New Image
      </button>
    </div>
  );
}

export default App;
