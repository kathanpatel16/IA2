import React, { useState, useMemo } from 'react';

function CalculateFactorial() {
  const [number, setNumber] = useState(1);
  const [counter, setCounter] = useState(0);

  // Calculate factorial using useMemo to avoid unnecessary recalculations
  const factorial = useMemo(() => factorialOf(number), [number]);

  const onChange = (event) => {
    setNumber(Number(event.target.value));
  };

  const counterHandler = () => {
    setCounter(counter + 1);
  };

  return (
    <div>
      <p>Factorial of</p>
      <input type="number" value={number} onChange={onChange} />
      <p>is {factorial}</p>
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