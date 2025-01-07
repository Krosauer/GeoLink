import React, { useState } from 'react';
import axios from 'axios';

function App() {

  const fetchAPI = async () => {
    const responce = await axios.get('http://localhost:8080/api/test');
    console.log(responce.data);
  }

  useState(() => {
    fetchAPI();
  },[])
  return (
    <>
    </>
  )
}

export default App
