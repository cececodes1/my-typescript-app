import React from 'react';
import './App.css';
import ColorList from './components/ColorList';
import EvenNumbers from './components/EvenNumbers';
import UserList from './components/UserList';

const App: React.FC = () => {
  const greeting: string = "Hello, TypeScript!";
  const numberList: number[] = [5, 10, 15];
  
  function calculateSum(a: number, b: number): number {
    return a + b;
  }
  const sum = calculateSum(5, 10);

  return (
    <div>
      <h1>{greeting}</h1>
      <p>Number List: {numberList.join(", ")}</p>
      <p>Sum of 5 and 10: {sum}</p>
    </div>
  );
};

export default App;
