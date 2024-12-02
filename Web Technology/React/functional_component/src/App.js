import React, { useState } from 'react';
import './App.css';

const AddTwoNumbers = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [sum, setSum] = useState(null);

  const handleAddition = () => {
    const result = parseFloat(num1 || 0) + parseFloat(num2 || 0);
    setSum(result);
  };

  return (
    <div style={{ textAlign: 'center', margin: '50px' }}>
      <h1>Add Two Numbers</h1>
      <div style={{ marginBottom: '20px' }}>
        <input
          type="number"
          placeholder="Enter first number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
          style={{ marginRight: '10px', padding: '5px' }}
        />
        <input
          type="number"
          placeholder="Enter second number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
          style={{ marginRight: '10px', padding: '5px' }}
        />
        <button onClick={handleAddition} style={{ padding: '5px 10px' }}>Add</button>
      </div>
      {sum !== null && <h2>Result: {sum}</h2>}
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <AddTwoNumbers />
    </div>
  );
}

export default App;
