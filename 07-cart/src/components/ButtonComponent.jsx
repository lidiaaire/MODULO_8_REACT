import React, { useState } from "react";

export default function ButtonComponent() {
  const [clickCounter, setClickCounter] = useState(0);

  return (
    <div>
      <h2>Button Counter</h2>
      <p>{clickCounter}</p>

      <button onClick={() => setClickCounter(clickCounter + 1)}>+</button>
      <button onClick={() => setClickCounter(clickCounter - 1)}>-</button>
      <button onClick={() => setClickCounter(0)}>Reset</button>
    </div>
  );
}
