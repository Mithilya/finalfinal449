import './App.css';
import Axios from "axios";
import React, { useEffect, useState } from 'react';


function App() {

  const [catFact, setCatFact] = useState('');
  const [dogFact, setDogFact] = useState('');
  const [hasPet, setHasPet] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (event) => {
    setHasPet(event.target.value);
  };
  

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
    <div style={{ backgroundColor: '#E4E4E4', minHeight: '100vh' }}>
      <div className="container mx-auto px-4">
        <header className="text-center">




        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <span className="navbar-brand mb-0 h1">Pet Facts Generator</span>
        </div>
      </nav>



          <h2 className="text-lg mb-4">
            Do you have a pet? Well, it doesn't matter. Learn about cats and dogs now by generating facts.
          </h2>


          
          <div className="my-6">
            <h3 className="text-2xl font-semibold mb-3">Do you want to learn about cats? Generate facts.</h3>
            <button onClick={fetchCatFact} className="btn btn-primary btn-lg">
                Generate Cat Fact
              </button>
            <p className="text-green-800 mt-2">{catFact}</p>
          </div>



          <div className="my-6">
            <h3 className="text-2xl font-semibold mb-3">Do you want to learn about dogs? Generate facts.</h3>
            <button onClick={fetchDogFact} className="btn btn-primary btn-lg">
                Generate Dog Fact
              </button>
            <p className="text-blue-800 mt-2">{dogFact}</p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="petInput" className="form-label">Do you have a pet?</label>
              <input
                type="text"
                className="form-control"
                id="petInput"
                placeholder="Enter Yes or No"
                value={hasPet}
                onChange={handleChange}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>


          {submitted && (
            <p className="mt-3">
              You submitted: <strong>{hasPet} <h2>Guess what? I really don't care if you have a pet</h2></strong>
            </p>
          )}
        </header>
      </div>
    </div>
  );
}

export default App;
