import './App.css';
import Axios from "axios";
import React, { useEffect, useState } from 'react';


function App() {

  const [catFact, setCatFact] = useState('');
  const [dogFact, setDogFact] = useState('');

  const fetchCatFact = () =>{
    Axios.get('https://catfact.ninja/fact')
      .then((res) => {
        setCatFact(res.data.fact);
      });
  }

  const fetchDogFact = () => {
    Axios.get('https://dog-api.kinduff.com/api/facts')
      .then((res) => {
        const randomIndex = Math.floor(Math.random() * res.data.facts.length);
        const randomFact = res.data.facts[randomIndex];
        setDogFact(randomFact);
      })
  }


  useEffect(() =>{
    Axios.get('https://catfact.ninja/fact')
      .then((res) => {
        setCatFact(res.data.fact);
      });
  },[]);

  useEffect(() =>{
    Axios.get('https://dog-api.kinduff.com/api/facts')
      .then((res) => {
        setDogFact(res.data.fact);
      });
  },[]);


  return (
    <div className="App">
      <header className="App-header">
  
        <h1 className="text-3xl font-bold mb-4">Pet Facts Generator</h1>
        <h2>Do you have a pet? Well, it doesn't matter. Learn about cats and dogs now by generating facts.</h2>
  
        <h3>Do you want to learn about cats? Generate facts.</h3>
        <button onClick={fetchCatFact}>Generate Cat Fact</button>
        <p>{catFact}</p>
  
        <h3>Do you want to learn about dogs? Generate facts.</h3>
        <button onClick={fetchDogFact}>Generate Dog Fact</button>
        <p>{dogFact}</p>
  
      </header>
    </div>
  );
}

export default App;
