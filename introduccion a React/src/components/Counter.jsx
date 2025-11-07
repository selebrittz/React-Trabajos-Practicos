import { useState } from "react";

export const Counter2 = () => {
  // const [count, setCount] =useState(2);
  const initialValue = {
    counter1: 10,
    counter2: 20,
    counter3: 30,
  };

  const [counters, setCounters] = useState(initialValue);
  const { counter1, counter2, counter3 } = counters;

  const handleIncrement = () => {
    setCounters({
      counter1: counter1 + 1,
      counter2: counter2 + 1,
      counter3: counter3 + 1,
    });
  };
  const handleDecrement = () => {
    setCounters({
      counter1: counter1 - 1,
      counter2: counter2 - 1,
      counter3: counter3 - 1,
    });
if ( counter1 === 0) return;

  };
  const handleReset = () => {
    setCounters(initialValue);
 };

//   const handleIncrementSoloA = () => {
//     setCounters({
//       ...counters,
//       counter1: counter1 + 1,
//     });
//   };
//   const handleDecrementSoloA = () => {
//     setCounters({
//       ...counters,
//       counter1: counter1 - 1,
//     });
//   };
  return (
    <>
      {" "}
      <h1>Contador 2 </h1>
      <h2>Contador A: {counter1}</h2>
      <h2>Contador B: {counter2}</h2>
      <h2>Contador C: {counter3}</h2>
      <button onClick={handleIncrement}>+1</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleDecrement}>-1</button>
      {/* <button onClick={handleIncrementSoloA}>+1 "A"</button>
      <button onClick={handleDecrementSoloA}>-1 "A"</button> */}
    </>
  );
}

