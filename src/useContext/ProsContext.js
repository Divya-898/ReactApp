import React, { useContext } from 'react'
const CounterContext = React.createContext();

const CounterProvider = ({ children }) => {
  const [count, setCount] = React.useState(0);
  const [hello, setHello] = React.useState("Hello world");

  const increment = () => setCount(counter => counter + 1);
  const decrement = () => setCount(counter => counter - 1);

  const value = {
    count,
    increment,
    decrement,
    hello
  };

  return (
    <CounterContext.Provider value={value}>{children}</CounterContext.Provider>
  );
};

const SayHello = () => {
  const { hello } = React.useContext(CounterContext);
  console.log("[SayHello] is running");
  return <h1>{hello}</h1>;
};

const IncrementCounter = () => {
  const { increment } = React.useContext(CounterContext);
  console.log("[IncrementCounter] is running");
  return <button onClick={increment}> Increment</button>;
};

const DecrementCounter = () => {
  console.log("[DecrementCounter] is running");
  const { decrement } = React.useContext(CounterContext);
  return <button onClick={decrement}> Decrement</button>;
};

const ShowResult = () => {
  console.log("[ShowResult] is running");
  const { count } = React.useContext(CounterContext);
  return <h1>{count}</h1>;
};

export const App2 = () => (
  <CounterProvider>
    <SayHello />
    <ShowResult />
    <IncrementCounter />
    <DecrementCounter />
  </CounterProvider>
);