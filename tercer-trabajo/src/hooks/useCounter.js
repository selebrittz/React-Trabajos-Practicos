import { useState } from "react";

export const useCounter = (initialValue) => {
  //valor inicial del counter
  const [counter, setCounter] = useState(initialValue);

  //funcion que maneja el incremento
  const handleIncrement = (number) => {
    const suma = counter + number;
    setCounter(suma);
  };

  //funcion que maneja el decremento
  const handleDecrement = (number) => {
    const resta = counter - number;
    if (resta < 1) return;
    setCounter(resta);
  };

  //reset del counter
  const handleReset = () => {
    setCounter(initialValue);
  };

  //retorno lo que voy a usar despues
  return {
    counter,
    handleDecrement,
    handleIncrement,
    handleReset,
  };
};
