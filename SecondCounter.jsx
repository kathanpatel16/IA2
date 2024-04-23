import React, { useState } from 'react';

function useFactorial(initialNumber) {
  const [number, setNumber] = useState(initialNumber);
  const [factorial, setFactorial] = useState(factorialOf(initialNumber));

  const calculateFactorial = () => {
    setFactorial(factorialOf(number));
  };

  const onChange = (event) => {
    const newNumber = Number(event.target.value);
    setNumber(newNumber);
  };

  return { number, factorial, onChange, calculateFactorial };
}

function CalculateFactorial() {
  const { number, factorial, onChange, calculateFactorial } = useFactorial(1);
  const [counter, setCounter] = useState(0);
  const [showFactorial, setShowFactorial] = useState(true);

  const toggleFactorial = () => {
    setShowFactorial(!showFactorial);
  };

  const counterHandler = () => {
    setCounter(counter + 1);
  };

  return (
    <div>
      <p>Factorial of</p>
      <input type="number" value={number} onChange={onChange} />
      {showFactorial && <p>is {factorial}</p>}
      <button onClick={calculateFactorial}>Calculate Factorial</button>
      <button onClick={toggleFactorial}>Toggle Factorial</button>
      <button onClick={counterHandler}>Counter</button>
      <div>Counter: {counter}</div>
    </div>
  );
}

function factorialOf(n) {
  console.log("factorialOf(n) called!");
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorialOf(n - 1);
  }
}

export default CalculateFactorial;
