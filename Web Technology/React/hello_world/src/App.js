import logo from './logo.svg';
import './App.css';

import React, { useState, useEffect } from 'react';
const LifecycleComponent = () => {
const [count, setCount] = useState(0);
const [message, setMessage] = useState('Hello, World!');
// Equivalent to componentDidMount, componentDidUpdate, componentWillUnmount
useEffect(() => {
// This function will run once when the component mounts (initial render)
console.log('Component mounted!');
// This return function acts like componentWillUnmount
return () => {
console.log('Component will unmount!');
};
}, []); // Empty dependency array means this runs only once on mount
useEffect(() => {
// This function will run every time the count changes (update phase)
console.log(`Count updated to: ${count}`);
}, [count]); // This runs only when `count` changes
const handleClick = () => {
setCount(count + 1); // Increment count
};
const handleMessageChange = () => {
setMessage('Message has been changed!');
};
return (
<div>
<h1>React Component Lifecycle Example</h1>
<p>Message: {message}</p>
<p>Count: {count}</p>
<button onClick={handleClick}>Increment Count</button>
<button onClick={handleMessageChange}>Change Message</button>
</div>
);
};
const App = () => {
return (
<div className="App">
<h2>React Component Lifecycle Demo</h2>
<LifecycleComponent />
</div>
);
};
export default App;