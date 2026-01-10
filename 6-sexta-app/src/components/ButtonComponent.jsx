import React, { useState } from "react";

export default function ButtonComponent() {
  const [clickCounter, setClickCounter] = useState(0);

  const addClickCounter = () => {
    setClickCounter(clickCounter + 1);
  };

  const subtractClickCounter = () => {
    setClickCounter(clickCounter - 1);
  };

  const resetClickCounter = () => {
    setClickCounter(0);
  };

  return (
    <div>
      <h2>Button Counter</h2>

      <p>El número de veces que se ha hecho click es: {clickCounter}</p>

      <div>
        <button onClick={addClickCounter}>Sumar click</button>
      </div>

      <div>
        <button onClick={subtractClickCounter}>Restar click</button>
      </div>

      <div>
        <button onClick={resetClickCounter}>Reset click counter</button>
      </div>
    </div>
  );
}
