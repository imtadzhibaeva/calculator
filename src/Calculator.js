import React, {useState, useEffect} from 'react';

const Calculator = () => {
  const [firstNumber, setFirstNumber] = useState('');
  const [secondNumber, setSecondNumber] = useState('');
  const [result, setResult] = useState(null);

  const handleAddition = () => {
    const sum = parseFloat(firstNumber) + parseFloat(secondNumber)
    setResult(sum);
  };

  const handleSubtraction = () => {
    const difference = parseFloat(firstNumber) - parseFloat(secondNumber)
    setResult(difference);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Simple Calculator</h1>
      <div>
        <input
          type="number"
          value={firstNumber}
          onChange={(e) => setFirstNumber(e.target.value)}
          placeholder="First Number"
        />
      </div>
      <div>
        <input
          type="number"
          value={secondNumber}
          onChange={(e) => setSecondNumber(e.target.value)}
          placeholder="Second Number"
        />
      </div>
      <div>
        <button onClick={handleAddition}>Add</button>
        <button onClick={handleSubtraction}>Subtract</button>
      </div>
      {result !== null && (
        <div>
          <h2>Result: {result}</h2>
        </div>
      )}
    </div>
  );
};



export default Calculator;
