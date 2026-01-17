import React from "react";

export default function AgeComponent() {
  const birthday = new Date(1995, 9, 1).toLocaleDateString();

  const age = 30;

  return (
    <div>
      <h1>
        {" "}
        Mi fecha de nacimiento es {birthday} y tengo {age} años
      </h1>
    </div>
  );
}
