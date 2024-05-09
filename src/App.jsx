import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0); // hook implemented 
  
// In React, a "hook" is a function that allows you to use state and other React features in functional components. Hooks were introduced in React 16.8 to enable developers to use stateful logic in functional components without having to convert them into class components.

// The most commonly used hook is the useState hook, which allows you to add state variables to functional components. With useState, you can declare a state variable and a function to update that variable, all within a functional component.

  let add = () => {
    // Check if counter is greater than or equal to 20
    if (counter >= 20) {
      alert("You are out of counting");
    } else {
      setCounter(counter + 1);
    }
  };

  let remove = () => {
    // Check if counter is less than or equal to -20
    if (counter <= -20) {
      alert("You are out of counting");
    } else {
      setCounter(counter - 1);
    }
  };

  return (
    <>
      <h1>Chai aur react|| psycho</h1>
      <h3>Count will be {counter}</h3>
      <button onClick={add}>Add: {counter}</button><br />
      <button onClick={remove}>Remove: {counter}</button>
    </>
  );
}

export default App;
